import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import StoryForm from "@/components/admin/StoryForm";

export default async function EditStoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const story = await prisma.story.findUnique({ where: { id }, include: { cover: true } });
  if (!story) notFound();

  return (
    <div>
      <h1 className="font-display text-3xl mb-2">Edit Story</h1>
      <p className="font-sans text-sm text-olive mb-8">{story.slug}</p>
      <StoryForm
        initial={{
          id: story.id,
          title: story.title,
          slug: story.slug,
          excerpt: story.excerpt,
          content: story.content,
          category: story.category,
          status: story.status as any,
          publishedAt: story.publishedAt ?? undefined,
          coverUrl: story.coverId ? `/api/media/${story.coverId}` : null,
        }}
      />
    </div>
  );
}
