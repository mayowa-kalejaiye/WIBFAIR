import { prisma } from "@/lib/db";
import { STORIES as FALLBACK } from "@/data/stories";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function StoriesPage() {
  let stories: any[] = [];
  try {
    stories = await prisma.story.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
    });
  } catch {}
  if (stories.length === 0) {
    stories = FALLBACK as any;
  }
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
      <div className="min-h-screen pt-32 pb-24 bg-cream">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <h1 className="font-display text-7xl">Stories</h1>
          <p className="font-sans text-olive mt-4">No stories published yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 md:pt-48 md:pb-32 bg-cream">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-24">
          <h1 className="font-display text-7xl md:text-[130px] leading-[0.85] tracking-tight mb-8">Stories</h1>
          <p className="font-sans text-xl md:text-2xl text-olive max-w-xl">Reflections, interviews, and journal entries. The longer thoughts that don&apos;t fit in a caption.</p>
        </div>

        <div className="mb-32">
          <Link href={`/stories/${featuredStory.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center border-t border-ink/10 pt-16">
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] md:aspect-[16/10] bg-paper rounded-[2px] overflow-hidden">
                  <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={storyCover(featuredStory)} alt={featuredStory.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="flex gap-4 items-baseline mb-6">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-clay font-semibold">{featuredStory.category}</span>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-olive">{featuredStory.publishedAt ? new Date(featuredStory.publishedAt).toLocaleDateString() : ""}</span>
                </div>
                <h2 className="font-display text-5xl md:text-7xl leading-tight mb-8 group-hover:text-clay transition-colors duration-300">{featuredStory.title}</h2>
                <p className="font-sans text-olive text-lg leading-relaxed mb-8">{featuredStory.excerpt}</p>
                <span className="font-sans text-xs font-semibold tracking-widest uppercase border-b border-ink pb-1 group-hover:text-clay group-hover:border-clay transition-colors">Read Story &rarr;</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-16 lg:gap-y-24">
          {gridStories.map((story: any, i: number) => (
            <Link key={story.id} href={`/stories/${story.slug}`} className="group block">
              <div className={`relative bg-paper rounded-[2px] overflow-hidden mb-6 ${i % 2 === 0 ? "aspect-[4/5]" : "aspect-square"}`}>
                <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src={storyCover(story)} alt={story.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-4 items-baseline mb-4">
                <span className="font-sans text-[10px] tracking-widest uppercase text-olive font-semibold">{story.category}</span>
                <span className="font-sans text-[10px] tracking-widest uppercase text-olive">{story.publishedAt ? new Date(story.publishedAt).toLocaleDateString() : ""}</span>
              </div>
              <h3 className="font-display text-4xl mb-4 group-hover:text-clay transition-colors duration-300">{story.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
