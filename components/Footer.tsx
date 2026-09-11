"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FlowerMotif from "@/components/motif/FlowerMotif";
import SpinningSeal from "@/components/motion/SpinningSeal";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-[#110A0F] text-[#FAF7F9] relative overflow-hidden pt-28 md:pt-40">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C97A9E]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-[500px] h-[500px] bg-[#E8A0BF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

        {/* ── TOP SECTION: EDITORIAL MANIFESTO & SPINNING SEAL ──────────── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/10 items-start">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-8 h-px bg-[#C97A9E]" />
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#E8A0BF] font-semibold">
                Sanctuary · Wholeness · Sisterhood
              </p>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[0.95]">
              A safe haven to <br />
              <span className="italic font-normal text-[#E8A0BF]">heal, rebuild</span> & reign.
            </h2>

            <p className="font-sans text-base sm:text-lg text-white/70 max-w-lg leading-relaxed">
              Walking alongside women and families across Nigeria and the global diaspora through trauma-informed counselling, transformative conferences, and candid faith.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/counseling"
                className="font-sans text-xs tracking-[0.2em] uppercase bg-[#C97A9E] text-white px-7 py-3.5 rounded-full hover:bg-white hover:text-[#110A0F] transition-all font-semibold shadow-md"
              >
                Book Oasis Counselling →
              </Link>
              <a
                href="https://chat.whatsapp.com/Ino2Q7J4oJ58hhUjJMAAlf?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.2em] uppercase border border-white/20 text-white px-7 py-3.5 rounded-full hover:border-[#E8A0BF] hover:text-[#E8A0BF] transition-colors"
              >
                Join WhatsApp Circle
              </a>
            </div>
          </div>

          {/* Directory Navigation Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: The Three Pillars */}
            <div className="space-y-4">
              <p className="font-sans text-[11px] tracking-[0.24em] uppercase text-[#E8A0BF] font-semibold">
                The Pillars
              </p>
              <ul className="space-y-3 font-sans text-sm">
                <li>
                  <Link href="/counseling" className="text-white/70 hover:text-[#E8A0BF] transition-colors">
                    Oasis Counselling
                  </Link>
                </li>
                <li>
                  <Link href="/unbroken" className="text-white/70 hover:text-[#E8A0BF] transition-colors">
                    Unbroken Sisterhood
                  </Link>
                </li>
                <li>
                  <Link href="/just-a-chat" className="text-white/70 hover:text-[#E8A0BF] transition-colors">
                    Just A Chat Podcast
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-white/70 hover:text-[#E8A0BF] transition-colors">
                    Unbroken 2026
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Initiatives & Foundation */}
            <div className="space-y-4">
              <p className="font-sans text-[11px] tracking-[0.24em] uppercase text-[#E8A0BF] font-semibold">
                Initiatives
              </p>
              <ul className="space-y-3 font-sans text-sm">
                <li>
                  <Link href="/humanitarian" className="text-white/70 hover:text-[#E8A0BF] transition-colors">
                    BAHF Foundation
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/70 hover:text-[#E8A0BF] transition-colors">
                    About Bunmi
                  </Link>
                </li>
                <li>
                  <Link href="/vintage" className="text-white/70 hover:text-[#E8A0BF] transition-colors">
                    Vintage Archive
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="text-white/70 hover:text-[#E8A0BF] transition-colors">
                    Reflections
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Direct Connect */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <p className="font-sans text-[11px] tracking-[0.24em] uppercase text-[#E8A0BF] font-semibold">
                Direct Channels
              </p>
              <ul className="space-y-3 font-sans text-sm">
                <li>
                  <a href="https://www.youtube.com/@bunmialabi7" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#E8A0BF] transition-colors">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/Bunmi.Tomialabi/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#E8A0BF] transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:unbrokenladies@gmail.com" className="text-white/70 hover:text-[#E8A0BF] transition-colors">
                    Email Office
                  </a>
                </li>
                <li>
                  <Link href="/connect" className="text-white/70 hover:text-[#E8A0BF] transition-colors">
                    Enquiries & Press
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* ── METADATA & COPYRIGHT STRIP ───────────────────────────────────── */}
        <div className="pt-8 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-white/40">
          <p className="tracking-widest uppercase text-[10px]">
            © {new Date().getFullYear()} Bunmi Alabi. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] tracking-widest uppercase">
            <span>Faith</span>
            <span>•</span>
            <span>Purpose</span>
            <span>•</span>
            <span>Sisterhood</span>
            <span>•</span>
            <span>Impact</span>
          </div>
          <p className="tracking-widest uppercase text-[10px] text-white/50">
            Lagos, Nigeria
          </p>
        </div>

      </div>

      {/* ── MONUMENTAL SIGNATURE: "BUNMI ALABI" WITH BOTANICAL GARDEN OVERLAY ──
          Oversized, colossal luxury typography cropped slightly off the bottom edge,
          blooming with floral ornaments growing like a living garden across the letters.
      ──────────────────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden select-none border-t border-white/5 pt-4">
        
        {/* Living Garden of Floral Ornaments Placed Thoughtfully Across the Lettering */}
        <div className="absolute inset-0 pointer-events-none z-20 scale-75 sm:scale-100 origin-center">
          
          {/* Flower 1: Nestled above the 'B' */}
          <div className="absolute top-[8%] left-[4%] sm:left-[6%] -rotate-12">
            <FlowerMotif size={72} delay={0.1} ambient={true} interactive={true} />
          </div>

          {/* Flower 2: Delicate petal bloom resting on the 'U' */}
          <div className="absolute top-[28%] left-[16%] sm:left-[17%] rotate-45 opacity-90">
            <FlowerMotif size={44} delay={0.3} ambient={true} />
          </div>

          {/* Flower 3: Grand crown blossom growing between 'N' and 'M' */}
          <div className="absolute top-[5%] left-[27%] sm:left-[28%] rotate-12">
            <FlowerMotif size={84} delay={0.2} ambient={true} interactive={true} />
          </div>

          {/* Flower 4: Subtle bloom nestled in the 'I' */}
          <div className="absolute bottom-[28%] left-[41%] sm:left-[43%] -rotate-6 opacity-85">
            <FlowerMotif size={40} delay={0.5} ambient={true} />
          </div>

          {/* Flower 5: Central garden centerpiece between BUNMI and ALABI */}
          <div className="absolute top-[12%] left-[48%] sm:left-[50%] -translate-x-1/2 rotate-90 scale-75 sm:scale-100">
            <SpinningSeal
              text="BUNMI ALABI • LIVING GARDEN • WHOLENESS •"
              size={105}
              flowerSize={36}
            />
          </div>

          {/* Flower 6: Blossoming over the apex of the 'A' */}
          <div className="absolute top-[6%] right-[36%] sm:right-[38%] -rotate-15">
            <FlowerMotif size={68} delay={0.25} ambient={true} interactive={true} />
          </div>

          {/* Flower 7: Petal cluster nestled along the stem of the 'L' */}
          <div className="absolute top-[32%] right-[26%] sm:right-[27%] rotate-30 opacity-90">
            <FlowerMotif size={48} delay={0.4} ambient={true} />
          </div>

          {/* Flower 8: Lush bloom blossoming across the second 'A' and 'B' */}
          <div className="absolute top-[10%] right-[14%] sm:right-[15%] rotate-6">
            <FlowerMotif size={76} delay={0.35} ambient={true} interactive={true} />
          </div>

          {/* Flower 9: Graceful closing petal cluster near the final 'I' */}
          <div className="absolute bottom-[24%] right-[3%] sm:right-[4%] -rotate-20">
            <FlowerMotif size={54} delay={0.6} ambient={true} interactive={true} />
          </div>

        </div>

        {/* Colossal Lettering, slightly cropped from the bottom edge */}
        <div className="relative z-10 w-full text-center translate-y-[16%] md:translate-y-[20%]">
          <h1 className="font-display text-[15vw] sm:text-[16vw] lg:text-[17vw] leading-[0.72] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FAF7F9]/30 via-[#FAF7F9]/15 to-[#C97A9E]/5 font-normal select-none pointer-events-none whitespace-nowrap">
            BUNMI ALABI
          </h1>
        </div>

      </div>

    </footer>
  );
}
