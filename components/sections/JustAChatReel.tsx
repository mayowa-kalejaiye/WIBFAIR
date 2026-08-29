"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { EPISODES as FALLBACK } from "@/data/episodes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function JustAChatReel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [episodes, setEpisodes] = useState<any[]>(FALLBACK);

  useEffect(() => {
    fetch("/api/youtube")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.videos?.length) {
          const vids = data.videos.map((v: any) => ({
            id: v.id,
            slug: v.id, // use YouTube ID as slug for real data
            title: v.snippet.title,
            publishedAt: v.snippet.publishedAt,
            // YouTube provides maxres/hq thumbnails — real, high-res images (no 90s blur)
            _thumb: v.snippet.thumbnails?.maxres?.url || v.snippet.thumbnails?.high?.url || `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
            youtubeUrl: `https://www.youtube.com/watch?v=${v.id}`,
          }));
          setEpisodes(vids);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    // Only run on desktop where horizontal scrolling makes sense
    if (typeof window !== "undefined" && window.innerWidth >= 768 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const container = containerRef.current;
      const scrollWrapper = scrollWrapperRef.current;

      if (!container || !scrollWrapper) return;

      const scrollWidth = scrollWrapper.scrollWidth - window.innerWidth;

      const ctx = gsap.context(() => {
        gsap.to(scrollWrapper, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            end: () => `+=${scrollWidth}`,
          },
        });
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={containerRef} className="bg-ink text-cream overflow-hidden">
      {/* Intro section that stays pinned or scrolls normally on mobile */}
      <div className="px-6 md:px-12 py-24 md:py-32 max-w-[1600px] mx-auto">
        <span className="font-sans text-xs tracking-[0.2em] uppercase text-clay block mb-8">01 &mdash; Just A Chat</span>
        <h2 className="font-display text-5xl md:text-8xl lg:text-[120px] leading-[0.85] tracking-tight mb-8">
          No scripts.<br />
          No perfect answers.
        </h2>
        <p className="font-sans text-lg md:text-xl text-paper/80 max-w-xl">
          Just conversations about the things that matter—faith, family, relationships, and the things we usually leave unsaid.
        </p>
      </div>

      {/* The Horizontal Reel */}
      <div className="w-full overflow-x-auto md:overflow-visible no-scrollbar pb-24 md:pb-48">
        <div 
          ref={scrollWrapperRef} 
          className="flex gap-8 px-6 md:px-12 w-fit md:w-max min-w-full"
        >
          {episodes.map((episode: any, i: number) => (
            <Link 
              href={`/just-a-chat/${episode.slug}`} 
              key={episode.id}
              className="group block w-[300px] md:w-[450px] lg:w-[600px] shrink-0"
            >
              <div className="relative aspect-[16/10] bg-[#221f1b] overflow-hidden rounded-[2px] mb-6">
                <Image
                  src={episode._thumb || `https://i.ytimg.com/vi/${episode.youtubeId || episode.id}/hqdefault.jpg`}
                  alt={episode.title}
                  fill
                  quality={90}
                  sizes="600px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  unoptimized={!!episode._thumb?.includes("ytimg.com")}
                />
                
                {/* Hover Play Button */}
                <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-sans text-xs tracking-widest uppercase text-cream border border-cream/50 px-6 py-3 rounded-full backdrop-blur-sm">
                    Play Episode
                  </span>
                </div>
              </div>
              
              <div className="flex gap-4 items-baseline mb-3">
                <span className="font-sans text-[10px] tracking-widest uppercase text-clay font-semibold">
                  EP {episode.id?.includes("-") ? episode.id.split("-")[1] : String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-[10px] tracking-widest uppercase text-paper/60">
                  {episode.publishedAt ? new Date(episode.publishedAt).toLocaleDateString() : ""}
                </span>
              </div>
              
              <h3 className="font-display text-2xl md:text-4xl text-cream group-hover:text-clay transition-colors duration-300">
                {episode.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
