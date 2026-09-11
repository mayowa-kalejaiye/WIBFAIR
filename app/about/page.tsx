import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import FlowerMotif from "@/components/motif/FlowerMotif";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "About Bunmi — Bunmi Alabi",
  description: "Professional Counsellor, Mental Health Counsellor, Author of Couples' Waiting Room, Humanitarian and President, Unbroken Ladies Community.",
};

const CREDENTIALS = [
  "Professional Counsellor",
  "Mental Health Counsellor",
  "Author of Couples’ Waiting Room",
  "President, Unbroken Ladies Community",
  "Convener, BAHF Humanitarian Foundation",
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* ── HERO: EDITORIAL PORTRAIT ──────────────────────────────────────── */}
      <section className="pt-36 md:pt-44 pb-20 max-w-[1600px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <FlowerMotif size={68} delay={0.2} ambient={true} />
              <span className="w-10 h-px bg-[#C97A9E]" />
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#C97A9E] font-semibold">
                About Bunmi Alabi
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[96px] leading-[0.88] tracking-tight text-[#1A1118]">
              A life poured into <br />
              <span className="text-[#C97A9E]">healing & wholeness.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="font-sans text-lg md:text-xl text-[#7A5C72] leading-relaxed mt-6 max-w-xl">
              Wife. Mother. Author. Professional Counsellor. President of Unbroken Ladies Community. Bunmi Alabi brings deep warmth, spiritual grounding, and practical wisdom to every life she touches.
            </p>
          </Reveal>

          <Reveal delay={0.26} className="mt-8 flex flex-wrap gap-2">
            {CREDENTIALS.map((cred) => (
              <span
                key={cred}
                className="font-sans text-[11px] tracking-widest uppercase bg-[#FDF6F8] text-[#1A1118] border border-[#EDD8E4] px-4 py-2 rounded-full font-medium"
              >
                {cred}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.32} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/counseling"
              className="font-sans text-xs tracking-[0.2em] uppercase bg-[#C97A9E] text-white px-8 py-4 hover:bg-[#9B4D77] transition-all font-semibold rounded shadow-md"
            >
              Book a Counselling Session
            </Link>
            <Link
              href="/unbroken"
              className="font-sans text-xs tracking-[0.2em] uppercase text-[#1A1118] border border-[#EDD8E4] px-8 py-4 hover:border-[#C97A9E] hover:text-[#C97A9E] transition-colors bg-white rounded"
            >
              Explore Unbroken Community
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative">
          <Reveal delay={0.2} className="relative aspect-[3/4] max-w-[500px] ml-auto overflow-hidden rounded-lg shadow-2xl border border-[#EDD8E4]">
            <Image
              src="/IMG_9475.JPG.jpeg"
              alt="Bunmi Alabi Portrait"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </Reveal>
        </div>
      </section>

      {/* ── BIOGRAPHY BODY: ELEVATED EDITORIAL SPREAD ──────────────────────── */}
      <section className="py-24 md:py-36 bg-[#FDF6F8] border-y border-[#EDD8E4] px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Sticky Left Column: Portrait & Key Details */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <Eyebrow>Biography</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1A1118] leading-[0.95] tracking-tight">
              Her story, <br />
              <span className="text-[#C97A9E] italic">her calling.</span>
            </h2>
            
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-2xl border border-[#EDD8E4] group">
              <Image
                src="/IMG_9472.JPG.jpeg"
                alt="Bunmi Alabi — Biography Portrait"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1118]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-display text-2xl">Bunmi Alabi</p>
                <p className="hidden sm:block font-sans text-xs tracking-widest uppercase text-[#E8A0BF]">
                  Lagos, Nigeria &middot; Global Calling
                </p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg border border-[#EDD8E4] shadow-sm">
              <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-[#C97A9E] font-semibold mb-2">
                Core Conviction
              </p>
              <p className="font-display italic text-lg text-[#1A1118]">
                &ldquo;Brokenness is never the final sentence of your life — it is merely where the rebuilding begins.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Chapters */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Chapter 01: The Foundation */}
            <div className="relative pl-6 sm:pl-10 border-l-2 border-[#C97A9E]">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C97A9E] font-bold block mb-2">
                01 · The Calling
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-[#1A1118] mb-4">
                A Life Rooted in Restorative Grace
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#3D2B3D] leading-[1.85]">
                Bunmi Alabi is a seasoned <strong>Mental Health Counsellor</strong>, <strong>Author</strong>, and <strong>Humanitarian</strong> whose compassionate voice has transformed thousands of women and families across Nigeria and the global diaspora. Grounded in deep Christian faith and clinical acumen, her life&apos;s mission is dedicated to the courageous work of emotional restoration — showing people that their deepest wounds can become their greatest platforms for growth.
              </p>
            </div>

            {/* Chapter 02: Oasis Counselling */}
            <div className="relative pl-6 sm:pl-10 border-l-2 border-[#EDD8E4] hover:border-[#C97A9E] transition-colors">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C97A9E] font-bold block mb-2">
                02 · The Sanctuary
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-[#1A1118] mb-4">
                Oasis: A Confidential Havens of Hope
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#3D2B3D] leading-[1.85]">
                Driven by an unshakeable conviction that no story is beyond redemption, Bunmi established <strong>Oasis Counselling</strong>. Designed not as a clinical institution, but as a safe, warm, and discreet haven, Oasis provides trauma-informed therapy and empathetic guidance. Here, single mothers carrying heavy silent loads, mature singles seeking clarity, and couples navigating complex marital crises find the stillness, dignity, and tools required to heal.
              </p>
            </div>

            {/* Chapter 03: The Written Word */}
            <div className="relative pl-6 sm:pl-10 border-l-2 border-[#EDD8E4] hover:border-[#C97A9E] transition-colors">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C97A9E] font-bold block mb-2">
                03 · The Literature
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-[#1A1118] mb-4">
                Couples&apos; Waiting Room: From Brokenness to Healing
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#3D2B3D] leading-[1.85]">
                As Author of the acclaimed book <em>Couples&apos; Waiting Room: From Brokenness to Healing</em>, Bunmi writes with breathtaking vulnerability and practical wisdom. She addresses the silent agonies that many church and cultural circles overlook — delayed marriage, reproductive grief, unfulfilled expectations, and the quiet spiritual weariness of waiting — lighting a lantern for anyone walking through prolonged seasons of uncertainty.
              </p>
            </div>

            {/* Chapter 04: The Community */}
            <div className="relative pl-6 sm:pl-10 border-l-2 border-[#EDD8E4] hover:border-[#C97A9E] transition-colors">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C97A9E] font-bold block mb-2">
                04 · The Movement
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-[#1A1118] mb-4">
                Unbroken: Building Wholeness Across Nations
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#3D2B3D] leading-[1.85]">
                As President and Convener of the <strong>Unbroken Ladies Community</strong>, Bunmi stewards an expansive sisterhood. Through flagship annual conferences, hands-on entrepreneurial marketplaces, welfare initiatives, and an active year-round WhatsApp sisterhood, Unbroken empowers women to shed societal shame, discover God-given identity, and reign with authority and resilience.
              </p>
            </div>

            {/* Chapter 05: Just A Chat */}
            <div className="relative pl-6 sm:pl-10 border-l-2 border-[#EDD8E4] hover:border-[#C97A9E] transition-colors">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C97A9E] font-bold block mb-2">
                05 · The Open Living Room
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-[#1A1118] mb-4">
                Just A Chat: Honest Conversations Without Masks
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#3D2B3D] leading-[1.85]">
                Through <strong>Just A Chat</strong>, her bi-weekly video podcast on YouTube, Bunmi opens her living room to unscripted, unfiltered conversations. Tackling the real complexities of modern marriage, blended family dynamics, mental well-being, and authentic faith, she creates a space where nothing is taboo, proving time and again that honest dialogue is the first true step toward lasting restoration.
              </p>
            </div>

            {/* Direct Connect Action Strip */}
            <div className="pt-8 border-t border-[#EDD8E4] flex flex-wrap gap-4">
              <Link
                href="/counseling"
                className="font-sans text-xs tracking-[0.2em] uppercase bg-[#C97A9E] text-white px-8 py-4 rounded font-semibold hover:bg-[#9B4D77] transition-all shadow-sm"
              >
                Book with Bunmi at Oasis →
              </Link>
              <Link
                href="/unbroken"
                className="font-sans text-xs tracking-[0.2em] uppercase bg-white text-[#1A1118] border border-[#EDD8E4] px-8 py-4 rounded font-semibold hover:border-[#C97A9E] transition-colors"
              >
                Join Unbroken Community
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ── THE UMBRELLA ARMS ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Eyebrow>The Umbrella</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-[#1A1118] mt-2">
            One Calling, Multiple Expressions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-lg border border-[#EDD8E4] shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] rounded overflow-hidden mb-6">
                <Image src="/IMG_9476.JPG.jpeg" alt="Oasis Counselling" fill className="object-cover object-top" />
              </div>
              <p className="font-sans text-xs tracking-widest uppercase text-[#C97A9E] font-semibold mb-2">01 — Sanctuary</p>
              <h3 className="font-display text-2xl text-[#1A1118]">Oasis Counselling</h3>
              <p className="font-sans text-sm text-[#7A5C72] mt-3 leading-relaxed">
                Confidential in-person and virtual therapy sessions designed for emotional renewal, trauma recovery, and identity discovery.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/counseling" className="font-sans text-xs tracking-widest uppercase text-[#C97A9E] font-semibold border-b border-[#C97A9E] pb-1">
                Learn about Oasis →
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-[#EDD8E4] shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] rounded overflow-hidden mb-6">
                <Image src="/IMG_8906.jpg" alt="Unbroken Community" fill className="object-cover" />
              </div>
              <p className="font-sans text-xs tracking-widest uppercase text-[#C97A9E] font-semibold mb-2">02 — Sisterhood</p>
              <h3 className="font-display text-2xl text-[#1A1118]">Unbroken Community</h3>
              <p className="font-sans text-sm text-[#7A5C72] mt-3 leading-relaxed">
                Empowering single mothers and mature singles through sisterhood, annual conferences, marketplace exhibitions, and daily fellowship.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/unbroken" className="font-sans text-xs tracking-widest uppercase text-[#C97A9E] font-semibold border-b border-[#C97A9E] pb-1">
                Explore Unbroken →
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-[#EDD8E4] shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] rounded overflow-hidden mb-6">
                <Image src="/thumb6.jpg" alt="Just A Chat Podcast" fill className="object-cover" />
              </div>
              <p className="font-sans text-xs tracking-widest uppercase text-[#C97A9E] font-semibold mb-2">03 — Media</p>
              <h3 className="font-display text-2xl text-[#1A1118]">Just A Chat Podcast</h3>
              <p className="font-sans text-sm text-[#7A5C72] mt-3 leading-relaxed">
                Bi-weekly video conversations exploring faith, love, parenting, and real-life vulnerability broadcast on YouTube.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/just-a-chat" className="font-sans text-xs tracking-widest uppercase text-[#C97A9E] font-semibold border-b border-[#C97A9E] pb-1">
                Watch Episodes →
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
