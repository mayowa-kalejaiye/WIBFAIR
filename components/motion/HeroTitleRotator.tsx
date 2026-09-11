"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const TITLES = [
  "Mental Health Counselor & Coach",
  "Speaker",
  "Assistant Pastor",
  "Author",
  "Media Personality",
  "President, Unbroken Ladies",
];

export default function HeroTitleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-5 sm:mt-6">
      {/* Mobile: Single-Spot Vertical Slide-Up Rotator (Saves Space, Extremely Sleek) */}
      <div className="sm:hidden relative h-7 overflow-hidden flex items-center border-l-2 border-[#C97A9E] pl-3 py-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -22, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 font-sans text-xs tracking-[0.16em] uppercase font-bold text-[#1A1118]"
          >
            <span>{TITLES[index]}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop / Tablet: Full Editorial Typographic Line */}
      <div className="hidden sm:flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-sans tracking-[0.18em] uppercase text-[#7A5C72] leading-relaxed">
        {TITLES.map((t, i) => (
          <span key={t} className="inline-flex items-center gap-3">
            <span className="font-semibold text-[#1A1118]">{t}</span>
            {i < TITLES.length - 1 && <span className="text-[#C97A9E]">&bull;</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
