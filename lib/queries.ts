import { prisma } from "@/lib/db";

export async function getPublishedEpisodes() {
  return prisma.episode.findMany({
    where: { status: "published" },
    orderBy: { publishedAt: "desc" },
    include: { thumbnail: true },
  });
}

export async function getAllEpisodes() {
  return prisma.episode.findMany({
    orderBy: { createdAt: "desc" },
    include: { thumbnail: true },
  });
}

export async function getEpisodeBySlug(slug: string) {
  return prisma.episode.findUnique({
    where: { slug },
    include: { thumbnail: true },
  });
}

export async function getPublishedStories() {
  return prisma.story.findMany({
    where: { status: "published" },
    orderBy: { publishedAt: "desc" },
    include: { cover: true },
  });
}

export async function getAllStories() {
  return prisma.story.findMany({
    orderBy: { createdAt: "desc" },
    include: { cover: true },
  });
}

export async function getStoryBySlug(slug: string) {
  return prisma.story.findUnique({
    where: { slug },
    include: { cover: true },
  });
}

export async function getProjects() {
  return prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    include: { cover: true },
  });
}
