"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import FlowerMotif from "@/components/motif/FlowerMotif";

// Primary nav (spread across the bar)
const PRIMARY_LINKS = [
  { label: "Home", href: "/", desc: "Return to overview" },
  { label: "About", href: "/about", desc: "Story, calling & credentials" },
  { label: "Oasis", href: "/counseling", desc: "Confidential therapy sanctuary" },
  { label: "Unbroken", href: "/unbroken", desc: "Conferences & sisterhood" },
  { label: "Just A Chat", href: "/just-a-chat", desc: "Bi-weekly video podcast" },
];

// Secondary links under "More" & in the overlay second column
const SECONDARY_LINKS = [
  { label: "Unbroken 2026", href: "/events", tag: "Sat 31 Oct" },
  { label: "Humanitarian Foundation", href: "/humanitarian", tag: "BAHF" },
  { label: "Vintage Archive", href: "/vintage", tag: "Memories" },
  { label: "Stories & Reflections", href: "/stories", tag: "Articles" },
  { label: "Connect & Inquiries", href: "/connect", tag: "Hotlines" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => { setIsOpen(false); setMoreOpen(false); }, [pathname]);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md py-3 md:py-4 shadow-[0_1px_0_0_#EDD8E4]"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between gap-8">

          {/* Wordmark */}
          <Link
            href="/"
            className="font-display text-xl md:text-2xl tracking-tight text-[#1A1118] hover:text-[#C97A9E] transition-colors duration-300 shrink-0"
          >
            Bunmi Alabi
          </Link>

          {/* Desktop nav — spread links as client specified */}
          <nav
            className="hidden lg:flex items-center gap-8 font-sans text-[13px] tracking-wide text-[#3D2B3D]"
            aria-label="Main navigation"
          >
            {PRIMARY_LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[#C97A9E] transition-colors duration-200 ${
                  pathname === link.href ? "text-[#C97A9E] font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
              onFocus={() => setMoreOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setMoreOpen(false);
              }}
            >
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                onKeyDown={(e) => e.key === "Escape" && setMoreOpen(false)}
                className="flex items-center gap-1.5 hover:text-[#C97A9E] transition-colors focus:outline-none"
                aria-haspopup="true"
                aria-expanded={moreOpen}
              >
                More
                <span className={`inline-block transition-transform duration-200 text-xs ${moreOpen ? "rotate-180" : ""}`}>▾</span>
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-3 w-60 bg-white border border-[#EDD8E4] shadow-lg shadow-[#C97A9E]/10 py-2 rounded-sm"
                  >
                    {SECONDARY_LINKS.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block px-5 py-2.5 font-sans text-sm text-[#3D2B3D] hover:bg-[#FDF6F8] hover:text-[#C97A9E] transition-colors"
                        onClick={() => setMoreOpen(false)}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side — CTA + hamburger */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/counseling"
              className="hidden md:inline-flex font-sans text-[11px] tracking-[0.18em] uppercase bg-[#C97A9E] text-white px-5 py-2.5 hover:bg-[#9B4D77] transition-colors duration-300 rounded shadow-sm"
            >
              Book a Session
            </Link>

            {/* Animated hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#C97A9E]/10 transition-colors focus:outline-none"
            >
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#1A1118] font-semibold hidden sm:inline">
                {isOpen ? "Close" : "Menu"}
              </span>
              <div className="flex flex-col justify-center gap-[5px] w-6 h-6">
                <span
                  className={`block h-px w-6 bg-[#1A1118] transition-all duration-300 origin-center ${
                    isOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-[#1A1118] transition-all duration-300 ${
                    isOpen ? "w-0 opacity-0" : "w-4"
                  }`}
                />
                <span
                  className={`block h-px w-6 bg-[#1A1118] transition-all duration-300 origin-center ${
                    isOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Multi-Column Full-screen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-3%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-3%" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#1A1118] text-white flex flex-col justify-between px-6 md:px-16 lg:px-24 pt-32 pb-12 overflow-y-auto"
          >
            <div className="max-w-[1600px] w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Column 1: The Core Pillars — Broken into 2 Columns on Mobile */}
              <div className="lg:col-span-7">
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#E8A0BF] font-semibold mb-6 flex items-center gap-2">
                  <span className="w-6 h-px bg-[#E8A0BF]" />
                  Main Directory
                </p>
                <nav className="grid grid-cols-2 gap-3 sm:gap-4 md:flex md:flex-col md:gap-4" aria-label="Main menu links">
                  {PRIMARY_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, delay: 0.04 + i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex flex-col p-4 md:p-0 rounded-[22px_8px_22px_8px] md:rounded-none bg-white/5 md:bg-transparent border border-white/10 md:border-none hover:border-[#E8A0BF] md:flex-row md:items-baseline gap-1 md:gap-4 hover:text-[#E8A0BF] transition-all h-full justify-between"
                      >
                        <div>
                          <span className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white group-hover:text-[#E8A0BF] transition-colors block">
                            {link.label}
                          </span>
                          <span className="font-sans text-[11px] sm:text-xs text-white/50 group-hover:text-white/80 transition-colors line-clamp-2 md:line-clamp-none mt-1">
                            {link.desc}
                          </span>
                        </div>
                        <span className="text-[#E8A0BF] text-xs font-bold md:hidden mt-2">&rarr;</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Column 2: Initiatives, Events & Archives */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 lg:border-l lg:border-white/10 lg:pl-12">
                <div>
                  <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#E8A0BF] font-semibold mb-6 flex items-center gap-2">
                    <span className="w-6 h-px bg-[#E8A0BF]" />
                    Initiatives &amp; Events
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                    {SECONDARY_LINKS.map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.35, delay: 0.15 + i * 0.04 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between p-3.5 sm:py-2.5 border-b border-white/10 hover:border-[#E8A0BF] text-white/80 hover:text-white transition-all group rounded-xl bg-white/[0.04] sm:bg-transparent"
                        >
                          <span className="font-sans text-xs sm:text-sm md:text-base font-medium">{link.label}</span>
                          <span className="font-sans text-[9px] tracking-widest uppercase bg-white/10 px-2 py-0.5 rounded text-[#E8A0BF] group-hover:bg-[#C97A9E] group-hover:text-white transition-colors">
                            {link.tag}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Direct Booking Callout Card */}
                <div className="p-5 sm:p-6 bg-white/5 border border-white/10 rounded-[28px_10px_28px_10px] backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <FlowerMotif size={32} ambient={true} />
                    <p className="font-display text-lg sm:text-xl text-white">Private Counselling</p>
                  </div>
                  <p className="font-sans text-xs text-white/70 mb-4 leading-relaxed">
                    Book an in-person or virtual session with Bunmi Alabi through Oasis practice.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/counseling"
                      onClick={() => setIsOpen(false)}
                      className="font-sans text-xs tracking-widest uppercase bg-[#C97A9E] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-white hover:text-[#1A1118] transition-colors inline-block"
                    >
                      Book Session →
                    </Link>
                    <a
                      href="https://chat.whatsapp.com/Ino2Q7J4oJ58hhUjJMAAlf?mode=wwt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs tracking-widest uppercase text-[#E8A0BF] hover:text-white transition-colors"
                    >
                      WhatsApp Sisterhood
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Bar: Social & Hotlines */}
            <div className="max-w-[1600px] w-full mx-auto pt-8 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-white/50">
              <div className="flex flex-wrap items-center gap-6 text-white/70">
                <a href="https://www.youtube.com/@bunmialabi7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  YouTube: @bunmialabi7
                </a>
                <a href="https://www.instagram.com/Bunmi.Tomialabi/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram: @Bunmi.Tomialabi
                </a>
                <a href="https://chat.whatsapp.com/Ino2Q7J4oJ58hhUjJMAAlf?mode=wwt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Sisterhood
                </a>
              </div>
              <p className="tracking-widest uppercase text-[10px] text-white/40">
                Lagos, Nigeria · Global Outreach
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
