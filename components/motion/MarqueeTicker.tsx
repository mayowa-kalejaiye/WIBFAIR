"use client";

import { motion } from "motion/react";
import FlowerMotif from "@/components/motif/FlowerMotif";

type MarqueeProps = {
  items?: string[];
  speed?: number;
  className?: string;
  reverse?: boolean;
};

const DEFAULT_ITEMS = [
  "FAITH • PURPOSE • SISTERHOOD",
  "BECOMING WHO GOD CREATED YOU TO BE",
  "OASIS COUNSELLING SANCTUARY",
  "UNBROKEN 2026: BECOMING",
  "JUST A CHAT BI-WEEKLY ON YOUTUBE",
  "HEALING IS NOT A DESTINATION — IT IS A RETURN",
];

export default function MarqueeTicker({
  items = DEFAULT_ITEMS,
  speed = 35,
  className = "",
  reverse = false,
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap py-6 select-none flex border-y border-[#EDD8E4]/60 bg-[#FAF7F9] ${className}`}>
      <motion.div
        className="flex items-center gap-12 shrink-0"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="font-display italic text-2xl md:text-3xl lg:text-4xl text-[#1A1118] tracking-tight">
              {item}
            </span>
            <FlowerMotif size={28} ambient={false} interactive={false} className="opacity-70" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
