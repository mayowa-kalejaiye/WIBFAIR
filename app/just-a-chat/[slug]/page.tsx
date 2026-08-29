import { prisma } from "@/lib/db";
import { EPISODES as FALLBACK } from "@/data/episodes";
import { notFound } from "next/navigation";
import Link from "next/link";
import { youtubeEmbedUrl, extractYoutubeId } from "@/lib/youtube";

export const dynamic = "force-dynamic";

export default async function EpisodePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let episode: any = null;
  try {
    episode = await prisma.episode.findUnique({ where: { slug } });
  } catch {}
  if (!episode) {
    const fb = FALLBACK.find((ep) => ep.slug === slug);
    if (fb) {
      episode = { ...fb, youtubeUrl: `https://www.youtube.com/watch?v=${fb.youtubeId}`, thumbnailId: null };
    }
  }
  if (!episode) notFound();

  let related: any[] = [];
  try {
    related = await prisma.episode.findMany({
      where: { NOT: { id: episode.id }, status: "published" },
      take: 3,
      orderBy: { publishedAt: "desc" },
    });
  } catch {}
  if (related.length === 0) {
    related = FALLBACK.filter((ep) => ep.slug !== slug).slice(0, 3).map((e) => ({ ...e, youtubeUrl: `https://www.youtube.com/watch?v=${e.youtubeId}` }));
  }

  const embedUrl = youtubeEmbedUrl(episode.youtubeUrl || "");
  const youtubeId = extractYoutubeId(episode.youtubeUrl || "");

  return (
    <div className="min-h-screen pt-32 pb-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="mb-12 text-center md:text-left">
          <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold block mb-4">
            Just A Chat &mdash; Episode {episode.id?.includes("-") ? episode.id.split("-")[1] : episode.slug}
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[90px] leading-tight mb-8">{episode.title}</h1>
        </div>

        <div className="relative aspect-video w-full bg-ink rounded-[2px] overflow-hidden mb-16 shadow-2xl">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={episode.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-cream/50 text-xs font-sans tracking-widest uppercase">
              YouTube Embed ({youtubeId ?? episode.youtubeUrl})
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 border-b border-ink/10 pb-24">
          <div className="md:col-span-8">
            <h2 className="font-sans text-xs font-semibold tracking-widest uppercase text-olive mb-6">In this conversation</h2>
            <p className="font-sans text-xl text-ink leading-relaxed mb-8">{episode.description}</p>
            {youtubeId && (
              <a href={`https://www.youtube.com/watch?v=${youtubeId}`} target="_blank" rel="noopener noreferrer" className="inline-block font-sans text-xs font-semibold tracking-widest uppercase border-b border-ink pb-1 hover:text-clay hover:border-clay transition-colors">
                Watch on YouTube &rarr;
              </a>
            )}
          </div>
          <div className="md:col-span-4 space-y-8">
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-olive mb-2">Guest</h3>
              <p className="font-display text-2xl">{episode.guest || "Solo Episode"}</p>
            </div>
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-olive mb-2">Themes</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {(episode.topics ?? []).map((topic: string) => (
                  <span key={topic} className="px-3 py-1 bg-paper text-ink font-sans text-[10px] tracking-widest uppercase rounded-full">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-olive mb-2">Published</h3>
              <p className="font-sans text-sm text-ink">{episode.publishedAt ? new Date(episode.publishedAt).toLocaleDateString() : "Draft"}</p>
            </div>
          </div>
        </div>

        <div className="pt-24">
          <h3 className="font-display text-4xl mb-12">You might also like</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((ep: any) => (
              <Link key={ep.id} href={`/just-a-chat/${ep.slug}`} className="group block">
                <div className="relative aspect-[16/10] bg-paper rounded-[2px] overflow-hidden mb-4">
                  {ep.thumbnailId ? <img src={`/api/media/${ep.thumbnailId}`} alt={ep.title} className="w-full h-full object-cover" /> : null}
                  <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                </div>
                <span className="font-sans text-[10px] tracking-widest uppercase text-clay font-semibold block mb-2">
                  EP {ep.id?.includes("-") ? ep.id.split("-")[1] : ep.slug.slice(0, 8)}
                </span>
                <h4 className="font-display text-2xl group-hover:text-clay transition-colors duration-300">{ep.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const episodes = await prisma.episode.findMany({ select: { slug: true } });
    if (episodes.length > 0) return episodes.map((ep) => ({ slug: ep.slug }));
  } catch {}
  // fallback
  const { EPISODES } = await import("@/data/episodes");
  return EPISODES.map((ep) => ({ slug: ep.slug }));
}
