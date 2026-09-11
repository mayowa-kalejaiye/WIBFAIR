"use client";

import { motion } from "motion/react";
import FlowerMotif from "@/components/motif/FlowerMotif";

type SpinningSealProps = {
  text?: string;
  size?: number;
  flowerSize?: number;
  className?: string;
};

export default function SpinningSeal({
  text = "BUNMI ALABI • HEALING • SISTERHOOD • RESTORATION •",
  size = 140,
  flowerSize = 48,
  className = "",
}: SpinningSealProps) {
  const id = `seal-path-${size}`;
  const radius = size * 0.38;

  return (
    <div
      className={`relative flex items-center justify-center select-none cursor-pointer group ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer spinning circular typography */}
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 origin-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        whileHover={{ scale: 1.06 }}
      >
        <defs>
          <path
            id={id}
            d={`M ${size / 2}, ${size / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text className="font-sans text-[9px] tracking-[0.28em] uppercase fill-[#C97A9E] font-semibold">
          <textPath href={`#${id}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </motion.svg>

      {/* Center Botanical Blooming Core */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        whileHover={{ scale: 1.15, rotate: 12 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <FlowerMotif size={flowerSize} ambient={true} interactive={true} />
      </motion.div>
    </div>
  );
}
