import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import EpisodeForm from "@/components/admin/EpisodeForm";

export default async function EditEpisodePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ep = await prisma.episode.findUnique({ where: { id }, include: { thumbnail: true } });
  if (!ep) notFound();

  return (
    <div>
      <h1 className="font-display text-3xl mb-2">Edit Episode</h1>
      <p className="font-sans text-sm text-olive mb-8">{ep.slug}</p>
      <EpisodeForm
        initial={{
          id: ep.id,
          title: ep.title,
          slug: ep.slug,
          description: ep.description,
          youtubeUrl: ep.youtubeUrl,
          guest: ep.guest ?? "",
          topics: ep.topics,
          durationMinutes: ep.durationMinutes ?? undefined,
          status: ep.status as any,
          publishedAt: ep.publishedAt ?? undefined,
          thumbnailUrl: ep.thumbnailId ? `/api/media/${ep.thumbnailId}` : null,
        }}
      />
    </div>
  );
}
