import { prisma } from "@/lib/db";
import { EPISODES as FALLBACK } from "@/data/episodes";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { youtubeEmbedUrl, extractYoutubeId } from "@/lib/youtube";
import Eyebrow from "@/components/ui/Eyebrow";
import FlowerMotif from "@/components/motif/FlowerMotif";
import TiltCard from "@/components/motion/TiltCard";

export const dynamic = "force-dynamic";

export default async function EpisodePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let episode: any = null;
  try {
    episode = await prisma.episode.findUnique({ where: { slug } });
  } catch {}
  if (!episode) {
    const fb = FALLBACK.find((ep: any) => ep.slug === slug);
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
    related = FALLBACK.filter((ep: any) => ep.slug !== slug)
      .slice(0, 3)
      .map((e: any) => ({ ...e, youtubeUrl: `https://www.youtube.com/watch?v=${e.youtubeId}` }));
  }

  const embedUrl = youtubeEmbedUrl(episode.youtubeUrl || "");
  const youtubeId = extractYoutubeId(episode.youtubeUrl || "");

  function getRelatedThumb(ep: any, idx: number) {
    if (ep.thumbnailId) return `/api/media/${ep.thumbnailId}`;
    const ytId = ep.youtubeId || (ep.youtubeUrl ? ep.youtubeUrl.split("v=")[1]?.split("&")[0] : null);
    if (ytId) return `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`;
    const fallbacks = ["/thumb.jpg", "/thumb2.jpg", "/thumb3.jpg", "/thumb4.jpg", "/thumb5.jpg"];
    return fallbacks[idx % fallbacks.length];
  }

  return (
    <div className="min-h-screen bg-white text-[#1A1118] pt-32 md:pt-40 pb-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Navigation & Header */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#EDD8E4] pb-6">
          <Link
            href="/just-a-chat"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase font-bold text-[#C97A9E] hover:text-[#9B4D77] transition-colors"
          >
            <span>&larr;</span>
            <span>Back to All Broadcasts</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C97A9E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C97A9E]" />
            </span>
            <span className="font-sans text-[11px] tracking-widest uppercase text-[#7A5C72] font-semibold">
              Master Broadcast Stream
            </span>
          </div>
        </div>

        {/* Title Area */}
        <div className="mb-12 relative">
          <div className="flex items-center gap-3 mb-4">
            <FlowerMotif size={44} ambient={true} />
            <span className="w-8 h-px bg-[#C97A9E]" />
            <Eyebrow>Just A Chat with Bunmi Alabi</Eyebrow>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-[68px] leading-[1.08] text-[#1A1118] max-w-5xl">
            {episode.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-[#7A5C72]">
            {episode.publishedAt && (
              <span className="font-sans text-xs tracking-wider uppercase font-semibold text-[#C97A9E] bg-[#FDF6F8] px-3.5 py-1.5 rounded-full border border-[#EDD8E4]">
                Premiered {new Date(episode.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            )}
            {episode.guest && (
              <span className="font-sans text-xs tracking-wider uppercase font-semibold text-[#1A1118] bg-[#FDF6F8] px-3.5 py-1.5 rounded-full border border-[#EDD8E4]">
                Special Guest: {episode.guest}
              </span>
            )}
          </div>
        </div>

        {/* Cinema Video Player Portal */}
        <div className="relative aspect-video w-full rounded-[36px_14px_36px_14px] md:rounded-[48px_18px_48px_18px] bg-[#150D13] border-2 border-[#C97A9E]/30 overflow-hidden shadow-2xl shadow-[#C97A9E]/15 mb-16">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={episode.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-white/70 p-6 text-center">
              <FlowerMotif size={56} ambient={true} className="mb-4" />
              <p className="font-display text-2xl text-white">Broadcast Stream Ready</p>
              <a
                href={episode.youtubeUrl || `https://www.youtube.com/watch?v=${youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 font-sans text-xs tracking-[0.2em] uppercase font-bold bg-[#C97A9E] text-white px-8 py-3.5 rounded-full hover:bg-[#9B4D77] transition-all"
              >
                Watch Directly on YouTube &rarr;
              </a>
            </div>
          )}
        </div>

        {/* Editorial Show Notes & Metadata Column */}
        <div className="grid md:grid-cols-12 gap-12 border-y border-[#EDD8E4] py-14">
          
          <div className="md:col-span-8 space-y-6">
            <Eyebrow>In This Conversation</Eyebrow>
            <p className="font-sans text-lg md:text-xl text-[#1A1118] leading-relaxed whitespace-pre-line">
              {episode.description}
            </p>

            {youtubeId && (
              <div className="pt-6">
                <a
                  href={`https://www.youtube.com/watch?v=${youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs tracking-[0.22em] uppercase font-bold bg-[#C97A9E] text-white px-8 py-4 rounded-full hover:bg-[#9B4D77] transition-all shadow-md inline-flex items-center gap-2 group"
                >
                  <span>Join Discussion on YouTube</span>
                  <span className="group-hover:translate-x-1 transition-transform">&nearr;</span>
                </a>
              </div>
            )}
          </div>

          {/* Broadcast Dossier Capsule */}
          <div className="md:col-span-4 space-y-6 bg-[#FDF6F8] border border-[#EDD8E4] p-8 rounded-[36px_12px_36px_12px] shadow-sm h-fit">
            <div>
              <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#C97A9E] font-bold">
                Lead Broadcaster
              </h3>
              <p className="font-display text-xl text-[#1A1118] mt-1">Bunmi Alabi</p>
              <p className="font-sans text-xs text-[#7A5C72] mt-0.5">Author &amp; Mental Health Counsellor</p>
            </div>

            {episode.guest && (
              <div>
                <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#C97A9E] font-bold">
                  Featured Guest
                </h3>
                <p className="font-display text-xl text-[#1A1118] mt-1">{episode.guest}</p>
              </div>
            )}

            <div>
              <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#C97A9E] font-bold">
                Discussion Themes
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {(episode.topics ?? ["Relationships", "Faith"]).map((topic: string) => (
                  <span
                    key={topic}
                    className="px-3.5 py-1.5 bg-white border border-[#EDD8E4] text-[#7A5C72] font-sans text-[10px] tracking-wider uppercase font-semibold rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#EDD8E4]">
              <a
                href="https://www.youtube.com/@bunmialabi7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center font-sans text-xs tracking-widest uppercase font-semibold text-[#C97A9E] border border-[#C97A9E] py-3 rounded-full hover:bg-[#C97A9E] hover:text-white transition-all"
              >
                Subscribe to Channel &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* More Sacred Conversations */}
        <div className="pt-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <Eyebrow>Continue Listening</Eyebrow>
              <h3 className="font-display text-3xl md:text-4xl text-[#1A1118] mt-1">
                More Episodes &amp; Conversations
              </h3>
            </div>
            <Link
              href="/just-a-chat"
              className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-[#C97A9E] hover:underline"
            >
              View All &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {related.map((ep: any, idx: number) => {
              const relThumb = getRelatedThumb(ep, idx);
              const isArch = idx % 2 === 0;

              return (
                <TiltCard key={ep.id} maxTilt={5}>
                  <Link
                    href={`/just-a-chat/${ep.slug}`}
                    className={`group block bg-white border border-[#EDD8E4] hover:border-[#C97A9E] transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden p-4 ${
                      isArch ? "rounded-t-[60px] rounded-b-[20px]" : "rounded-[32px_12px_32px_12px]"
                    }`}
                  >
                    <div
                      className={`relative aspect-[16/10] overflow-hidden bg-[#150D13] mb-4 ${
                        isArch ? "rounded-t-[48px] rounded-b-[16px]" : "rounded-[24px_8px_24px_8px]"
                      }`}
                    >
                      <Image
                        src={relThumb}
                        alt={ep.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized={relThumb.includes("ytimg.com") || relThumb.startsWith("/api/media/")}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>

                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#C97A9E] font-bold block mb-1">
                      Related Broadcast
                    </span>
                    <h4 className="font-display text-xl text-[#1A1118] group-hover:text-[#C97A9E] transition-colors line-clamp-2">
                      {ep.title}
                    </h4>
                  </Link>
                </TiltCard>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const episodes = await prisma.episode.findMany({ select: { slug: true } });
    if (episodes.length > 0) return episodes.map((ep: any) => ({ slug: ep.slug }));
  } catch {}
  const { EPISODES } = await import("@/data/episodes");
  return EPISODES.map((ep: any) => ({ slug: ep.slug }));
}
