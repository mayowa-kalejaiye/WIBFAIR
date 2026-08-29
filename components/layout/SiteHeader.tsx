"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import MenuOverlay from "./MenuOverlay";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Hide editorial nav entirely inside /admin (admin has its own AdminNav)
  if (pathname?.startsWith("/admin")) return null;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white">
        <div className="max-w-[1600px] mx-auto px-6 py-8 md:px-12 md:py-12 flex justify-between items-center">
          <Link href="/" className="font-display text-2xl tracking-wide uppercase hover:opacity-70 transition-opacity">
            Bunmi Alabi
          </Link>

          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="font-sans text-xs font-semibold tracking-[0.2em] uppercase hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {isMenuOpen && <MenuOverlay isOpen={isMenuOpen} onClose={toggleMenu} />}
      </AnimatePresence>
    </>
  );
}
