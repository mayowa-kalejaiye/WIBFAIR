import Image from "next/image";
import { EPISODES as FALLBACK_EPISODES } from "@/data/episodes";
import { STORIES as FALLBACK_STORIES } from "@/data/stories";
import { prisma } from "@/lib/db";
import { youtubeThumbnail, getYouTubeVideos } from "@/lib/youtube";
import Link from "next/link";

export default async function LatestContent() {
  // Try DB first, then YouTube API for real data, then fallback mock
  let latestEpisode: any = null;
  let latestStory: any = null;
  try {
    const [dbEp, dbStory] = await Promise.all([
      prisma.episode.findFirst({ where: { status: "published" }, orderBy: { publishedAt: "desc" } }),
      prisma.story.findFirst({ where: { status: "published" }, orderBy: { publishedAt: "desc" } }),
    ]);
    latestEpisode = dbEp;
    latestStory = dbStory;
  } catch {}
  // If DB empty, try YouTube for episode
  if (!latestEpisode) {
    const yt = await getYouTubeVideos(1);
    if (yt.length) {
      latestEpisode = {
        slug: yt[0].id,
        title: yt[0].title,
        description: yt[0].description.slice(0, 180) + "...",
        publishedAt: yt[0].publishedAt,
        youtubeUrl: `https://www.youtube.com/watch?v=${yt[0].id}`,
        _ytThumb: yt[0].thumbnailMax,
      };
    } else {
      latestEpisode = FALLBACK_EPISODES[0];
    }
  }
  if (!latestStory) latestStory = FALLBACK_STORIES[0];

  const epThumb = latestEpisode?.thumbnailId
    ? `/api/media/${latestEpisode.thumbnailId}`
    : latestEpisode?._ytThumb || youtubeThumbnail(latestEpisode.youtubeUrl || latestEpisode.youtubeId || "") || "/assets/african_women_entrepreneurs.jpg";
  const coverMap: Record<string, string> = {
    "couples-waiting-room-hope-in-the-waiting-season": "/assets/Nigerian_fashion_displays.jpg",
    "music-memories-and-tiv": "/new-assets/whatsapp-2025-10-06-11-31-05_743fdd0e.jpg",
    "why-we-started-vintage-africana": "/assets/african_women_entrepreneurs.jpg",
    "unbroken-she-rose-she-rebuilt-she-reigns": "/assets/cultural_festivals.jpg",
  };
  const storyThumb = latestStory?.coverId
    ? `/api/media/${latestStory.coverId}`
    : (latestStory?.coverImage && !latestStory.coverImage.includes("/images/stories/") ? latestStory.coverImage : coverMap[latestStory.slug] || "/assets/Nigerian_fashion_displays.jpg");

  // — Truncate noisy YouTube descriptions (timestamps, bullets) for homepage card —
  function truncateDesc(text: string, max = 160) {
    if (!text) return "";
    // cut off timestamps block and bullet timestamps
    let s = text.split("⏱️")[0].split("Timestamps")[0].split("00:00")[0];
    s = s.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    // remove the leading "Just a Chat with Bunni Alabi: 📌 Welcome back..." prefix noise if present
    s = s.replace(/^Just a Chat with Bunni Alabi:\s*📌?\s*/i, "");
    if (s.length > max) return s.slice(0, max).trim() + "…";
    return s;
  }
  const epDesc = truncateDesc(latestEpisode.description || "", 160);

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-16 border-b border-ink/10 pb-6">
          <h2 className="font-display text-4xl md:text-5xl">Lately...</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Latest Episode Card */}
          <article className="group cursor-pointer">
            <Link href={`/just-a-chat/${latestEpisode.slug}`}>
              <div className="relative aspect-[16/10] bg-paper overflow-hidden mb-6 rounded-[2px]">
                <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={epThumb}
                  alt={latestEpisode.title}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  unoptimized={epThumb.includes("ytimg.com")}
                />
              </div>
              <div className="flex gap-4 items-baseline mb-3">
                <span className="font-sans text-[10px] tracking-widest uppercase text-clay font-semibold">
                  Just A Chat
                </span>
                <span className="font-sans text-[10px] tracking-widest uppercase text-olive">
                  {latestEpisode.publishedAt ? new Date(latestEpisode.publishedAt).toLocaleDateString() : ""}
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-clay transition-colors duration-300 line-clamp-2">
                {latestEpisode.title}
              </h3>
              <p className="font-sans text-olive text-sm md:text-base max-w-md leading-relaxed line-clamp-3 overflow-hidden">
                {epDesc}
              </p>
            </Link>
          </article>

          {/* Latest Story Card */}
          <article className="group cursor-pointer md:mt-24">
            <Link href={`/stories/${latestStory.slug}`}>
              <div className="relative aspect-[4/3] bg-paper overflow-hidden mb-6 rounded-[2px]">
                <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={storyThumb}
                  alt={latestStory.title}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex gap-4 items-baseline mb-3">
                <span className="font-sans text-[10px] tracking-widest uppercase text-olive font-semibold">
                  Story
                </span>
                <span className="font-sans text-[10px] tracking-widest uppercase text-olive">
                  {latestStory.publishedAt ? new Date(latestStory.publishedAt).toLocaleDateString() : ""}
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-clay transition-colors duration-300 line-clamp-2">
                {latestStory.title}
              </h3>
              <p className="font-sans text-olive text-sm md:text-base max-w-md leading-relaxed line-clamp-3 overflow-hidden">
                {latestStory.excerpt}
              </p>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
