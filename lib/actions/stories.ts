"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { storySchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";

async function requireAuth() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
  return session;
}

function parseFormData(formData: FormData) {
  return {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    excerpt: formData.get("excerpt") as string,
    content: formData.get("content") as string,
    category: formData.get("category") as string,
    status: (formData.get("status") as string) || "draft",
    publishedAt: formData.get("publishedAt")
      ? new Date(formData.get("publishedAt") as string)
      : undefined,
  };
}

async function handleCover(formData: FormData): Promise<string | undefined> {
  const file = formData.get("cover") as File | null;
  if (!file || file.size === 0) return undefined;
  const MAX = 5 * 1024 * 1024;
  const ACCEPTED = ["image/jpeg", "image/png", "image/webp", "image/avif"];
  if (file.size > MAX) throw new Error("Max image size is 5MB");
  if (!ACCEPTED.includes(file.type)) throw new Error("Invalid image type");

  const { processImage } = await import("@/lib/image");
  const { buffer, mimeType, width, height, size } = await processImage(file);
  const media = await prisma.media.create({
    data: {
      filename: file.name.replace(/\.[^.]+$/, ".webp"),
      mimeType,
      size,
      data: buffer as any,
      width,
      height,
    },
  });
  return media.id;
}

export async function createStory(formData: FormData) {
  await requireAuth();
  const raw = parseFormData(formData);
  const parsed = storySchema.safeParse(raw);
  if (!parsed.success) {
    return { error: parsed.error.flatten() };
  }
  const data = parsed.data;

  const existing = await prisma.story.findUnique({ where: { slug: data.slug } });
  if (existing) {
    return { error: { formErrors: [], fieldErrors: { slug: ["Slug already exists"] } } };
  }

  const coverId = await handleCover(formData);

  const story = await prisma.story.create({
    data: {
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      category: data.category,
      status: data.status,
      publishedAt: data.publishedAt ?? (data.status === "published" ? new Date() : null),
      coverId: coverId ?? null,
    },
  });

  revalidatePath("/stories");
  revalidatePath("/admin/stories");
  revalidatePath("/");
  return { success: true, id: story.id };
}

export async function updateStory(id: string, formData: FormData) {
  await requireAuth();
  const raw = parseFormData(formData);
  const parsed = storySchema.safeParse(raw);
  if (!parsed.success) {
    return { error: parsed.error.flatten() };
  }
  const data = parsed.data;

  const existing = await prisma.story.findUnique({ where: { id } });
  if (!existing) return { error: "Not found" };

  const slugOwner = await prisma.story.findUnique({ where: { slug: data.slug } });
  if (slugOwner && slugOwner.id !== id) {
    return { error: { formErrors: [], fieldErrors: { slug: ["Slug already exists"] } } };
  }

  let coverId = existing.coverId;
  const newCover = await handleCover(formData);
  if (newCover) {
    if (coverId) {
      try {
        await prisma.media.delete({ where: { id: coverId } });
      } catch {}
    }
    coverId = newCover;
  }

  const removeCover = formData.get("removeCover") === "true";
  if (removeCover && coverId) {
    try {
      await prisma.media.delete({ where: { id: coverId } });
    } catch {}
    coverId = null;
  }

  await prisma.story.update({
    where: { id },
    data: {
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      category: data.category,
      status: data.status,
      publishedAt: data.publishedAt ?? (data.status === "published" ? existing.publishedAt ?? new Date() : null),
      coverId,
    },
  });

  revalidatePath("/stories");
  revalidatePath(`/stories/${data.slug}`);
  revalidatePath("/admin/stories");
  revalidatePath("/");
  return { success: true };
}

export async function deleteStory(id: string) {
  await requireAuth();
  const story = await prisma.story.findUnique({ where: { id } });
  if (!story) throw new Error("Not found");
  await prisma.story.delete({ where: { id } });
  if (story.coverId) {
    try {
      await prisma.media.delete({ where: { id: story.coverId } });
    } catch {}
  }
  revalidatePath("/stories");
  revalidatePath("/admin/stories");
  revalidatePath("/");
  return { success: true };
}
