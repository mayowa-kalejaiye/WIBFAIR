"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { projectSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";

async function requireAuth() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
  return session;
}

function parseFormData(formData: FormData) {
  return {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    year: formData.get("year") as string,
    link: (formData.get("link") as string) || "",
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

export async function createProject(formData: FormData) {
  await requireAuth();
  const raw = parseFormData(formData);
  const parsed = projectSchema.safeParse(raw);
  if (!parsed.success) {
    return { error: parsed.error.flatten() };
  }
  const data = parsed.data;

  const coverId = await handleCover(formData);

  const project = await prisma.project.create({
    data: {
      name: data.name,
      description: data.description,
      year: data.year,
      link: data.link || null,
      coverId: coverId ?? null,
    },
  });

  revalidatePath("/about");
  revalidatePath("/admin/projects");
  return { success: true, id: project.id };
}

export async function updateProject(id: string, formData: FormData) {
  await requireAuth();
  const raw = parseFormData(formData);
  const parsed = projectSchema.safeParse(raw);
  if (!parsed.success) {
    return { error: parsed.error.flatten() };
  }
  const data = parsed.data;

  const existing = await prisma.project.findUnique({ where: { id } });
  if (!existing) return { error: "Not found" };

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

  await prisma.project.update({
    where: { id },
    data: {
      name: data.name,
      description: data.description,
      year: data.year,
      link: data.link || null,
      coverId,
    },
  });

  revalidatePath("/about");
  revalidatePath("/admin/projects");
  return { success: true };
}

export async function deleteProject(id: string) {
  await requireAuth();
  const proj = await prisma.project.findUnique({ where: { id } });
  if (!proj) throw new Error("Not found");
  await prisma.project.delete({ where: { id } });
  if (proj.coverId) {
    try {
      await prisma.media.delete({ where: { id: proj.coverId } });
    } catch {}
  }
  revalidatePath("/about");
  revalidatePath("/admin/projects");
  return { success: true };
}
