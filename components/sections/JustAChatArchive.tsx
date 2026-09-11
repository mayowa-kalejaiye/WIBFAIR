"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import TiltCard from "@/components/motion/TiltCard";
import FlowerMotif from "@/components/motif/FlowerMotif";

export type EpisodeItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  youtubeId?: string;
  youtubeUrl?: string;
  guest?: string | null;
  topics?: string[];
  publishedAt?: string;
  durationMinutes?: number;
  thumbnailId?: string | null;
  _thumb?: string;
};

type Props = {
  episodes: EpisodeItem[];
};

const CATEGORIES = [
  { id: "all", label: "All Broadcasts" },
  { id: "marriage", label: "Marriage & Family" },
  { id: "faith", label: "Faith & Spiritual Truth" },
  { id: "healing", label: "Healing & Boundaries" },
];

export default function JustAChatArchive({ episodes }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEpisodes = episodes.filter((ep) => {
    if (activeCategory === "all") return true;
    const text = `${ep.title} ${ep.description} ${(ep.topics || []).join(" ")}`.toLowerCase();
    if (activeCategory === "marriage") {
      return text.includes("marriage") || text.includes("wedding") || text.includes("baby daddy") || text.includes("relationships");
    }
    if (activeCategory === "faith") {
      return text.includes("faith") || text.includes("church") || text.includes("prophet") || text.includes("pastor") || text.includes("christian");
    }
    if (activeCategory === "healing") {
      return text.includes("narcissism") || text.includes("heal") || text.includes("curses") || text.includes("modesty") || text.includes("mental health");
    }
    return true;
  });

  function getThumbnailUrl(ep: EpisodeItem, idx: number) {
    if (ep.thumbnailId) return `/api/media/${ep.thumbnailId}`;
    if (ep._thumb) return ep._thumb;
    const ytId = ep.youtubeId || (ep.youtubeUrl ? ep.youtubeUrl.split("v=")[1]?.split("&")[0] : null);
    if (ytId) return `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`;
    const fallbacks = ["/thumb.jpg", "/thumb2.jpg", "/thumb3.jpg", "/thumb4.jpg", "/thumb5.jpg"];
    return fallbacks[idx % fallbacks.length];
  }

  function cleanDesc(text: string, max = 130) {
    if (!text) return "";
    let s = text.split("⏱️")[0].split("Timestamps")[0].split("00:00")[0];
    s = s.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    s = s.replace(/^Just a Chat with Bunni Alabi:\s*📌?\s*/i, "");
    if (s.length > max) return s.slice(0, max).trim() + "…";
    return s;
  }

  return (
    <div className="w-full">
      {/* Category Filter Pills — Architectural Curves */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-sans text-xs tracking-[0.2em] uppercase px-6 py-3.5 rounded-full transition-all duration-300 relative select-none font-semibold ${
                isActive
                  ? "bg-[#C97A9E] text-white shadow-lg shadow-[#C97A9E]/25 scale-105"
                  : "bg-white text-[#7A5C72] border border-[#EDD8E4] hover:border-[#C97A9E] hover:text-[#C97A9E]"
              }`}
            >
              {cat.label}
              {isActive && (
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white ml-2 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* Episode Grid with Asymmetric Architectural Silhouettes */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {filteredEpisodes.map((ep, idx) => {
            const isArch = idx % 2 === 0;
            const thumbUrl = getThumbnailUrl(ep, idx);
            const epNum = String(episodes.length - idx).padStart(2, "0");

            return (
              <motion.div
                key={ep.id || ep.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <TiltCard maxTilt={6}>
                  <Link
                    href={`/just-a-chat/${ep.slug}`}
                    className={`group block bg-white border border-[#EDD8E4] hover:border-[#C97A9E] transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden p-5 flex flex-col justify-between h-full ${
                      isArch
                        ? "rounded-t-[84px] rounded-b-[28px]"
                        : "rounded-[44px_16px_44px_16px]"
                    }`}
                  >
                    <div>
                      {/* Thumbnail Container matching the card's architectural silhouette */}
                      <div
                        className={`relative aspect-[16/10] w-full overflow-hidden bg-[#150D13] mb-6 shadow-inner ${
                          isArch
                            ? "rounded-t-[68px] rounded-b-[20px]"
                            : "rounded-[36px_12px_36px_12px]"
                        }`}
                      >
                        <Image
                          src={thumbUrl}
                          alt={ep.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                          unoptimized={thumbUrl.includes("ytimg.com") || thumbUrl.startsWith("/api/media/")}
                        />

                        {/* Cinema Dark Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#150D13]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        {/* Top HUD: Episode badge & duration indicator */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                          <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 rounded-full bg-[#150D13]/85 text-[#E8A0BF] backdrop-blur-md border border-white/15 shadow">
                            EP {epNum}
                          </span>
                          {ep.durationMinutes ? (
                            <span className="font-sans text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full bg-black/60 text-white/90 backdrop-blur-md">
                              {ep.durationMinutes}m
                            </span>
                          ) : null}
                        </div>

                        {/* Center Magnetic Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-14 h-14 rounded-full bg-white/95 text-[#C97A9E] flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-[#C97A9E] group-hover:text-white transition-all duration-400">
                            <svg
                              className="w-5 h-5 ml-1 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>

                        {/* Bottom Soundwave Equalizer Pill */}
                        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-white/10">
                          <span className="w-1 h-2 bg-[#E8A0BF] rounded-full animate-pulse" />
                          <span className="w-1 h-3.5 bg-[#C97A9E] rounded-full animate-[pulse_1s_ease-in-out_infinite_200ms]" />
                          <span className="w-1 h-1.5 bg-white rounded-full animate-[pulse_1.2s_ease-in-out_infinite_400ms]" />
                          <span className="font-sans text-[9px] uppercase tracking-wider text-white/80 ml-1 font-semibold">
                            Full Length
                          </span>
                        </div>
                      </div>

                      {/* Meta Tags & Topics */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {ep.guest && (
                          <span className="font-sans text-[10px] tracking-widest uppercase font-bold text-[#C97A9E] bg-[#FDF6F8] px-2.5 py-1 rounded-full border border-[#EDD8E4]">
                            ft. {ep.guest}
                          </span>
                        )}
                        {ep.publishedAt && (
                          <span className="font-sans text-[11px] text-[#7A5C72]">
                            {new Date(ep.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        )}
                      </div>

                      {/* Episode Title */}
                      <h3 className="font-display text-2xl md:text-[26px] leading-[1.2] text-[#1A1118] group-hover:text-[#C97A9E] transition-colors line-clamp-2 mb-3">
                        {ep.title}
                      </h3>

                      {/* Description excerpt */}
                      <p className="font-sans text-sm text-[#7A5C72] leading-relaxed line-clamp-2">
                        {cleanDesc(ep.description, 130)}
                      </p>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-6 mt-6 border-t border-[#EDD8E4]/60 flex items-center justify-between">
                      <span className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-[#C97A9E] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                        Watch Episode 
                        <span className="text-sm font-bold">&rarr;</span>
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#EDD8E4] group-hover:bg-[#C97A9E] transition-colors" />
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {filteredEpisodes.length === 0 && (
        <div className="text-center py-20 bg-[#FDF6F8] rounded-[36px] border border-[#EDD8E4]">
          <FlowerMotif size={56} ambient={true} className="mx-auto mb-4" />
          <p className="font-display text-2xl text-[#1A1118]">No broadcasts match this topic.</p>
          <button
            onClick={() => setActiveCategory("all")}
            className="mt-4 font-sans text-xs tracking-widest uppercase text-[#C97A9E] font-semibold underline"
          >
            View All Broadcasts
          </button>
        </div>
      )}
    </div>
  );
}
