import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import FlowerMotif from "@/components/motif/FlowerMotif";
import Reveal from "@/components/motion/Reveal";
import SpinningSeal from "@/components/motion/SpinningSeal";
import TiltCard from "@/components/motion/TiltCard";

export const metadata = {
  title: "Unbroken Ladies Community — Bunmi Alabi",
  description:
    "Faith, Purpose, Sisterhood, Impact. Home of the annual Unbroken conference, WhatsApp community, and women's empowerment initiatives.",
};

const SPEAKERS_2026 = [
  {
    name: "Bunmi Alabi",
    role: "Convener & Founder",
    sub: "Mental Health Counsellor & Author",
    img: "/IMG_9133.JPG.jpeg",
  },
  {
    name: "Dr. Funke Sobowale",
    role: "G.E.T Founder",
    sub: "Keynote Speaker",
    img: "/IMG_9128.JPG.jpeg",
  },
  {
    name: "Hunsu Omolara Margaret",
    role: "Public Health Professional",
    sub: "Keynote Speaker",
    img: "/IMG_9131.JPG.jpeg",
  },
  {
    name: "Doreen Omosele TMA",
    role: "CEO Narra Africa Media",
    sub: "Keynote Speaker",
    img: "/IMG_9127.JPG.jpeg",
  },
  {
    name: "Tessy Osakwe",
    role: "Legal Practitioner",
    sub: "Keynote Speaker",
    img: "/IMG_9123.JPG.jpeg",
  },
];

const PATHWAYS = [
  {
    title: "Attend Conference",
    desc: "Register for the annual gathering. Experience anointed live ministry, practical life workshops, business marketplace, and life-changing fellowship.",
    btn: "Register Free (Bitly)",
    href: "https://bit.ly/4ywiov5",
    silhouette: "rounded-t-[84px] rounded-b-[28px]",
    badge: "Annual Gathering",
  },
  {
    title: "Join WhatsApp Sisterhood",
    desc: "Step into our private, active sisterhood for daily encouragement, heartfelt prayer support, mutual accountability, and sisterly connection.",
    btn: "Join Private Circle",
    href: "https://chat.whatsapp.com/Ino2Q7J4oJ58hhUjJMAAlf?mode=wwt",
    silhouette: "rounded-[44px_16px_44px_16px]",
    badge: "Daily Community",
  },
  {
    title: "Sponsor / Exhibit",
    desc: "Showcase your women-led brand at our conference marketplace or sponsor attendance packages for single mothers and underprivileged sisters.",
    btn: "Call Secretariat",
    href: "tel:08035637325",
    silhouette: "rounded-t-[28px] rounded-b-[84px]",
    badge: "Marketplace & Giving",
  },
  {
    title: "Partner / Volunteer",
    desc: "Lend your professional gifts, medical services, counselling skills, or media talents to the growing Unbroken movement across Nigeria.",
    btn: "Connect With Us",
    href: "/connect",
    silhouette: "rounded-[16px_44px_16px_44px]",
    badge: "Kingdom Service",
  },
];

export default function UnbrokenPage() {
  return (
    <div className="bg-white min-h-screen text-[#1A1118]">
      
      {/* ── HERO BANNER & EMBLEM ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-36 bg-[#FDF6F8] border-b border-[#EDD8E4]">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-[#C97A9E]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 opacity-20 pointer-events-none">
          <FlowerMotif size={360} ambient={true} />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Top Status Pip */}
          <div className="flex items-center gap-4 mb-8">
            <FlowerMotif size={64} delay={0.2} ambient={true} />
            <span className="w-10 h-px bg-[#C97A9E]" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C97A9E] animate-pulse" />
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#C97A9E] font-bold">
                Faith &bull; Purpose &bull; Sisterhood &bull; Impact
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Headline & Action Suite */}
            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <h1 className="font-display text-5xl md:text-7xl lg:text-[98px] leading-[0.88] tracking-tight text-[#1A1118]">
                  Unbroken <br />
                  <span className="italic font-serif text-[#C97A9E]">Ladies Community</span>
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="font-sans text-lg md:text-xl text-[#7A5C72] leading-relaxed mt-8 max-w-xl">
                  A transformative movement empowering single mothers, mature singles, and women navigating life transitions. We gather to heal from brokenness, rediscover God-given identity, and walk in total wholeness.
                </p>
              </Reveal>

              <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://chat.whatsapp.com/Ino2Q7J4oJ58hhUjJMAAlf?mode=wwt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs tracking-[0.22em] uppercase bg-[#C97A9E] text-white px-8 py-4 hover:bg-[#9B4D77] transition-all font-semibold rounded-full shadow-lg shadow-[#C97A9E]/25 inline-flex items-center gap-2 group"
                >
                  <span>Join WhatsApp Community</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>

                <a
                  href="#upcoming-2026"
                  className="font-sans text-xs tracking-[0.22em] uppercase text-[#1A1118] border border-[#EDD8E4] px-8 py-4 hover:border-[#C97A9E] hover:text-[#C97A9E] transition-all rounded-full bg-white shadow-sm"
                >
                  Unbroken 2026 Conference &darr;
                </a>
              </Reveal>

              {/* Sisterhood Pillars */}
              <Reveal delay={0.32} className="mt-14 pt-8 border-t border-[#EDD8E4] grid grid-cols-3 gap-6">
                <div>
                  <p className="font-display text-2xl md:text-3xl text-[#1A1118]">500+</p>
                  <p className="font-sans text-[11px] tracking-wider uppercase text-[#C97A9E] font-bold mt-1">
                    Sisters Connected
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl md:text-3xl text-[#1A1118]">Annual</p>
                  <p className="font-sans text-[11px] tracking-wider uppercase text-[#C97A9E] font-bold mt-1">
                    Flagship Gathering
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl md:text-3xl text-[#1A1118]">100%</p>
                  <p className="font-sans text-[11px] tracking-wider uppercase text-[#C97A9E] font-bold mt-1">
                    Safe Sisterhood
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Architectural Shield Medallion for Official Emblem */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[460px]">
                
                {/* Botanical Sculpted Shield Medallion */}
                <div className="relative aspect-square rounded-[60px_20px_60px_20px] bg-white border-2 border-[#EDD8E4] p-10 shadow-2xl shadow-[#C97A9E]/20 flex items-center justify-center group overflow-hidden">
                  <div className="relative w-full h-full p-4">
                    <Image
                      src="/IMG_9362.PNG"
                      alt="Unbroken Ladies Community Official Emblem"
                      fill
                      priority
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Inner subtle glow */}
                  <div className="absolute inset-0 bg-[#C97A9E]/5 rounded-[60px_20px_60px_20px] pointer-events-none" />
                </div>

                {/* Floating Spinning Botanical Seal */}
                <div className="absolute -top-8 -right-6 md:-right-10 z-20">
                  <SpinningSeal
                    text="UNBROKEN LADIES COMMUNITY • FAITH • PURPOSE • SISTERHOOD • "
                    size={148}
                    flowerSize={50}
                  />
                </div>

                {/* Floating Sisterhood Pill */}
                <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white/95 backdrop-blur-md border border-[#EDD8E4] p-5 rounded-[28px_10px_28px_10px] shadow-xl max-w-[260px] z-20">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#C97A9E]" />
                    <p className="font-sans text-[10px] tracking-widest uppercase font-bold text-[#C97A9E]">
                      Official Sisterhood
                    </p>
                  </div>
                  <p className="font-display text-base text-[#1A1118] leading-snug">
                    President: Bunmi Alabi
                  </p>
                  <p className="font-sans text-[11px] text-[#7A5C72] mt-1">
                    Daily prayer, business networking, and intentional friendship.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SISTERHOOD SHOWCASE (IMG_8906 ORGANIC SILHOUETTE) ─────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Sculpted Organic Leaf Portal with 3D Tilt */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={5}>
              <div className="relative aspect-[16/11] rounded-[72px_24px_72px_24px] overflow-hidden border-2 border-[#EDD8E4] shadow-2xl shadow-[#C97A9E]/15 group">
                <Image
                  src="/IMG_8906.jpg"
                  alt="The Unbroken Sisterhood Gathering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1118]/70 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                {/* Floating HUD Badge */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div className="bg-[#1A1118]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="font-sans text-[11px] tracking-widest uppercase font-semibold text-[#E8A0BF]">
                      Lagos Sisterhood Chapter
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-sans">
                    <span className="w-2 h-2 rounded-full bg-[#E8A0BF]" />
                    <span>Real Community</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <FlowerMotif size={44} ambient={true} />
              <span className="w-8 h-px bg-[#C97A9E]" />
              <Eyebrow>Beyond The Stage</Eyebrow>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A1118] leading-[1.05]">
              Community that outlasts the conference.
            </h2>

            <p className="font-sans text-base md:text-lg text-[#7A5C72] leading-relaxed">
              Unbroken is not merely a once-a-year conference &mdash; it is a living, daily sanctuary. Through private WhatsApp circles, shared devotions, business networking, crisis prayer calls, and authentic fellowship, women discover that brokenness was never the final chapter.
            </p>

            <div className="pt-4">
              <a
                href="https://chat.whatsapp.com/Ino2Q7J4oJ58hhUjJMAAlf?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.22em] uppercase font-bold bg-[#C97A9E] text-white px-8 py-4 rounded-full hover:bg-[#9B4D77] transition-all shadow-md inline-flex items-center gap-2 group"
              >
                <span>Join our private WhatsApp circle</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── UPCOMING FLAGSHIP: UNBROKEN 2026: BECOMING (MIDNIGHT LUXURY) ──── */}
      <section id="upcoming-2026" className="py-24 md:py-36 bg-[#150D13] text-white relative overflow-hidden">
        {/* Radial Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-[#C97A9E]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-16 border-b border-white/10 pb-8">
            <div>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#E8A0BF] font-bold block mb-2">
                Annual Flagship Gathering &bull; October 2026
              </span>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white">
                Unbroken 2026: Becoming
              </h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-sans text-xs tracking-widest uppercase bg-[#C97A9E] text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-[#C97A9E]/30">
                Dresscode: Pink
              </span>
              <span className="font-sans text-xs tracking-widest uppercase bg-white/10 text-white px-5 py-2 rounded-full border border-white/15">
                Admission: 100% Free
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Event Details Dossier Capsule */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#1E131B] border border-white/15 p-8 md:p-10 rounded-[40px_16px_40px_16px] shadow-2xl">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#E8A0BF] font-bold block mb-2">
                  Conference Theme
                </span>
                
                <h3 className="font-display italic text-2xl md:text-4xl text-white mb-6 leading-tight">
                  &ldquo;From who you are to who God wants you to be&rdquo;
                </h3>
                
                <div className="space-y-5 pt-6 border-t border-white/10 text-sm">
                  <div className="flex items-start gap-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8A0BF] mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-white text-base">Saturday, 31st October 2026</p>
                      <p className="text-white/70">10:00 AM Prompt (Registration Check-in begins 9:00 AM)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8A0BF] mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-white text-base">Event Venue</p>
                      <p className="text-white/70">599 U-Turn Bus-Stop, Lag-Abk Exprway, Abule Egba, Lagos</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8A0BF] mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-white text-base">Dresscode</p>
                      <p className="text-[#E8A0BF] font-semibold">All Shades of Pink (Sisterhood Uniformity)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href="https://bit.ly/4ywiov5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center font-sans text-xs tracking-[0.22em] uppercase bg-[#C97A9E] text-white py-4 hover:bg-white hover:text-[#150D13] transition-all font-semibold rounded-full shadow-lg shadow-[#C97A9E]/30"
                  >
                    Register Free on Bitly &rarr;
                  </a>
                  <p className="text-center font-sans text-[11px] text-white/50 mt-3">
                    Registration is mandatory for auditorium seating and attendee pack allocation.
                  </p>
                </div>
              </div>

              {/* Enquiries & Sponsorship Dossier */}
              <div className="bg-[#1E131B] border border-white/15 p-6 md:p-8 rounded-[16px_40px_16px_40px]">
                <h4 className="font-display text-xl text-white mb-2">Secretariat &amp; Sponsorship</h4>
                <p className="font-sans text-xs text-white/70 mb-5 leading-relaxed">
                  Partner with Unbroken to reach and empower hundreds of attending women and single mothers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 font-sans text-xs">
                  <a
                    href="tel:08035637325"
                    className="px-5 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors font-semibold text-center border border-white/15"
                  >
                    Tosin: 08035637325
                  </a>
                  <a
                    href="tel:09011782190"
                    className="px-5 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors font-semibold text-center border border-white/15"
                  >
                    Tobi: 09011782190
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Cathedral Arched Conference Flyer Shrine with 3D Tilt */}
            <div className="lg:col-span-7 flex justify-center">
              <TiltCard maxTilt={5} className="w-full max-w-[560px]">
                <div className="relative aspect-[3/4] w-full rounded-t-[200px] rounded-b-[40px] overflow-hidden shadow-2xl border-2 border-[#C97A9E]/40 group">
                  <Image
                    src="/IMG_9117.JPG.jpeg"
                    alt="Official Unbroken 2026 Becoming Event Flyer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 560px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150D13]/60 via-transparent to-transparent opacity-40 group-hover:opacity-15 transition-opacity" />
                  
                  {/* Overlay badge */}
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-bold text-[#E8A0BF] bg-[#150D13]/85 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md inline-block">
                      Official Flagship Poster &bull; 2026 Edition
                    </span>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>

          {/* ── SPEAKERS ROSTER (CATHEDRAL ARCH SHRINES) ───────────────────── */}
          <div className="mt-28 pt-16 border-t border-white/10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#E8A0BF] font-bold block mb-2">
                Ministers &amp; Keynote Leaders
              </span>
              <h3 className="font-display text-4xl md:text-5xl text-white">
                Meet the 2026 Speakers
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {SPEAKERS_2026.map((sp) => (
                <TiltCard key={sp.name} maxTilt={6}>
                  <div className="group bg-[#1E131B] border border-white/10 rounded-t-[72px] rounded-b-[20px] overflow-hidden hover:border-[#E8A0BF] transition-all p-3 shadow-xl h-full flex flex-col justify-between">
                    <div>
                      {/* Speaker Photo in Arched Frame */}
                      <div className="relative aspect-[4/5] rounded-t-[60px] rounded-b-[16px] overflow-hidden mb-4 bg-[#150D13]">
                        <Image
                          src={sp.img}
                          alt={`${sp.name} — Unbroken Keynote Speaker`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#150D13]/80 via-transparent to-transparent opacity-50" />
                      </div>

                      <div className="px-2">
                        <h4 className="font-display text-lg md:text-xl text-white group-hover:text-[#E8A0BF] transition-colors leading-tight">
                          {sp.name}
                        </h4>
                        <p className="font-sans text-xs text-[#E8A0BF] mt-1 font-semibold">
                          {sp.role}
                        </p>
                      </div>
                    </div>

                    <div className="px-2 pt-3 border-t border-white/10 mt-3">
                      <p className="font-sans text-[11px] text-white/50">
                        {sp.sub}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── HOW TO BE A PART (4 ARCHITECTURAL SILHOUETTES) ───────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Eyebrow>Engage &amp; Belong</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl text-[#1A1118] mt-2">
            Pathways into Unbroken
          </h2>
          <p className="font-sans text-base text-[#7A5C72] mt-4">
            There is a place for you in this sisterhood &mdash; whether as an attendee, a volunteer, a marketplace vendor, or a partner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PATHWAYS.map((item) => (
            <TiltCard key={item.title} maxTilt={6}>
              <div
                className={`bg-white border border-[#EDD8E4] hover:border-[#C97A9E] transition-all duration-500 shadow-sm hover:shadow-2xl p-8 md:p-10 flex flex-col justify-between h-full group ${item.silhouette}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#C97A9E] bg-[#FDF6F8] px-3 py-1 rounded-full border border-[#EDD8E4]">
                      {item.badge}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#EDD8E4] group-hover:bg-[#C97A9E] transition-colors" />
                  </div>

                  <h3 className="font-display text-2xl md:text-[26px] leading-[1.2] text-[#1A1118] group-hover:text-[#C97A9E] transition-colors mb-4">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm text-[#7A5C72] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-[#EDD8E4]/60 flex items-center justify-between">
                  <a
                    href={item.href}
                    className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-[#C97A9E] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5"
                  >
                    <span>{item.btn}</span>
                    <span>&rarr;</span>
                  </a>
                  <span className="w-2 h-2 rounded-full bg-[#EDD8E4] group-hover:bg-[#C97A9E] transition-colors" />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ── ARCHIVAL: UNBROKEN 2019 LANDMARK GATHERING ───────────────────── */}
      <section id="past-2019" className="py-20 md:py-28 bg-[#FDF6F8] border-t border-[#EDD8E4] px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[#EDD8E4]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#1A1118] text-white font-sans text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-bold">
                  Heritage Archive
                </span>
                <Eyebrow>2019 Landmark Gathering</Eyebrow>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-[#1A1118]">
                Where The Sisterhood Began
              </h2>
            </div>
            <p className="font-sans text-xs tracking-widest uppercase text-[#C97A9E] font-bold">
              Unbroken 2019 &bull; Lagos, Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <TiltCard maxTilt={5}>
              <div className="bg-white border border-[#EDD8E4] p-8 rounded-[36px_12px_36px_12px] shadow-sm hover:shadow-xl transition-all flex gap-6 items-center group">
                <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-[#C97A9E] shadow-md group-hover:scale-105 transition-transform">
                  <Image src="/convener.jpg" alt="Bunmi Alabi" fill className="object-cover" />
                </div>
                <div>
                  <span className="font-sans text-[10px] tracking-widest uppercase font-bold text-[#C97A9E] block mb-1">
                    Convener &amp; Visionary
                  </span>
                  <h4 className="font-display text-2xl text-[#1A1118]">Bunmi Alabi</h4>
                  <p className="font-sans text-sm text-[#7A5C72] mt-1">
                    Mental Health Counsellor, Author of Couples&rsquo; Waiting Room, Host of Just A Chat.
                  </p>
                </div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={5}>
              <div className="bg-white border border-[#EDD8E4] p-8 rounded-[12px_36px_12px_36px] shadow-sm hover:shadow-xl transition-all flex gap-6 items-center group">
                <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-[#C97A9E] shadow-md group-hover:scale-105 transition-transform">
                  <Image src="/lolo1.jpg" alt="Omotunde Adebowale David (LOLO1)" fill className="object-cover" />
                </div>
                <div>
                  <span className="font-sans text-[10px] tracking-widest uppercase font-bold text-[#C97A9E] block mb-1">
                    Keynote Speaker 2019
                  </span>
                  <h4 className="font-display text-2xl text-[#1A1118]">Omotunde Adebowale David (LOLO1)</h4>
                  <p className="font-sans text-sm text-[#7A5C72] mt-1">
                    Renowned Broadcaster, Media Personality &amp; Motivational Speaker.
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

    </div>
  );
}
