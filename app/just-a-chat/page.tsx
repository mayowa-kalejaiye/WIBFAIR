import { prisma } from "@/lib/db";
import { EPISODES as FALLBACK } from "@/data/episodes";
import { youtubeThumbnail } from "@/lib/youtube";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function JustAChatPage() {
  let episodes: any[] = [];
  try {
    episodes = await prisma.episode.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
    });
  } catch {
    episodes = [];
  }
  if (episodes.length === 0) {
    // fallback to mock data in dev if DB empty
    episodes = FALLBACK.map((e) => ({
      ...e,
      youtubeUrl: `https://www.youtube.com/watch?v=${e.youtubeId}`,
      thumbnailId: null,
    })) as any;
  }
  const latestEpisode = episodes[0];
  const otherEpisodes = episodes.slice(1);

  function truncateDesc(text: string, max = 160) {
    if (!text) return "";
    let s = text.split("⏱️")[0].split("Timestamps")[0].split("00:00")[0];
    s = s.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    s = s.replace(/^Just a Chat with Bunni Alabi:\s*📌?\s*/i, "");
    if (s.length > max) return s.slice(0, max).trim() + "…";
    return s;
  }

  return (
    <div className="min-h-screen">
      {/* Dark Hero Section */}
      <section className="bg-ink text-cream pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto text-center md:text-left">
          <h1 className="font-display text-7xl md:text-[130px] leading-[0.85] tracking-tight mb-8">
            JUST<br />A CHAT
          </h1>
          <p className="font-sans text-xl md:text-2xl text-paper/70 max-w-xl">
            Conversations about love, family, faith, life and the things we usually leave unsaid.
          </p>
        </div>
      </section>

      {/* Latest Episode (Dark to Cream transition) */}
      <section className="bg-cream pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold block mb-8">
            Latest Episode
          </span>
          
          <Link href={`/just-a-chat/${latestEpisode.slug}`} className="group block">
            <div className="relative aspect-video w-full bg-paper rounded-[2px] overflow-hidden mb-8">
              <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              {latestEpisode.thumbnailId ? (
                <img src={`/api/media/${latestEpisode.thumbnailId}`} alt={latestEpisode.title} className="w-full h-full object-cover" />
              ) : youtubeThumbnail(latestEpisode.youtubeUrl || latestEpisode.youtubeId || "") ? (
                <img src={youtubeThumbnail(latestEpisode.youtubeUrl || latestEpisode.youtubeId || "")!} alt={latestEpisode.title} className="w-full h-full object-cover" />
              ) : (
                <img src="/assets/african_women_entrepreneurs.jpg" alt={latestEpisode.title} className="w-full h-full object-cover" />
              )}
              
              <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <span className="font-sans text-sm tracking-widest uppercase text-cream border border-cream/50 px-8 py-4 rounded-full backdrop-blur-sm">
                  Watch on YouTube &rarr;
                </span>
              </div>
            </div>

            <div className="flex gap-4 items-baseline mb-4">
              <span className="font-sans text-[10px] tracking-widest uppercase text-olive font-semibold">
                EP {latestEpisode.id?.includes("-") ? latestEpisode.id.split("-")[1] : String(episodes.length).padStart(2, "0")}
              </span>
              <span className="font-sans text-[10px] tracking-widest uppercase text-olive">
                {latestEpisode.publishedAt ? new Date(latestEpisode.publishedAt).toLocaleDateString() : ""}
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-6xl mb-6 group-hover:text-clay transition-colors duration-300 line-clamp-2">
              {latestEpisode.title}
            </h2>
            <p className="font-sans text-olive text-lg max-w-2xl leading-relaxed line-clamp-3 overflow-hidden">
              {truncateDesc(latestEpisode.description)}
            </p>
          </Link>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="bg-cream pb-32 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto border-t border-ink/10 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <h3 className="font-display text-4xl">All Episodes</h3>
            
            {/* Simple filters for now */}
            <div className="flex gap-6 mt-6 md:mt-0 overflow-x-auto no-scrollbar pb-2 w-full md:w-auto">
              {["All", "Marriage", "Family", "Faith", "Life"].map(filter => (
                <button key={filter} className="font-sans text-xs tracking-widest uppercase text-olive hover:text-ink whitespace-nowrap">
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {otherEpisodes.map((episode, idx) => (
              <Link key={episode.id} href={`/just-a-chat/${episode.slug}`} className="group block">
                <div className="relative aspect-[16/10] bg-paper rounded-[2px] overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  {episode.thumbnailId ? (
                    <img src={`/api/media/${episode.thumbnailId}`} alt={episode.title} className="w-full h-full object-cover" />
                  ) : youtubeThumbnail(episode.youtubeUrl || episode.youtubeId || "") ? (
                    <img src={youtubeThumbnail(episode.youtubeUrl || episode.youtubeId || "")!} alt={episode.title} className="w-full h-full object-cover" />
                  ) : (
                    <img src={["/assets/business_meetings.jpg","/assets/cultural_festivals.jpg","/assets/Nigerian_fashion_displays.jpg"][idx % 3]} alt={episode.title} className="w-full h-full object-cover" />
                  )}
                </div>
                
                <div className="flex gap-4 items-baseline mb-3">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-clay font-semibold">
                    EP {episode.id?.includes("-") ? episode.id.split("-")[1] : String(otherEpisodes.length - idx).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-olive">
                    {episode.publishedAt ? new Date(episode.publishedAt).toLocaleDateString() : ""}
                  </span>
                </div>
                
                <h4 className="font-display text-3xl group-hover:text-clay transition-colors duration-300 line-clamp-2">
                  {episode.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
