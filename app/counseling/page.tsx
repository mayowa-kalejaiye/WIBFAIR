import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import FlowerMotif from "@/components/motif/FlowerMotif";
import Reveal from "@/components/motion/Reveal";
import SpinningSeal from "@/components/motion/SpinningSeal";
import TiltCard from "@/components/motion/TiltCard";

export const metadata = {
  title: "Oasis Counselling — Bunmi Alabi",
  description:
    "Professional Counselling with Bunmi Alabi — a calm, private, confidential sanctuary for emotional healing, relationship guidance, and personal restoration.",
};

// Set real Calendly URL here when provided
const CALENDLY_URL = "";

const SPECIALIZED_CARE = [
  {
    category: "01 / Motherhood",
    title: "Single Mothers & Lone Parenting",
    desc: "Navigating lone parenting pressures, healing from rejection, emotional fatigue, and rebuilding confidence with grace and spiritual stability.",
    silhouette: "rounded-t-[96px] rounded-b-[28px]",
    badge: "Parenting Sanctuary",
  },
  {
    category: "02 / Delay & Grief",
    title: "Waiting Seasons & Delayed Hope",
    desc: "The silent grief of delayed marital union, childbearing expectations, and remaining anchored in joy while standing in the waiting room of life.",
    silhouette: "rounded-[48px_16px_48px_16px]",
    badge: "Reproductive & Life Delay",
  },
  {
    category: "03 / Trauma Recovery",
    title: "Emotional Healing & Rebuilding",
    desc: "Untangling past domestic heartache, narcissistic wounds, grief, identity confusion, and reclaiming your inner voice without shame.",
    silhouette: "rounded-t-[28px] rounded-b-[96px]",
    badge: "Inner Restoration",
  },
  {
    category: "04 / Kingdom Alignment",
    title: "Relationships & Pre-Marital",
    desc: "Establishing healthy emotional boundaries, resolving deep-seated resentment, communication alignment, and intentional kingdom courtship.",
    silhouette: "rounded-[16px_48px_16px_48px]",
    badge: "Couples & Marital Care",
  },
];

const JOURNEY_PHASES = [
  {
    step: "01",
    phase: "Intake & Comfort",
    title: "Private Booking & Space Selection",
    desc: "Schedule seamlessly via confidential WhatsApp or Calendly. Choose between an in-person session in our serene Lagos sanctuary or private encrypted video call worldwide.",
    silhouette: "rounded-t-[80px] rounded-b-[28px]",
  },
  {
    step: "02",
    phase: "The Session",
    title: "60-Minute Safe Haven",
    desc: "A completely unhurried, judgment-free space where you hold the floor. Bunmi listens deeply, helping you untangle painful thoughts without rush, condemnation, or cold jargon.",
    silhouette: "rounded-[44px_16px_44px_16px]",
  },
  {
    step: "03",
    phase: "Restoration",
    title: "Gentle Roadmap & Healing Tools",
    desc: "Walk away with practical reflective prompts, emotional coping tools, tailored literature recommendations from Couples’ Waiting Room, and supportive follow-up care.",
    silhouette: "rounded-[16px_44px_16px_44px]",
  },
];

export default function CounselingPage() {
  return (
    <div className="bg-white min-h-screen text-[#1A1118]">
      
      {/* ── HERO: THE SACRED SANCTUARY ───────────────────────────────────── */}
      <section className="relative bg-[#FDF6F8] pt-36 md:pt-44 pb-24 md:pb-36 px-6 md:px-12 border-b border-[#EDD8E4] overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-1/3 w-[650px] h-[650px] bg-[#C97A9E]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 opacity-20 pointer-events-none">
          <FlowerMotif size={360} ambient={true} />
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          
          {/* Top Status Pip */}
          <div className="flex items-center gap-4 mb-8">
            <FlowerMotif size={64} delay={0.2} ambient={true} />
            <span className="w-10 h-px bg-[#C97A9E]" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C97A9E] animate-pulse" />
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#C97A9E] font-bold">
                Oasis Counselling Practice &bull; Lagos &amp; Worldwide
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Headline & Action Suite */}
            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <h1 className="font-display text-5xl md:text-7xl lg:text-[98px] leading-[0.88] tracking-tight text-[#1A1118]">
                  A calm room to <br />
                  <span className="italic font-serif text-[#C97A9E]">be heard &amp; healed.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="font-sans text-lg md:text-xl text-[#7A5C72] leading-relaxed mt-8 max-w-xl">
                  Oasis is a discreet, judgment-free therapeutic sanctuary founded by Bunmi Alabi. Whether you are walking through silent grief, marital crossroads, single motherhood, or emotional burnout &mdash; here you find stillness, dignity, and restorative clarity.
                </p>
              </Reveal>

              <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-4">
                {CALENDLY_URL ? (
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs tracking-[0.22em] uppercase bg-[#C97A9E] text-white px-8 py-4 hover:bg-[#9B4D77] transition-all font-semibold rounded-full shadow-lg shadow-[#C97A9E]/25 inline-flex items-center gap-2 group"
                  >
                    <span>Book via Calendly</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                ) : (
                  <a
                    href="https://wa.me/2347063038670?text=Hello%20Bunmi%20Alabi,%20I%20would%20like%20to%20schedule%20a%20private%20counselling%20session%20at%20Oasis."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs tracking-[0.22em] uppercase bg-[#C97A9E] text-white px-8 py-4 hover:bg-[#9B4D77] transition-all font-semibold rounded-full shadow-lg shadow-[#C97A9E]/25 inline-flex items-center gap-2 group"
                  >
                    <span>Reserve Confidential Session</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                )}

                <a
                  href="#specialized-care"
                  className="font-sans text-xs tracking-[0.22em] uppercase text-[#1A1118] border border-[#EDD8E4] px-8 py-4 hover:border-[#C97A9E] hover:text-[#C97A9E] transition-all rounded-full bg-white shadow-sm"
                >
                  Explore Areas of Care &darr;
                </a>
              </Reveal>

              {/* Sanctuary Metrics / Guarantees */}
              <Reveal delay={0.32} className="mt-14 pt-8 border-t border-[#EDD8E4] grid grid-cols-3 gap-6">
                <div>
                  <p className="font-display text-2xl md:text-3xl text-[#1A1118]">100%</p>
                  <p className="font-sans text-[11px] tracking-wider uppercase text-[#C97A9E] font-bold mt-1">
                    Confidential
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl md:text-3xl text-[#1A1118]">60 Min</p>
                  <p className="font-sans text-[11px] tracking-wider uppercase text-[#C97A9E] font-bold mt-1">
                    Unhurried Care
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl md:text-3xl text-[#1A1118]">In-Person</p>
                  <p className="font-sans text-[11px] tracking-wider uppercase text-[#C97A9E] font-bold mt-1">
                    or Global Video
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Architectural Cathedral Arch Sanctuary Shrine */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[460px]">
                
                {/* Cathedral Arch Portal */}
                <div className="relative aspect-[4/5] rounded-t-[240px] rounded-b-[40px] overflow-hidden border-2 border-[#EDD8E4] shadow-2xl shadow-[#C97A9E]/20 bg-white group">
                  <Image
                    src="/IMG_9476.JPG.jpeg"
                    alt="Bunmi Alabi — Professional Counsellor & Founder of Oasis"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1118]/70 via-transparent to-transparent opacity-50" />
                  
                  {/* Bottom Portrait Name Ribbon */}
                  <div className="absolute bottom-6 left-6 right-6 text-center text-white">
                    <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-bold text-[#E8A0BF] block mb-1">
                      Lead Counsellor &amp; Founder
                    </span>
                    <p className="font-display text-2xl">Bunmi Alabi</p>
                  </div>
                </div>

                {/* Floating Spinning Botanical Seal */}
                <div className="absolute -top-8 -right-6 md:-right-10 z-20">
                  <SpinningSeal
                    text="OASIS COUNSELLING • A CALM ROOM TO BREATHE • "
                    size={144}
                    flowerSize={50}
                  />
                </div>

                {/* Floating Accreditation Capsule */}
                <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white/95 backdrop-blur-md border border-[#EDD8E4] p-5 rounded-[28px_10px_28px_10px] shadow-xl max-w-[250px] z-20">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#C97A9E]" />
                    <p className="font-sans text-[10px] tracking-widest uppercase font-bold text-[#C97A9E]">
                      Professional Practice
                    </p>
                  </div>
                  <p className="font-display text-base text-[#1A1118] leading-snug">
                    Mental Health &amp; Relationship Counsellor
                  </p>
                  <p className="font-sans text-[11px] text-[#7A5C72] mt-1">
                    Safe, private appointments in Lagos or encrypted online.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── THE OASIS PHILOSOPHY: NOT A COLD CLINIC ───────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="relative rounded-[56px_20px_56px_20px] bg-white border border-[#EDD8E4] p-10 md:p-20 shadow-xl overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <FlowerMotif size={44} ambient={true} />
                <span className="w-8 h-px bg-[#C97A9E]" />
                <Eyebrow>The Oasis Ethos</Eyebrow>
              </div>
              <h2 className="font-display text-4xl md:text-6xl text-[#1A1118] leading-[1.05]">
                Not a cold clinic. <br />
                <span className="italic font-serif text-[#C97A9E]">A room to breathe.</span>
              </h2>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#7A5C72] font-semibold mt-6">
                In-Person at Lagos Sanctuary &bull; Worldwide via Encrypted Link
              </p>
            </div>

            <div className="lg:col-span-7 font-sans text-base md:text-lg text-[#7A5C72] leading-relaxed space-y-5">
              <p>
                Many people avoid counselling because they fear judgment, cold clinical diagnoses, or unsolicited lectures. Oasis was born out of a deep conviction to be the exact opposite.
              </p>
              <p>
                Here, empathy leads. Sessions are structured around psychological safety, deep active listening, and bespoke restorative roadmaps that honor your faith, your emotional reality, and your personal pace.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-[#1A1118]">
                <span className="bg-[#FDF6F8] px-4 py-2 rounded-full border border-[#EDD8E4]">
                  Zero Condemnation
                </span>
                <span className="bg-[#FDF6F8] px-4 py-2 rounded-full border border-[#EDD8E4]">
                  Faith-Sensitive Care
                </span>
                <span className="bg-[#FDF6F8] px-4 py-2 rounded-full border border-[#EDD8E4]">
                  Strict Anonymity
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SPECIALIZED CARE (4 ARCHITECTURAL SILHOUETTES) ───────────────── */}
      <section id="specialized-care" className="py-16 md:py-28 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Eyebrow>Specialized Care</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl text-[#1A1118] mt-2">
            Areas of Focus &amp; Restoration
          </h2>
          <p className="font-sans text-base text-[#7A5C72] mt-4">
            Compassionate, specialized counselling tailored to the delicate complexities of life, marriage, and emotional renewal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPECIALIZED_CARE.map((area, idx) => (
            <TiltCard key={area.title} maxTilt={6}>
              <div
                className={`bg-white border border-[#EDD8E4] hover:border-[#C97A9E] transition-all duration-500 shadow-sm hover:shadow-2xl p-8 md:p-10 flex flex-col justify-between h-full group ${area.silhouette}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#C97A9E] bg-[#FDF6F8] px-3 py-1 rounded-full border border-[#EDD8E4]">
                      {area.category}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#EDD8E4] group-hover:bg-[#C97A9E] transition-colors" />
                  </div>

                  <h3 className="font-display text-2xl md:text-[26px] leading-[1.2] text-[#1A1118] group-hover:text-[#C97A9E] transition-colors mb-4">
                    {area.title}
                  </h3>

                  <p className="font-sans text-sm text-[#7A5C72] leading-relaxed">
                    {area.desc}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-[#EDD8E4]/60 flex items-center justify-between">
                  <span className="font-sans text-[11px] tracking-wider uppercase font-semibold text-[#1A1118] group-hover:text-[#C97A9E] transition-colors">
                    {area.badge}
                  </span>
                  <span className="text-[#C97A9E] group-hover:translate-x-1 transition-transform font-bold">&rarr;</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ── WHAT TO EXPECT: THE 3 PHASES (MIDNIGHT CHOSEN ARCHITECTURE) ──── */}
      <section id="what-to-expect" className="py-24 md:py-36 bg-[#150D13] text-white px-6 md:px-12 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C97A9E]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#E8A0BF] font-bold block mb-3">
              The Journey Through Oasis
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-white">
              What to Expect in a Session
            </h2>
            <p className="font-sans text-base text-white/70 mt-4">
              A transparent, calm three-step rhythm designed so you never feel intimidated or uncertain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {JOURNEY_PHASES.map((phase) => (
              <TiltCard key={phase.step} maxTilt={6}>
                <div
                  className={`bg-[#1E131B] border border-white/10 hover:border-[#E8A0BF]/50 p-8 md:p-12 transition-all duration-500 shadow-2xl flex flex-col justify-between h-full group ${phase.silhouette}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-display text-5xl md:text-6xl text-[#E8A0BF] font-bold">
                        {phase.step}
                      </span>
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-white/70 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        {phase.phase}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl text-white mb-4 group-hover:text-[#E8A0BF] transition-colors">
                      {phase.title}
                    </h3>

                    <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>

                  <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                    <span className="font-sans text-xs tracking-widest uppercase font-semibold text-[#E8A0BF]">
                      Dedicated Care
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#E8A0BF] group-hover:scale-125 transition-transform" />
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* ── LUXURY FINAL CALL-TO-ACTION: OASIS SANCTUARY ─────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#140C12] text-white text-center relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C97A9E]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex justify-center mb-6">
            <FlowerMotif size={68} delay={0.1} ambient={true} />
          </div>

          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-[#E8A0BF] font-sans text-[11px] tracking-[0.25em] uppercase font-bold mb-6">
            Confidential Sanctuary
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-[72px] text-white tracking-tight leading-[0.95]">
            You have carried this <br />
            <span className="italic font-serif font-normal text-[#E8A0BF]">in silence</span> long enough.
          </h2>

          <p className="font-sans text-lg md:text-xl text-white/80 mt-8 leading-relaxed">
            Stepping into Oasis isn&apos;t an admission of weakness &mdash; it is reclaiming the clarity, emotional safety, and compassionate guidance you need to heal and rebuild.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/2347063038670?text=Hello%20Bunmi%20Alabi,%20I%20would%20like%20to%20reserve%20a%20confidential%20counselling%20session%20at%20Oasis."
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs tracking-[0.22em] uppercase bg-[#C97A9E] text-white px-10 py-5 rounded-full hover:bg-white hover:text-[#140C12] transition-all duration-300 font-semibold shadow-2xl shadow-[#C97A9E]/40 hover:scale-105 inline-flex items-center gap-3"
            >
              <span>Reserve Your Confidential Session</span>
              <span className="text-lg">&rarr;</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-sans text-[#E8A0BF]/80">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A0BF]" />
              100% Confidential &amp; Judgment-Free
            </span>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <span>In-Person in Lagos or Virtual Worldwide</span>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <span>Direct Response Within 24 Hours</span>
          </div>
        </div>
      </section>

    </div>
  );
}
