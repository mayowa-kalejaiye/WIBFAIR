"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { episodeSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function requireAuth() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
  return session;
}

function parseFormData(formData: FormData) {
  const raw = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    description: formData.get("description") as string,
    youtubeUrl: formData.get("youtubeUrl") as string,
    guest: (formData.get("guest") as string) || "",
    topics: (() => {
      const t = formData.get("topics") as string;
      if (!t) return [];
      return t
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    })(),
    durationMinutes: formData.get("durationMinutes")
      ? Number(formData.get("durationMinutes"))
      : undefined,
    status: (formData.get("status") as string) || "draft",
    publishedAt: formData.get("publishedAt")
      ? new Date(formData.get("publishedAt") as string)
      : undefined,
  };
  return raw;
}

async function handleThumbnail(formData: FormData): Promise<string | undefined> {
  const file = formData.get("thumbnail") as File | null;
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

export async function createEpisode(formData: FormData) {
  await requireAuth();

  const raw = parseFormData(formData);
  const parsed = episodeSchema.safeParse(raw);
  if (!parsed.success) {
    return { error: parsed.error.flatten() };
  }

  const data = parsed.data;

  // Check slug uniqueness
  const existing = await prisma.episode.findUnique({ where: { slug: data.slug } });
  if (existing) {
    return { error: { formErrors: [], fieldErrors: { slug: ["Slug already exists"] } } };
  }

  const thumbnailId = await handleThumbnail(formData);

  const episode = await prisma.episode.create({
    data: {
      title: data.title,
      slug: data.slug,
      description: data.description,
      youtubeUrl: data.youtubeUrl,
      guest: data.guest || null,
      topics: data.topics,
      durationMinutes: data.durationMinutes ?? null,
      status: data.status,
      publishedAt: data.publishedAt ?? (data.status === "published" ? new Date() : null),
      thumbnailId: thumbnailId ?? null,
    },
  });

  revalidatePath("/just-a-chat");
  revalidatePath("/admin/episodes");
  revalidatePath("/");
  return { success: true, id: episode.id };
}

export async function updateEpisode(id: string, formData: FormData) {
  await requireAuth();

  const raw = parseFormData(formData);
  const parsed = episodeSchema.safeParse(raw);
  if (!parsed.success) {
    return { error: parsed.error.flatten() };
  }
  const data = parsed.data;

  const existing = await prisma.episode.findUnique({ where: { id } });
  if (!existing) return { error: "Not found" };

  // Slug conflict
  const slugOwner = await prisma.episode.findUnique({ where: { slug: data.slug } });
  if (slugOwner && slugOwner.id !== id) {
    return { error: { formErrors: [], fieldErrors: { slug: ["Slug already exists"] } } };
  }

  let thumbnailId = existing.thumbnailId;
  const newThumb = await handleThumbnail(formData);
  if (newThumb) {
    // Optionally delete old media
    if (thumbnailId) {
      try {
        await prisma.media.delete({ where: { id: thumbnailId } });
      } catch {}
    }
    thumbnailId = newThumb;
  }

  // Handle removal flag
  const removeThumb = formData.get("removeThumbnail") === "true";
  if (removeThumb && thumbnailId) {
    try {
      await prisma.media.delete({ where: { id: thumbnailId } });
    } catch {}
    thumbnailId = null;
  }

  await prisma.episode.update({
    where: { id },
    data: {
      title: data.title,
      slug: data.slug,
      description: data.description,
      youtubeUrl: data.youtubeUrl,
      guest: data.guest || null,
      topics: data.topics,
      durationMinutes: data.durationMinutes ?? null,
      status: data.status,
      publishedAt: data.publishedAt ?? (data.status === "published" ? existing.publishedAt ?? new Date() : null),
      thumbnailId,
    },
  });

  revalidatePath("/just-a-chat");
  revalidatePath(`/just-a-chat/${data.slug}`);
  revalidatePath("/admin/episodes");
  revalidatePath("/");
  return { success: true };
}

export async function deleteEpisode(id: string) {
  await requireAuth();
  const ep = await prisma.episode.findUnique({ where: { id } });
  if (!ep) throw new Error("Not found");
  await prisma.episode.delete({ where: { id } });
  if (ep.thumbnailId) {
    try {
      await prisma.media.delete({ where: { id: ep.thumbnailId } });
    } catch {}
  }
  revalidatePath("/just-a-chat");
  revalidatePath("/admin/episodes");
  revalidatePath("/");
  return { success: true };
}

export async function toggleEpisodeStatus(id: string) {
  await requireAuth();
  const ep = await prisma.episode.findUnique({ where: { id } });
  if (!ep) throw new Error("Not found");
  const newStatus = ep.status === "published" ? "draft" : "published";
  await prisma.episode.update({
    where: { id },
    data: {
      status: newStatus,
      publishedAt: newStatus === "published" ? ep.publishedAt ?? new Date() : ep.publishedAt,
    },
  });
  revalidatePath("/just-a-chat");
  revalidatePath("/admin/episodes");
  return { success: true };
}
