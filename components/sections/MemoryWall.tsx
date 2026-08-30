"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ARCHIVE_PHOTOS = [
  { year: "1998", caption: "The beginning", src: "/new-assets/WhatsApp Image 2025-10-06 at 11.31.03_8ec76c87.jpg" },
  { year: "2008", caption: "Wedding day", src: "/lolo1.jpg" },
  { year: "2012", caption: "T.I.V Era", src: "/thumb6.jpg" },
  { year: "2020", caption: "Vintage Africana", src: "/assets/african_women_entrepreneurs.jpg" },
  { year: "2026", caption: "Present day", src: "/convener.jpg" },
];

export default function MemoryWall() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const container = containerRef.current;
      
      const ctx = gsap.context(() => {
        // Parallax effect on the images as you scroll down
        imagesRef.current.forEach((img, i) => {
          if (!img) return;
          
          const speed = 1 + (i % 3) * 0.2; // slight variation in speed
          const yOffset = i % 2 === 0 ? 50 : -50;
          
          gsap.fromTo(img, 
            { y: yOffset },
            {
              y: -yOffset,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: speed,
              }
            }
          );
        });
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-ink text-cream relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-24 md:mb-32 text-center md:text-left">
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none">
          Life with Akin.
        </h2>
        <p className="font-sans mt-8 text-xl text-paper/70 max-w-md mx-auto md:mx-0">
          Two people. Almost three decades of knowing each other. A marriage, a family, and plenty of stories.
        </p>
      </div>

      <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center">
        {/* We will scatter the images asymmetrically across the container */}
        <div className="absolute w-full h-full flex flex-wrap md:flex-nowrap items-center justify-around gap-4 md:gap-0 px-4 md:px-12">
          
          {ARCHIVE_PHOTOS.map((photo: any, i: number) => (
            <div 
              key={photo.year}
              ref={el => { imagesRef.current[i] = el; }}
              className={`group relative flex-shrink-0 w-[45%] md:w-[250px] lg:w-[300px] aspect-[3/4] bg-[#221f1b] rounded-[2px] overflow-hidden 
                ${i % 2 === 0 ? 'mt-0 md:mt-24' : 'mt-12 md:-mt-24'} 
                ${i > 1 && 'hidden md:block'} 
                ${i > 2 && 'lg:block'}
              `}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                src={photo.src}
                alt={`${photo.caption} — ${photo.year}`}
                fill
                sizes="300px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Caption Reveal */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 bg-gradient-to-t from-ink/80 to-transparent">
                <span className="block font-sans text-xs tracking-widest uppercase text-clay font-semibold mb-1">
                  {photo.year}
                </span>
                <span className="block font-display text-2xl text-cream">
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
