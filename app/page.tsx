import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import FlowerMotif from "@/components/motif/FlowerMotif";
import SpinningSeal from "@/components/motion/SpinningSeal";
import MarqueeTicker from "@/components/motion/MarqueeTicker";
import TiltCard from "@/components/motion/TiltCard";
import HeroTitleRotator from "@/components/motion/HeroTitleRotator";

const SPEAKERS_2026 = [
  { name: "Bunmi Alabi", role: "President & Founder", sub: "Unbroken Ladies", img: "/IMG_9133.JPG.jpeg" },
  { name: "Dr. Funke Sobowale", role: "Founder", sub: "G.E.T", img: "/IMG_9128.JPG.jpeg" },
  { name: "Hunsu Omolara Margaret", role: "Public Health", sub: "Professional", img: "/IMG_9131.JPG.jpeg" },
  { name: "Doreen Omosele TMA", role: "CEO", sub: "Narra Africa Media", img: "/IMG_9127.JPG.jpeg" },
  { name: "Tessy Osakwe", role: "Legal", sub: "Practitioner", img: "/IMG_9123.JPG.jpeg" },
];

export default function HomePage() {
  return (
    <div className="w-full bg-[#FCFAF8] text-[#1A1118] overflow-hidden">

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ DRAMATIC HERO: ARCHITECTURAL SILHOUETTES & DEPTH Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
          NO BORING BOXES. 
          Cathedral Arch Portal + Floating Spinning Seal + Layered Typography
      Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section className="relative min-h-[100svh] pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#FAF5F7] via-[#FCFAF8] to-[#FCFAF8]">
        
        {/* Ambient atmospheric aura */}
        <div className="absolute top-1/4 -right-24 w-[600px] h-[600px] bg-[#E8A0BF]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#C97A9E]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 relative z-10">
          
          {/* Top Marquee-style Header Tag (Hidden on mobile) */}
          <div className="hidden sm:flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#EDD8E4]/60">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C97A9E] animate-pulse" />
              <p className="hidden sm:block font-sans text-[11px] tracking-[0.28em] uppercase text-[#7A5C72] font-semibold">
                Lagos, Nigeria &middot; Global Calling
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-4 font-sans text-[11px] tracking-widest uppercase text-[#7A5C72] font-semibold">
              <span>Prof. Counselor</span>
              <span>&bull;</span>
              <span>President, Unbroken Ladies</span>
              <span>&bull;</span>
              <span>Founder, BAHF</span>
              <span>&bull;</span>
              <span>Author</span>
            </div>
          </div>

          {/* Main Hero Visual Composition */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 md:pt-12">
            
            {/* Left: Monumental Typography */}
            <div className="lg:col-span-7 relative z-20">
              <Reveal>
                <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/80 border border-[#EDD8E4] shadow-sm mb-4 sm:mb-6">
                  <FlowerMotif size={20} ambient={true} />
                  <span className="font-sans text-[8.5px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.25em] uppercase text-[#C97A9E] font-bold">
                    The Official Space of Bunmi Alabi
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="font-display text-[clamp(56px,8.5vw,132px)] leading-[0.85] tracking-tight text-[#1A1118]">
                  Where healing <br />
                  <span className="italic font-normal text-[#C97A9E] pr-2">becomes</span> 
                  wholeness.
                </h1>
              </Reveal>

              {/* Strategist Mandated Titles Ã¢â‚¬â€ Single-spot Vertical Rotator on Mobile, Full Line on Desktop */}
              <Reveal delay={0.15}>
                <HeroTitleRotator />
              </Reveal>

              <Reveal delay={0.2}>
                <p className="font-sans text-lg md:text-xl text-[#7A5C72] leading-relaxed max-w-xl mt-6">
                  A sanctuary for authentic conversations, emotional restoration, and purposeful sisterhood Ã¢â‚¬â€ gathered under <em>Oasis</em>, <em>Unbroken</em>, and <em>Just A Chat</em>.
                </p>
              </Reveal>

              <Reveal delay={0.3} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8 sm:mt-10">
                <Link
                  href="/counseling"
                  className="font-sans text-xs tracking-[0.2em] uppercase bg-[#1A1118] text-white px-9 py-4 rounded-full hover:bg-[#C97A9E] transition-all duration-300 shadow-lg shadow-[#1A1118]/10 font-semibold flex items-center justify-center gap-3 group text-center"
                >
                  <span>Book Private Session</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8A0BF] group-hover:scale-150 transition-transform" />
                </Link>
                <Link
                  href="/unbroken"
                  className="font-sans text-xs tracking-[0.2em] uppercase text-[#1A1118] border border-[#1A1118]/20 px-9 py-4 rounded-full hover:border-[#C97A9E] hover:text-[#C97A9E] transition-all duration-300 bg-white/50 backdrop-blur-sm font-semibold text-center"
                >
                  Unbroken Sisterhood Ã¢â€ â€™
                </Link>
              </Reveal>
            </div>

            {/* Right: Cathedral Archway Portal (Crystal Clear, Sharp & Unobstructed on Mobile & Desktop) */}
            <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
              
              {/* Spinning Brand Seal */}
              <div className="absolute -top-6 -left-3 sm:-top-10 sm:-left-6 md:-left-12 z-30 origin-top-left">
                <SpinningSeal
                  text="BUNMI ALABI Ã¢â‚¬Â¢ SISTERHOOD Ã¢â‚¬Â¢ HEALING Ã¢â‚¬Â¢ OASIS Ã¢â‚¬Â¢ UNBROKEN Ã¢â‚¬Â¢"
                  size={140}
                  flowerSize={46}
                />
              </div>

              {/* Cathedral Arched Portal Ã¢â‚¬â€ Clean, Sharp, Uncluttered */}
              <TiltCard maxTilt={6} className="relative w-full max-w-[340px] sm:max-w-[460px] mx-auto">
                <div className="relative aspect-[3/4] w-full rounded-t-[220px] md:rounded-t-[260px] rounded-b-[36px] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#F9E6EE] to-[#FAF7F9]">
                  <Image
                    src="/IMG_9475.JPG.jpeg"
                    alt="Bunmi Alabi Ã¢â‚¬â€ Professional Counselor, President Unbroken, Founder BAHF, Author"
                    fill
                    priority
                    quality={95}
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  />
                  
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-t-[220px] md:rounded-t-[260px] rounded-b-[36px] pointer-events-none" />

                  {/* Clean Minimalist Credential Pill (Non-obtrusive) */}
                  <div className="absolute bottom-5 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border border-white/80 shadow-lg text-center">
                    <p className="font-display text-base sm:text-lg text-[#1A1118]">Bunmi Alabi</p>
                    <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#C97A9E] font-semibold">
                      Mental Health Counsellor &bull; Author &bull; President
                    </p>
                  </div>
                </div>
              </TiltCard>

              {/* Floating Decorative Petal Accent */}
              <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-6 z-20 origin-bottom-right">
                <FlowerMotif size={80} ambient={true} interactive={true} />
              </div>

            </div>

          </div>

        </div>

        {/* Scroll down prompt */}
        <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 pt-16 flex items-center justify-between text-xs font-sans text-[#7A5C72]">
          <span className="tracking-[0.2em] uppercase text-[10px]">Scroll to explore</span>
          <span className="w-12 h-px bg-[#C97A9E]/40" />
        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ KINETIC RUNNING MARQUEE Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <MarqueeTicker speed={32} />

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ UNBROKEN 2026: BECOMING (GRAND DRAMATIC PRESENTATION) Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
          NO BORING BOXES!
          Asymmetric Sculpted Glass Frame + 3D Tilt + Arched Speaker Shrines
      Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section className="py-24 md:py-40 bg-[#140D12] text-white relative overflow-hidden">
        
        {/* Glow Spheres */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C97A9E]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#9B4D77]/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

          {/* Section Header */}
          <div className="flex flex-wrap items-end justify-between gap-8 pb-10 border-b border-white/10 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8A0BF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C97A9E]" />
                </span>
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#E8A0BF] font-semibold">
                  Flagship Annual Conference
                </span>
              </div>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-[88px] leading-[0.9] text-white">
                Unbroken 2026
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-5 py-2 rounded-full border border-[#E8A0BF]/40 bg-[#C97A9E]/20 text-[#E8A0BF] font-sans text-xs tracking-widest uppercase font-semibold">
                Dresscode: Pink
              </span>
              <span className="px-5 py-2 rounded-full bg-white/10 text-white font-sans text-xs tracking-widest uppercase">
                Admission: Free
              </span>
            </div>
          </div>

          {/* Event Content Grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <Reveal>
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E8A0BF] font-sans text-[11px] tracking-widest uppercase mb-4">
                  Theme Announcement
                </div>
                <h3 className="font-display text-4xl sm:text-6xl text-white tracking-tight leading-none mb-3">
                  Becoming
                </h3>
                <p className="font-display italic text-2xl sm:text-3xl text-[#E8A0BF]">
                  &ldquo;From who you are to who God wants you to be&rdquo;
                </p>
              </Reveal>

              {/* Sculpted Asymmetric Info Badge (NO RECTANGLE) */}
              <Reveal delay={0.1}>
                <div className="p-8 rounded-[40px_12px_40px_12px] bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-md shadow-xl grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="font-sans text-[10px] tracking-widest uppercase text-[#E8A0BF] mb-1 font-semibold">Date & Time</p>
                    <p className="font-display text-2xl text-white">Sat. 31st Oct. 2026</p>
                    <p className="font-sans text-xs text-white/70">10:00 AM Prompt</p>
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-widest uppercase text-[#E8A0BF] mb-1 font-semibold">Venue</p>
                    <p className="font-sans text-sm text-white leading-snug">
                      599 U-Turn Bus-Stop, Lag-Abk Exprway, Abule Egba, Lagos
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2} className="space-y-6">
                <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed">
                  Join thousands of women for life-shifting word ministry, marketplace empowerment, legal guidance, mental health breakout sessions, and divine restoration.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="https://bit.ly/4ywiov5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs tracking-[0.2em] uppercase bg-[#C97A9E] text-white px-9 py-4 rounded-full hover:bg-white hover:text-[#140D12] transition-all font-semibold shadow-lg shadow-[#C97A9E]/30"
                  >
                    Register Free on Bitly Ã¢â€ â€™
                  </a>
                  <Link
                    href="/events"
                    className="font-sans text-xs tracking-[0.2em] uppercase text-white/90 border border-white/30 px-9 py-4 rounded-full hover:border-white transition-colors"
                  >
                    View All Details
                  </Link>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/[0.06] border border-white/15 p-5 rounded-2xl">
                    <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#E8A0BF] font-bold">Outfit sales — ends 30th Sept</p>
                    <p className="font-sans text-sm text-white/85 mt-2">Pink Hoodie ₦15k · Hoodie & Trouser ₦25k · Shirt ₦8k — Parallex Bank 2002994908, Oluwatosin Adeyemi. DM screenshot to confirm.</p>
                    <div className="mt-3 flex gap-4">
                      <a href="/events" className="font-sans text-xs font-bold text-[#E8A0BF] border-b border-[#E8A0BF] pb-1">Shop merch</a>
                      <a href="https://www.instagram.com/p/Dc-3sFSACi4/" target="_blank" rel="noopener noreferrer" className="font-sans text-xs font-bold text-white/80 border-b border-white/40 pb-1">Instagram post</a>
                    </div>
                  </div>
                  <div className="bg-white/[0.06] border border-white/15 p-5 rounded-2xl">
                    <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#E8A0BF] font-bold">Unbroken moments</p>
                    <p className="font-sans text-sm text-white/85 mt-2">Hangout, 2025 pictures & the latest SHERO post where LOLO1 appeared.</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a href="https://www.instagram.com/p/DRxtzsJAOK7/" target="_blank" rel="noopener noreferrer" className="font-sans text-xs font-bold text-white/80 border-b border-white/40 pb-1">Hangout</a>
                      <a href="https://www.instagram.com/p/DQ_j85giEAj/" target="_blank" rel="noopener noreferrer" className="font-sans text-xs font-bold text-white/80 border-b border-white/40 pb-1">2025 pics</a>
                      <a href="https://www.instagram.com/p/DQeEgsSiKjt/" target="_blank" rel="noopener noreferrer" className="font-sans text-xs font-bold text-[#E8A0BF] border-b border-[#E8A0BF] pb-1">Latest (LOLO1)</a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 text-xs font-sans text-white/60">
                  <span>Enquiries & Sponsorship:</span>
                  <a href="tel:08035637325" className="hover:text-white font-semibold">08035637325 (Tosin)</a>
                  <a href="tel:09011782190" className="hover:text-white font-semibold">09011782190 (Tobi)</a>
                </div>
              </Reveal>
            </div>

            {/* Right: 3D Tilt Flyer in Sculpted Asymmetrical Cutout */}
            <div className="lg:col-span-6 flex justify-center">
              <TiltCard maxTilt={8} className="w-full max-w-[500px]">
                <div className="relative aspect-[3/4] w-full rounded-[60px_16px_60px_16px] overflow-hidden shadow-2xl border-2 border-[#C97A9E]/40 group">
                  <Image
                    src="/IMG_9117.JPG.jpeg"
                    alt="Unbroken 2026 Becoming Official Conference Flyer"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 500px"
                    priority
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[60px_16px_60px_16px] pointer-events-none" />
                </div>
              </TiltCard>
            </div>

          </div>

          {/* SPEAKERS: ARCHED SHRINE PODS (NOT SQUARE CARDS!) */}
          <div className="mt-28 pt-16 border-t border-white/10">
            <div className="flex items-center justify-between mb-12">
              <div>
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#E8A0BF] font-semibold mb-1">
                  Ministers of Wholeness
                </p>
                <h3 className="font-display text-3xl sm:text-5xl text-white">
                  The 2026 Keynote Voices
                </h3>
              </div>
              <Link href="/unbroken" className="hidden sm:inline-flex font-sans text-xs tracking-widest uppercase text-[#E8A0BF] hover:text-white transition-colors">
                Explore Lineup Ã¢â€ â€™
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {SPEAKERS_2026.map((sp) => (
                <div key={sp.name} className="group cursor-pointer">
                  {/* Arched Cathedral Silhouette for each speaker */}
                  <div className="relative aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden mb-4 border border-white/15 bg-white/5 shadow-md">
                    <Image
                      src={sp.img}
                      alt={sp.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  </div>
                  <h4 className="font-display text-xl text-white group-hover:text-[#E8A0BF] transition-colors line-clamp-1">
                    {sp.name}
                  </h4>
                  <p className="font-sans text-xs text-[#E8A0BF] line-clamp-1 font-medium">
                    {sp.role}
                  </p>
                  <p className="font-sans text-[11px] text-white/50 line-clamp-1">
                    {sp.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ THE THREE PILLARS: SCULPTED SANCTUARY PORTALS Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
          NO BORING BOXES!
          Pillar 1: Arched Sanctuary Portal (Oasis)
          Pillar 2: Organic Sisterhood Pill (Unbroken)
          Pillar 3: Cinema Capsule (Just A Chat)
      Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section className="py-24 md:py-40 max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-28">
          <FlowerMotif size={64} ambient={true} />
          <p className="font-sans text-xs tracking-[0.28em] uppercase text-[#C97A9E] font-semibold mt-4 mb-2">
            The Three Expressions
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-[#1A1118] tracking-tight">
            One Calling, Three Sanctuaries.
          </h2>
        </div>

        {/* Ã¢â€â‚¬Ã¢â€â‚¬ PILLAR 01: OASIS COUNSELLING (ARCHED SANCTUARY PORTAL) Ã¢â€â‚¬Ã¢â€â‚¬ */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-36 md:mb-52">
          
          <div className="lg:col-span-6 lg:pr-12 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-[#FDF6F8] text-[#C97A9E] border border-[#EDD8E4] font-semibold">
                01 Ã‚Â· Private Therapy Haven
              </span>
            </div>
            
            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#1A1118] leading-[0.88] tracking-tight">
              Oasis
            </h3>

            <p className="font-sans text-lg text-[#7A5C72] leading-relaxed max-w-lg">
              A private, unhurried sanctuary to untangle grief, marital crisis, and lone parenting exhaustion. Designed without clinical chill Ã¢â‚¬â€ here, compassionate therapy meets deep spiritual dignity.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/counseling"
                className="font-sans text-xs tracking-[0.2em] uppercase bg-[#C97A9E] text-white px-8 py-4 rounded-full hover:bg-[#9B4D77] transition-all font-semibold shadow-md inline-flex items-center gap-2"
              >
                <span>Book a Private Session</span>
                <span>Ã¢â€ â€™</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            {/* Arched Cathedral Portal Frame */}
            <TiltCard maxTilt={6} className="w-full max-w-[480px]">
              <div className="relative aspect-[3/4] rounded-t-[220px] md:rounded-t-[280px] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#FDF6F8]">
                <Image
                  src="/IMG_9476.JPG.jpeg"
                  alt="Bunmi Alabi Ã¢â‚¬â€ Oasis Counselling Sanctuary"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white">
                  <p className="font-display text-xl text-[#1A1118]">Oasis Sanctuary</p>
                  <p className="font-sans text-[11px] text-[#7A5C72]">Confidential In-Person & Virtual Care</p>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>

        {/* Ã¢â€â‚¬Ã¢â€â‚¬ PILLAR 02: UNBROKEN (SCULPTED ASYMMETRIC SISTERHOOD FRAME) Ã¢â€â‚¬Ã¢â€â‚¬ */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-36 md:mb-52">
          
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center relative">
            {/* Sculpted Asymmetric Organic Frame for Community Photo */}
            <TiltCard maxTilt={6} className="w-full max-w-[540px]">
              <div className="relative aspect-[4/3] rounded-[80px_24px_80px_24px] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#FDF6F8] to-[#FAF7F9] group">
                <Image
                  src="/IMG_8906.jpg"
                  alt="Unbroken Ladies Community Sisterhood"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1118]/80 via-transparent to-transparent opacity-80" />
                
                {/* Embedded Unbroken Crest Medal */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <p className="font-display text-2xl text-white">Unbroken Sisterhood</p>
                    <p className="font-sans text-xs tracking-widest text-[#E8A0BF] uppercase font-semibold">
                      Faith Ã¢â‚¬Â¢ Purpose Ã¢â‚¬Â¢ Impact
                    </p>
                  </div>
                  <div className="relative w-14 h-14 bg-white/15 backdrop-blur-md rounded-full p-2 border border-white/30">
                    <Image src="/IMG_9362.PNG" alt="Unbroken Emblem" fill className="object-contain p-1" />
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          <div className="lg:col-span-6 lg:pl-12 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-[#FDF6F8] text-[#C97A9E] border border-[#EDD8E4] font-semibold">
                02 Ã‚Â· Sisterhood Movement
              </span>
            </div>

            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#1A1118] leading-[0.88] tracking-tight">
              Unbroken
            </h3>

            <p className="font-sans text-lg text-[#7A5C72] leading-relaxed max-w-lg">
              A community that refuses to leave any woman behind. Through annual conferences, empowerment marketplaces, emergency relief funds, and an active WhatsApp network, we build wholeness together.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="https://chat.whatsapp.com/JfVWDOML1iF0UDvrDXNnC1?s=sw&p=i&mlu=4"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.2em] uppercase bg-[#1A1118] text-white px-8 py-4 rounded-full hover:bg-[#C97A9E] transition-all font-semibold shadow-md inline-flex items-center gap-2"
              >
                <span>Join WhatsApp Sisterhood</span>
                <span>Ã¢â€ â€”</span>
              </a>
              <Link
                href="/unbroken"
                className="font-sans text-xs tracking-[0.2em] uppercase border border-[#1A1118]/20 px-8 py-4 rounded-full hover:border-[#C97A9E] hover:text-[#C97A9E] transition-colors bg-white font-semibold"
              >
                Explore Community
              </Link>
            </div>
          </div>

        </div>

        {/* Ã¢â€â‚¬Ã¢â€â‚¬ PILLAR 03: JUST A CHAT (CURVED CINEMA CAPSULE) Ã¢â€â‚¬Ã¢â€â‚¬ */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 lg:pr-12 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-[#FDF6F8] text-[#C97A9E] border border-[#EDD8E4] font-semibold">
                03 Ã‚Â· YouTube Media Broadcast
              </span>
            </div>

            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#1A1118] leading-[0.88] tracking-tight">
              Just A Chat
            </h3>

            <p className="font-sans text-lg text-[#7A5C72] leading-relaxed max-w-lg">
              No television scripts, no filtered veneers. Bi-weekly conversations on YouTube addressing what we usually leave unsaid Ã¢â‚¬â€ blended family tensions, emotional burnout, sexual intimacy, and resilient faith.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@bunmialabi7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.2em] uppercase bg-[#C97A9E] text-white px-8 py-4 rounded-full hover:bg-[#9B4D77] transition-all font-semibold shadow-md inline-flex items-center gap-2"
              >
                <span>Watch on YouTube</span>
                <span>Ã¢â€ â€”</span>
              </a>
              <Link
                href="/just-a-chat"
                className="font-sans text-xs tracking-[0.2em] uppercase border border-[#1A1118]/20 px-8 py-4 rounded-full hover:border-[#C97A9E] hover:text-[#C97A9E] transition-colors bg-white font-semibold"
              >
                All Episodes Vault
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            {/* Cinema Capsule (NO RECTANGLE) */}
            <TiltCard maxTilt={6} className="w-full max-w-[540px]">
              <div className="relative aspect-[16/10] rounded-[50px] overflow-hidden shadow-2xl border-4 border-white bg-[#1A1118] group">
                <Image
                  src="/thumb6.jpg"
                  alt="Just A Chat with Bunmi Alabi"
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
                
                {/* Glowing Magnetic Play Button */}
                <a
                  href="https://www.youtube.com/@bunmialabi7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors"
                >
                  <div className="w-20 h-20 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-white transition-all duration-300">
                    <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[16px] border-t-transparent border-b-transparent border-l-[#C97A9E] ml-1.5" />
                  </div>
                </a>

                {/* Animated Audio Equalizer Waveform Pill */}
                <div className="absolute bottom-6 left-6 bg-black/75 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-3 border border-white/20">
                  <div className="flex items-end gap-1 h-3">
                    <span className="w-1 bg-[#E8A0BF] h-full animate-bounce rounded-full" />
                    <span className="w-1 bg-[#E8A0BF] h-2/3 animate-pulse rounded-full" />
                    <span className="w-1 bg-[#E8A0BF] h-4/5 animate-bounce rounded-full" />
                  </div>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-white font-semibold">
                    Bi-Weekly Episodes
                  </span>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>

      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ HUMANITARIAN FOUNDATION: THE COMPASSION CREST (BAHF) Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
          NO RECTANGULAR DIVS!
          Sculpted Organic Medallion Frame with Radiant Light
      Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section className="py-24 md:py-36 bg-[#FDF6F8] border-y border-[#EDD8E4] px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            {/* Circular Medallion Shield (NO RECTANGLE) */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white p-8 shadow-2xl border-4 border-[#EDD8E4] flex items-center justify-center group hover:border-[#C97A9E] transition-colors">
              <Image
                src="/IMG_9347_1.jpeg"
                alt="Bunmi Alabi Humanitarian Foundation Crest"
                fill
                className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#EDD8E4] text-[#C97A9E] font-sans text-[10px] tracking-widest uppercase font-semibold">
              BAHF Ã‚Â· Humanitarian Wing
            </div>
            
            <h2 className="font-display text-4xl sm:text-6xl text-[#1A1118] tracking-tight leading-[0.95]">
              Bunmi Alabi <br />
              <span className="text-[#C97A9E] italic">Humanitarian</span> Foundation
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#7A5C72] leading-relaxed max-w-xl">
              Extending compassion beyond words into tangible rescue. We provide welfare sustenance, micro-grants for single mothers, and grassroots trauma rehabilitation across underprivileged communities in Lagos and beyond.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/humanitarian"
                className="font-sans text-xs tracking-[0.2em] uppercase bg-[#1A1118] text-white px-8 py-4 rounded-full hover:bg-[#C97A9E] transition-colors font-semibold"
              >
                Foundation Initiatives Ã¢â€ â€™
              </Link>
              <Link
                href="/connect"
                className="font-sans text-xs tracking-[0.2em] uppercase border border-[#EDD8E4] bg-white text-[#1A1118] px-8 py-4 rounded-full hover:border-[#C97A9E] transition-colors font-semibold"
              >
                Partner or Donate
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ BOTANICAL SHRINE PULL QUOTE Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
          Atmospheric spinning seal, floating layered blooms, oversized typography
      Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-white text-center relative overflow-hidden">
        
        {/* Ambient background motifs */}
        <div className="absolute top-12 left-12 opacity-35 pointer-events-none hidden md:block">
          <FlowerMotif size={110} ambient={true} />
        </div>
        <div className="absolute bottom-12 right-12 opacity-30 pointer-events-none hidden md:block">
          <FlowerMotif size={130} ambient={true} />
        </div>

        <div className="max-w-[960px] mx-auto relative z-10 space-y-8">
          
          <div className="flex justify-center">
            <SpinningSeal
              text="BUNMI ALABI Ã¢â‚¬Â¢ RESTORING WHOLENESS Ã¢â‚¬Â¢ FAITH Ã¢â‚¬Â¢ LOVE Ã¢â‚¬Â¢"
              size={130}
              flowerSize={44}
            />
          </div>

          <Reveal>
            <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-[#C97A9E] font-bold">
              The Guiding Conviction
            </p>
          </Reveal>

          <Reveal delay={0.1} y={20}>
            <blockquote className="font-display text-[clamp(26px,3.8vw,52px)] leading-[1.2] tracking-tight text-[#1A1118]">
              &ldquo;What happened to you does not have to define you, where you are does not have to be where you remain, and every difficult season can become a pathway to becoming stronger, wiser, and more purposeful.&rdquo;
            </blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <cite className="not-italic font-sans text-xs tracking-[0.25em] uppercase text-[#C97A9E] font-bold block pt-4">
              Ã¢â‚¬â€ Bunmi Alabi
            </cite>
          </Reveal>

        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ THE LUXURY FINAL CALL-TO-ACTION (STUDIO GRADE) Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
          The defining moment of decision. Real urgency, uncompromised dignity.
          Cathedral sanctuary archway + dual pathways (Oasis / Unbroken)
      Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section className="py-24 md:py-40 bg-[#140D12] text-white relative overflow-hidden">
        
        {/* Soft atmospheric ambient glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C97A9E]/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
          
          {/* Central Animated Botanical Emblem */}
          <div className="flex justify-center mb-8">
            <SpinningSeal
              text="BUNMI ALABI Ã¢â‚¬Â¢ TAKE THE FIRST STEP Ã¢â‚¬Â¢ OASIS SANCTUARY Ã¢â‚¬Â¢"
              size={140}
              flowerSize={46}
            />
          </div>

          {/* Real Emotional Urgency Title */}
          <Reveal>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#E8A0BF] font-sans text-[11px] tracking-[0.25em] uppercase font-semibold mb-6">
              A Moment of Quiet Courage
            </div>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-[92px] leading-[0.9] tracking-tight text-white max-w-4xl mx-auto">
              You have carried this <br />
              <span className="italic font-normal text-[#E8A0BF]">in silence</span> long enough.
            </h2>
          </Reveal>

          {/* Gain Statement: The Reframe of Strength */}
          <Reveal delay={0.15}>
            <p className="font-sans text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mt-8 leading-relaxed">
              Stepping into Oasis isn&apos;t an admission of weakness Ã¢â‚¬â€ it is reclaiming the clarity, emotional safety, and practical guidance you need to rebuild in confidence.
            </p>
          </Reveal>

          {/* Primary Action Button */}
          <Reveal delay={0.25} className="mt-10 flex justify-center">
            <a
              href="https://wa.me/2347063038670?text=Hello%20Bunmi%20Alabi,%20I%20am%20reaching%20out%20to%20reserve%20a%20confidential%20counselling%20session%20at%20Oasis."
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs tracking-[0.22em] uppercase bg-[#C97A9E] text-white px-10 py-5 rounded-full hover:bg-white hover:text-[#140D12] transition-all duration-300 font-semibold shadow-2xl shadow-[#C97A9E]/40 hover:scale-105 inline-flex items-center gap-3"
            >
              <span>Reserve Your Confidential Session</span>
              <span className="text-lg">Ã¢â€ â€™</span>
            </a>
          </Reveal>

          {/* Small Trust Reminder (Directly below button) */}
          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-sans text-[#E8A0BF]/80">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8A0BF]" />
                100% Confidential & Judgment-Free
              </span>
              <span className="hidden sm:inline text-white/30">Ã¢â‚¬Â¢</span>
              <span>In-Person in Lagos or Virtual Worldwide</span>
              <span className="hidden sm:inline text-white/30">Ã¢â‚¬Â¢</span>
              <span>Direct Personal Response Within 24 Hours</span>
            </div>
          </Reveal>

          {/* Secondary Sisterhood Pathway (Unbroken 2026) */}
          <Reveal delay={0.35}>
            <div className="mt-16 pt-12 border-t border-white/10 max-w-xl mx-auto">
              <p className="font-sans text-sm text-white/70 mb-4">
                Looking for community? Join hundreds of women rediscovering who God created them to be at <strong>Unbroken 2026: Becoming</strong>.
              </p>
              <a
                href="https://bit.ly/4ywiov5"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.2em] uppercase text-[#E8A0BF] hover:text-white border-b border-[#E8A0BF] pb-1 transition-colors font-semibold inline-block"
              >
                Claim Your Free Seat on Bitly (Sat. 31 Oct) Ã¢â€ â€™
              </a>
              <p className="font-sans text-[11px] text-white/40 mt-2">
                Compulsory registration guarantees hall seating at Abule Egba, Lagos Ã‚Â· Dresscode: Pink
              </p>
            </div>
          </Reveal>

        </div>
      </section>

    </div>
  );
}
