import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import FlowerMotif from "@/components/motif/FlowerMotif";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Humanitarian Foundation — Bunmi Alabi",
  description: "Bunmi Alabi Humanitarian Foundation (BAHF) — community initiatives, outreach, and practical support for women and vulnerable families.",
};

export default function HumanitarianPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-20 max-w-[1600px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#C97A9E]" />
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#C97A9E] font-semibold">
                BAHF · Compassion in Action
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[84px] leading-[0.9] tracking-tight text-[#1A1118]">
              Bunmi Alabi <br />
              <span className="text-[#C97A9E]">Humanitarian</span> Foundation
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="font-sans text-lg md:text-xl text-[#7A5C72] leading-relaxed mt-6 max-w-xl">
              Rooted in the belief that everyone deserves dignity, care, and opportunity. We walk alongside underprivileged women, single mothers, and vulnerable families through life-changing interventions.
            </p>
          </Reveal>

          <Reveal delay={0.26} className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/connect"
              className="font-sans text-xs tracking-[0.2em] uppercase bg-[#C97A9E] text-white px-8 py-4 hover:bg-[#9B4D77] transition-all font-semibold shadow-md"
            >
              Partner or Donate
            </Link>
            <a
              href="https://chat.whatsapp.com/Ino2Q7J4oJ58hhUjJMAAlf?mode=wwt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs tracking-[0.2em] uppercase text-[#1A1118] border border-[#EDD8E4] px-8 py-4 hover:border-[#C97A9E] transition-colors"
            >
              Join Our Outreach Circle
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <Reveal delay={0.2} className="relative w-full max-w-[460px] aspect-square rounded-2xl bg-[#FDF6F8] p-8 shadow-xl border border-[#EDD8E4] flex items-center justify-center">
            <Image
              src="/IMG_9347_1.jpeg"
              alt="Bunmi Alabi Humanitarian Foundation Official Emblem"
              fill
              priority
              className="object-contain p-6"
            />
          </Reveal>
        </div>
      </section>

      {/* Pillars of BAHF */}
      <section className="py-20 md:py-28 bg-[#FDF6F8] border-y border-[#EDD8E4] px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>Foundation Pillars</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A1118] mt-2">
              Serving with dignity, not spectacle.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Welfare for Single Mums",
                desc: "Immediate relief packages, healthcare support, and emergency grants for widows and single mothers striving to feed and school their children.",
              },
              {
                title: "Skills & Economic Empowerment",
                desc: "Vocational training, business startup seed funding, and marketplace mentorship to move women from dependency to financial self-reliance.",
              },
              {
                title: "Mental Wellness & Healing Outreach",
                desc: "Free group counselling sessions, trauma therapy, and spiritual mentorship organized in grassroots communities across Lagos and beyond.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-white p-8 rounded-lg border border-[#EDD8E4] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#FDF6F8] flex items-center justify-center text-[#C97A9E] mb-6">
                  <FlowerMotif size={24} />
                </div>
                <h3 className="font-display text-2xl text-[#1A1118] mb-3">{pillar.title}</h3>
                <p className="font-sans text-[#7A5C72] text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <Eyebrow>Collaborate With Us</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl text-[#1A1118] mt-4">
            Together, we can rebuild broken lives.
          </h2>
          <p className="font-sans text-lg text-[#7A5C72] mt-6 leading-relaxed">
            Whether you are an individual wanting to sponsor a single mother, an organization seeking a transparent humanitarian partner, or a volunteer offering time and skills — we welcome you with open arms.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/connect"
              className="font-sans text-xs tracking-[0.2em] uppercase bg-[#1A1118] text-white px-8 py-4 hover:bg-[#C97A9E] transition-colors font-semibold"
            >
              Contact Foundation Office
            </Link>
            <a
              href="mailto:unbrokenladies@gmail.com"
              className="font-sans text-xs tracking-[0.2em] uppercase border border-[#EDD8E4] px-8 py-4 hover:border-[#C97A9E] transition-colors"
            >
              Email Us: unbrokenladies@gmail.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
