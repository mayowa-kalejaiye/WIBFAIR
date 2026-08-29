"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];

async function requireAuth() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
  return session;
}

export async function uploadMedia(file: File): Promise<string> {
  await requireAuth();

  if (!file || file.size === 0) throw new Error("No file provided");
  if (file.size > MAX_FILE_SIZE) throw new Error("Max image size is 5MB");
  if (!ACCEPTED_TYPES.includes(file.type)) throw new Error("Invalid file type");

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

export async function deleteMedia(id: string) {
  await requireAuth();
  await prisma.media.delete({ where: { id } });
}

export async function getMedia(id: string) {
  return prisma.media.findUnique({ where: { id } });
}
