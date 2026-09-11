"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((i) => (i === null ? null : (i + 1) % items.length)), [items.length]);
  const prev = useCallback(() => setActive((i) => (i === null ? null : (i - 1 + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  // swipe for mobile
  let touchX = 0;
  const onTouchStart = (e: React.TouchEvent) => (touchX = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (dx < -40) next();
    if (dx > 40) prev();
  };

  return (
    <>
      <div className="columns-1 md:columns-3 gap-4 space-y-4">
        {items.map((item, i) => (
          <button
            key={item.src + i}
            onClick={() => setActive(i)}
            className="group relative block w-full overflow-hidden bg-paper border border-border break-inside-avoid"
            aria-label={`Open ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={800}
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {item.caption && (
              <span className="absolute bottom-0 left-0 bg-white/90 px-2 py-1 font-sans text-xs text-ink opacity-0 group-hover:opacity-100 transition-opacity">
                {item.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 backdrop-blur flex items-center justify-center p-4 md:p-12"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 bg-white text-ink w-10 h-10 flex items-center justify-center border border-border"
          >
            ✕
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-4 md:left-8 bg-white/90 w-10 h-10 hidden md:flex items-center justify-center"
          >
            ‹
          </button>
          <img
            src={items[active].src}
            alt={items[active].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain bg-white"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-4 md:right-8 bg-white/90 w-10 h-10 hidden md:flex items-center justify-center"
          >
            ›
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 font-sans text-sm text-olive">
            {items[active].caption || items[active].alt} — {active + 1} / {items.length}
          </p>
        </div>
      )}
    </>
  );
}
