"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { label: "Home", href: "/", image: "/enhanced/convener-enhanced.jpg" },
  { label: "Just A Chat", href: "/just-a-chat", image: "/assets/african_women_entrepreneurs.jpg" },
  { label: "Stories", href: "/stories", image: "/assets/grid.jpg" },
  { label: "About", href: "/about", image: "/new-assets/whatsapp-2025-10-06-11-33-52_003020ab.jpg" },
  { label: "Connect", href: "/connect", image: "/assets/cultural_festivals.jpg" },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Prevent scrolling when menu is open
  if (typeof window !== "undefined") {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-40 bg-ink text-cream flex flex-col justify-center px-6 md:px-24"
    >
      {/* Background Hover Image Reveal (Optional signature interaction) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 md:opacity-40">
        {NAV_ITEMS.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: hoveredIndex === i ? 1 : 0,
              scale: hoveredIndex === i ? 1 : 1.1,
            }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0"
          >
            <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      <nav className="relative z-10 flex flex-col gap-6 md:gap-8">
        {NAV_ITEMS.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group font-display text-5xl md:text-7xl lg:text-[96px] leading-none tracking-tight block w-fit"
            >
              <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-8">
                {item.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Footer Meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 mt-20 md:mt-32 flex gap-12 font-sans text-xs font-semibold tracking-widest uppercase text-paper/60"
      >
        <a href="https://www.instagram.com/Bunmi.Tomialabi/" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">Instagram</a>
        <a href="https://www.youtube.com/@bunmialabi7" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">YouTube</a>
      </motion.div>
    </motion.div>
  );
}
