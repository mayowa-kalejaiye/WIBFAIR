import { prisma } from "@/lib/db";
import { EPISODES as FALLBACK } from "@/data/episodes";
import { getYouTubeVideos } from "@/lib/youtube";
import Link from "next/link";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import FlowerMotif from "@/components/motif/FlowerMotif";
import Reveal from "@/components/motion/Reveal";
import SpinningSeal from "@/components/motion/SpinningSeal";
import TiltCard from "@/components/motion/TiltCard";
import JustAChatArchive from "@/components/sections/JustAChatArchive";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Just A Chat Podcast — Bunmi Alabi",
  description:
    "Bi-weekly conversations on YouTube — faith, marriage, family, relationships and the things we usually leave unsaid.",
};

export default async function JustAChatPage() {
  // 1. Fetch published episodes from DB
  let episodes: any[] = [];
  try {
    episodes = await prisma.episode.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
    });
  } catch {
    episodes = [];
  }

  // 2. Fetch live YouTube videos if available
  let ytVideos: any[] = [];
  try {
    ytVideos = await getYouTubeVideos(12);
  } catch {
    ytVideos = [];
  }

  // 3. Merge or fallback gracefully
  if (episodes.length === 0) {
    if (ytVideos.length > 0) {
      episodes = ytVideos.map((v) => ({
        id: v.id,
        slug: v.id,
        title: v.title,
        description: v.description,
        youtubeId: v.id,
        youtubeUrl: `https://www.youtube.com/watch?v=${v.id}`,
        guest: null,
        topics: ["Broadcast", "Faith & Family"],
        publishedAt: v.publishedAt,
        durationMinutes: 50,
        thumbnailId: null,
        _thumb: v.thumbnailMax || v.thumbnail,
      }));
    } else {
      episodes = FALLBACK.map((e: any) => ({
        ...e,
        youtubeUrl: `https://www.youtube.com/watch?v=${e.youtubeId}`,
        thumbnailId: null,
        _thumb: `https://i.ytimg.com/vi/${e.youtubeId}/hqdefault.jpg`,
      })) as any;
    }
  } else {
    // augment DB episodes with fallback thumbnail URLs
    episodes = episodes.map((e) => {
      const ytId = e.youtubeId || (e.youtubeUrl ? e.youtubeUrl.split("v=")[1]?.split("&")[0] : null);
      return {
        ...e,
        _thumb: ytId ? `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg` : null,
      };
    });
  }

  const latestEpisode = episodes[0];
  const latestYtId =
    latestEpisode.youtubeId ||
    (latestEpisode.youtubeUrl ? latestEpisode.youtubeUrl.split("v=")[1]?.split("&")[0] : latestEpisode.id);
  const latestThumb =
    latestEpisode.thumbnailId
      ? `/api/media/${latestEpisode.thumbnailId}`
      : latestEpisode._thumb ||
        (latestYtId ? `https://i.ytimg.com/vi/${latestYtId}/hqdefault.jpg` : "/thumb.jpg");

  function cleanDesc(text: string, max = 220) {
    if (!text) return "";
    let s = text.split("⏱️")[0].split("Timestamps")[0].split("00:00")[0];
    s = s.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    s = s.replace(/^Just a Chat with Bunni Alabi:\s*📌?\s*/i, "");
    if (s.length > max) return s.slice(0, max).trim() + "…";
    return s;
  }

  return (
    <div className="bg-white min-h-screen text-[#1A1118]">
      
      {/* ── HERO: THE BROADCAST ATELIER (MIDNIGHT VELVET & ROSE) ──────────── */}
      <section className="relative bg-[#150D13] text-white pt-36 md:pt-44 pb-24 md:pb-36 px-6 md:px-12 overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C97A9E]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#E8A0BF]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto relative z-10">
          
          {/* Top Status Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <FlowerMotif size={52} ambient={true} />
              <span className="w-8 h-px bg-[#E8A0BF]/40" />
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C97A9E] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E8A0BF]" />
                </span>
                <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#E8A0BF] font-semibold">
                  Studio On Air &bull; Bi-Weekly YouTube Broadcast
                </span>
              </div>
            </div>

            {/* Soundwave Visualizer Bars */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-end gap-1 h-4">
                <span className="w-1 h-2.5 bg-[#E8A0BF] rounded-full animate-pulse" />
                <span className="w-1 h-4 bg-[#C97A9E] rounded-full animate-[pulse_1s_ease-in-out_infinite_150ms]" />
                <span className="w-1 h-1.5 bg-white rounded-full animate-[pulse_1.2s_ease-in-out_infinite_300ms]" />
                <span className="w-1 h-3.5 bg-[#E8A0BF] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_450ms]" />
                <span className="w-1 h-2 bg-white/70 rounded-full animate-[pulse_1.1s_ease-in-out_infinite_600ms]" />
              </div>
              <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-white/80 ml-1">
                Lagos Studio
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Headline & Action Column */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#E8A0BF] font-sans text-xs tracking-[0.2em] uppercase font-semibold mb-6">
                  Unscripted &bull; Authentic &bull; Real
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="font-display text-6xl md:text-8xl lg:text-[112px] leading-[0.85] tracking-tight text-white">
                  JUST <br />
                  <span className="text-[#E8A0BF] italic font-normal">A CHAT</span>
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="font-sans text-lg md:text-xl text-white/75 mt-8 max-w-xl leading-relaxed">
                  Honest, unscripted conversations on marriage, reproductive grief, family patterns, and the real-life truths we too often carry in silence. Hosted by Bunmi Alabi.
                </p>
              </Reveal>

              <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="https://www.youtube.com/@bunmialabi7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs tracking-[0.22em] uppercase bg-[#C97A9E] text-white px-8 py-4 hover:bg-[#9B4D77] transition-all font-semibold rounded-full shadow-lg shadow-[#C97A9E]/30 inline-flex items-center gap-2 group"
                >
                  <span>Subscribe on YouTube</span>
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">&nearr;</span>
                </a>

                <a
                  href="#vault"
                  className="font-sans text-xs tracking-[0.22em] uppercase text-white/90 border border-white/25 px-8 py-4 hover:border-[#E8A0BF] hover:text-[#E8A0BF] transition-all rounded-full bg-white/5 backdrop-blur-md"
                >
                  Browse Broadcast Vault &darr;
                </a>
              </Reveal>

              {/* Broadcast Specs Highlights */}
              <Reveal delay={0.3} className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
                <div>
                  <p className="font-display text-2xl md:text-3xl text-white">0%</p>
                  <p className="font-sans text-[11px] tracking-wider uppercase text-[#E8A0BF] font-semibold mt-1">
                    Sanitized Scripts
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl md:text-3xl text-white">Bi-Weekly</p>
                  <p className="font-sans text-[11px] tracking-wider uppercase text-[#E8A0BF] font-semibold mt-1">
                    YouTube Stream
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl md:text-3xl text-white">100%</p>
                  <p className="font-sans text-[11px] tracking-wider uppercase text-[#E8A0BF] font-semibold mt-1">
                    Raw Vulnerability
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Architectural Studio Cathedral Portal */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[440px]">
                
                {/* Cathedral Arch Portal */}
                <div className="relative aspect-[4/5] rounded-t-[220px] rounded-b-[40px] overflow-hidden border-2 border-white/20 shadow-2xl shadow-black/80 group">
                  <Image
                    src="/IMG_9474.JPG.jpeg"
                    alt="Bunmi Alabi — Host of Just A Chat"
                    fill
                    sizes="(max-width: 768px) 100vw, 440px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150D13] via-transparent to-transparent opacity-60" />
                  
                  {/* Bottom Host Name Pill */}
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-bold text-[#E8A0BF] block mb-1">
                      Broadcaster & Convener
                    </span>
                    <p className="font-display text-2xl text-white">Bunmi Alabi</p>
                  </div>
                </div>

                {/* Floating Spinning Botanical Seal */}
                <div className="absolute -top-8 -right-6 md:-right-10 z-20">
                  <SpinningSeal
                    text="JUST A CHAT • UNFILTERED TRUTH • BUNMI ALABI • "
                    size={144}
                    flowerSize={50}
                  />
                </div>

                {/* Floating Studio Capsule */}
                <div className="absolute -bottom-6 -left-4 md:-left-8 bg-[#1E131B]/95 backdrop-blur-md border border-white/15 p-5 rounded-[28px_10px_28px_10px] shadow-2xl max-w-[240px] z-20">
                  <p className="font-sans text-[10px] tracking-widest uppercase font-bold text-[#E8A0BF] mb-1">
                    Streaming Channel
                  </p>
                  <p className="font-display text-lg text-white">@bunmialabi7</p>
                  <p className="font-sans text-xs text-white/65 mt-1 leading-snug">
                    New episodes air alternate Sundays on YouTube.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PREMIERE SPOTLIGHT (LATEST EPISODE) ───────────────────────────── */}
      {latestEpisode && (
        <section className="py-20 md:py-28 bg-[#FDF6F8] border-b border-[#EDD8E4] px-6 md:px-12 relative overflow-hidden">
          {/* Subtle floral watermark */}
          <div className="absolute -bottom-20 right-0 opacity-15 pointer-events-none">
            <FlowerMotif size={360} ambient={true} />
          </div>

          <div className="max-w-[1600px] mx-auto relative z-10">
            
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#EDD8E4]">
              <div>
                <Eyebrow>The Premiere Spotlight</Eyebrow>
                <h2 className="font-display text-4xl md:text-5xl text-[#1A1118] mt-2">
                  Featured Conversation
                </h2>
              </div>
              <span className="hidden sm:inline-block font-sans text-xs tracking-[0.2em] uppercase text-[#C97A9E] font-bold">
                Latest Broadcast
              </span>
            </div>

            <Link href={`/just-a-chat/${latestEpisode.slug}`} className="group block">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left: Sculpted Cinema Arch Screen with 3D Tilt */}
                <div className="lg:col-span-7">
                  <TiltCard maxTilt={5}>
                    <div className="relative aspect-video w-full rounded-[44px_16px_44px_16px] overflow-hidden bg-[#150D13] border-2 border-[#C97A9E]/30 shadow-2xl shadow-[#C97A9E]/15 group-hover:border-[#C97A9E] transition-all duration-500">
                      <Image
                        src={latestThumb}
                        alt={latestEpisode.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        unoptimized={latestThumb.includes("ytimg.com") || latestThumb.startsWith("/api/media/")}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#150D13]/85 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Top HUD: Episode & On-Demand badges */}
                      <div className="absolute top-5 left-6 right-6 flex items-center justify-between">
                        <span className="font-sans text-xs tracking-[0.2em] uppercase font-bold px-4 py-2 rounded-full bg-[#150D13]/90 text-[#E8A0BF] backdrop-blur-md border border-white/20 shadow-lg">
                          EP {String(episodes.length).padStart(2, "0")} &bull; LATEST BROADCAST
                        </span>
                        <span className="font-sans text-[11px] tracking-wider uppercase font-semibold px-3 py-1.5 rounded-full bg-[#C97A9E] text-white shadow">
                          Watch Premiere
                        </span>
                      </div>

                      {/* Center Glowing Magnetic Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/95 text-[#C97A9E] flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-[#C97A9E] group-hover:text-white transition-all duration-400">
                          <svg className="w-8 h-8 ml-1.5 fill-current" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Bottom Soundwave Equalizer HUD */}
                      <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-white/90">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15">
                          <span className="w-1.5 h-3 bg-[#E8A0BF] rounded-full animate-pulse" />
                          <span className="w-1.5 h-5 bg-[#C97A9E] rounded-full animate-[pulse_1s_ease-in-out_infinite_200ms]" />
                          <span className="w-1.5 h-2.5 bg-white rounded-full animate-[pulse_1.2s_ease-in-out_infinite_400ms]" />
                          <span className="font-sans text-[10px] tracking-widest uppercase font-semibold ml-1">
                            YouTube Master Recording
                          </span>
                        </div>

                        {latestEpisode.publishedAt && (
                          <span className="font-sans text-xs text-white/80 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                            {new Date(latestEpisode.publishedAt).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </div>

                {/* Right: Editorial Narrative Column */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C97A9E] font-bold bg-white px-3 py-1 rounded-full border border-[#EDD8E4]">
                      Episode {String(episodes.length).padStart(2, "0")}
                    </span>
                    {latestEpisode.guest && (
                      <span className="font-sans text-xs tracking-wider uppercase text-[#7A5C72] font-semibold">
                        with {latestEpisode.guest}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-3xl md:text-5xl text-[#1A1118] group-hover:text-[#C97A9E] transition-colors leading-[1.1]">
                    {latestEpisode.title}
                  </h3>

                  <p className="font-sans text-base md:text-lg text-[#7A5C72] leading-relaxed">
                    {cleanDesc(latestEpisode.description, 240)}
                  </p>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <span className="font-sans text-xs tracking-[0.22em] uppercase font-bold bg-[#C97A9E] text-white px-7 py-3.5 rounded-full shadow-md group-hover:bg-[#9B4D77] transition-all inline-flex items-center gap-2">
                      Watch Premiere <span>&rarr;</span>
                    </span>
                    <span className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-[#7A5C72] group-hover:text-[#C97A9E] transition-colors">
                      Full Show Notes & Discussion &bull;
                    </span>
                  </div>
                </div>

              </div>
            </Link>

          </div>
        </section>
      )}

      {/* ── EDITORIAL SANCTUARY: THE STUDIO ETHOS ─────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="relative rounded-[56px] bg-[#FDF6F8] border border-[#EDD8E4] p-10 md:p-20 text-center shadow-lg overflow-hidden">
          
          <div className="flex justify-center mb-6">
            <FlowerMotif size={68} ambient={true} />
          </div>

          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C97A9E] font-bold block mb-4">
            The Studio Conviction
          </span>

          <blockquote className="font-display text-2xl md:text-4xl lg:text-[42px] leading-[1.25] text-[#1A1118] max-w-4xl mx-auto">
            &ldquo;Brokenness thrives when we pretend everything is fine. Just A Chat exists to pull off the mask, bring the grief into the light, and let God&rsquo;s restorative truth do what human perfection never could.&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="w-10 h-px bg-[#C97A9E]" />
            <p className="font-sans text-xs tracking-[0.25em] uppercase font-bold text-[#1A1118]">
              Bunmi Alabi &bull; Host &amp; Author of Couples&rsquo; Waiting Room
            </p>
            <span className="w-10 h-px bg-[#C97A9E]" />
          </div>

        </div>
      </section>

      {/* ── THE BROADCAST VAULT: ALL CONVERSATIONS ────────────────────────── */}
      <section id="vault" className="py-16 md:py-28 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#EDD8E4] gap-4">
          <div>
            <Eyebrow>The Broadcast Archive</Eyebrow>
            <h2 className="font-display text-4xl md:text-6xl text-[#1A1118] mt-2">
              All Conversations
            </h2>
          </div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#C97A9E] font-bold">
            {episodes.length} Complete Broadcasts Available
          </p>
        </div>

        {/* Interactive Archive Component with Category Filter & Architectural Cards */}
        <JustAChatArchive episodes={episodes} />
      </section>

      {/* ── GRAND YOUTUBE SANCTUARY BANNER ───────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="relative rounded-[56px_20px_56px_20px] bg-[#140C12] text-white p-12 md:p-24 overflow-hidden border border-white/10 shadow-2xl">
          
          {/* Ambient Glow & Botanical Watermark */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C97A9E]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 opacity-15 pointer-events-none">
            <FlowerMotif size={320} ambient={true} />
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <FlowerMotif size={64} ambient={true} className="mx-auto mb-6" />

            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#E8A0BF] font-bold mb-3">
              Join the Living Community
            </p>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
              Watch, Comment &amp; Heal in the Community
            </h2>

            <p className="font-sans text-base md:text-lg text-white/75 mt-6 leading-relaxed">
              Every broadcast is made richer by the hundreds of thoughtful viewers in the comment section. Share your story, reflect with Bunmi, and subscribe so you never miss a premiere.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <a
                href="https://www.youtube.com/@bunmialabi7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.22em] uppercase bg-[#C97A9E] text-white px-9 py-4 hover:bg-white hover:text-[#1A1118] transition-all font-semibold rounded-full shadow-lg shadow-[#C97A9E]/30 inline-flex items-center gap-2 group"
              >
                <span>Subscribe on YouTube Channel</span>
                <span className="group-hover:translate-x-1 transition-transform">&nearr;</span>
              </a>

              <Link
                href="/connect"
                className="font-sans text-xs tracking-[0.22em] uppercase text-white/90 border border-white/25 px-8 py-4 hover:border-[#E8A0BF] hover:text-[#E8A0BF] transition-all rounded-full bg-white/5 backdrop-blur-md"
              >
                Submit a Question for Bunmi &rarr;
              </Link>
            </div>

            <p className="font-sans text-[11px] tracking-wider uppercase text-white/50 mt-8">
              Confidential questions submitted via Connect may be featured anonymously on upcoming episodes.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
