import { prisma } from "@/lib/db";
import { STORIES as FALLBACK } from "@/data/stories";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import FlowerMotif from "@/components/motif/FlowerMotif";

export const dynamic = "force-dynamic";

export default async function StoriesPage() {
  let stories: any[] = [];
  try {
    stories = await prisma.story.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
    });
  } catch {}
  if (stories.length === 0) stories = FALLBACK as any;
  const featuredStory = stories[0];
  const gridStories = stories.slice(1);

  const coverMap: Record<string, string> = {
    "couples-waiting-room-hope-in-the-waiting-season": "/assets/Nigerian_fashion_displays.jpg",
    "music-memories-and-tiv": "/new-assets/whatsapp-2025-10-06-11-31-05_743fdd0e.jpg",
    "why-we-started-vintage-africana": "/assets/african_women_entrepreneurs.jpg",
    "unbroken-she-rose-she-rebuilt-she-reigns": "/assets/cultural_festivals.jpg",
  };
  function storyCover(story: any) {
    if (story.coverId) return `/api/media/${story.coverId}`;
    if (story.coverImage && !story.coverImage.includes("/images/stories/")) return story.coverImage;
    return coverMap[story.slug] || "/assets/grid.jpg";
  }

  if (!featuredStory) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <h1 className="font-display text-7xl">Stories</h1>
          <p className="font-sans text-olive mt-4">No stories published yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-28 md:pt-36">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="relative mb-16 md:mb-24">
          <Eyebrow>Journal</Eyebrow>
          <h1 className="font-display text-6xl md:text-7xl lg:text-[88px] leading-[0.9] tracking-tight mt-4">Stories</h1>
          <p className="font-sans text-lg text-olive max-w-xl mt-6">Reflections, interviews, and journal entries — the longer thoughts that don’t fit in a caption.</p>
          <div className="absolute -top-4 right-0 hidden md:block">
            <FlowerMotif size={36} />
          </div>
        </div>

        <Link href={`/stories/${featuredStory.slug}`} className="group block border-y border-border py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative aspect-[4/3] bg-blush border border-border overflow-hidden">
              <img src={storyCover(featuredStory)} alt={featuredStory.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
            </div>
            <div className="lg:col-span-5">
              <div className="flex gap-3 items-baseline mb-4">
                <span className="font-sans text-xs tracking-widest uppercase text-pink-deep font-semibold">{featuredStory.category}</span>
                <span className="font-sans text-xs text-olive">{featuredStory.publishedAt ? new Date(featuredStory.publishedAt).toLocaleDateString() : ""}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight group-hover:text-pink-deep">{featuredStory.title}</h2>
              <p className="font-sans text-olive mt-4 line-clamp-3">{featuredStory.excerpt}</p>
              <span className="inline-block mt-6 font-sans text-xs tracking-widest uppercase border-b border-ink pb-1">Read Story →</span>
            </div>
          </div>
        </Link>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {gridStories.map((story: any, i: number) => (
            <Link key={story.id} href={`/stories/${story.slug}`} className="group block">
              <div className={`relative bg-blush border border-border overflow-hidden ${i % 2 === 0 ? "aspect-[4/5]" : "aspect-square"}`}>
                <img src={storyCover(story)} alt={story.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
              <div className="flex gap-3 items-baseline mt-4">
                <span className="font-sans text-xs tracking-widest uppercase text-pink-deep font-semibold">{story.category}</span>
                <span className="font-sans text-xs text-olive">{story.publishedAt ? new Date(story.publishedAt).toLocaleDateString() : ""}</span>
              </div>
              <h3 className="font-display text-2xl mt-2 line-clamp-2 group-hover:text-pink-deep">{story.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
