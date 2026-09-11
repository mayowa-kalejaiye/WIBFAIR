import Eyebrow from "@/components/ui/Eyebrow";
import FlowerMotif from "@/components/motif/FlowerMotif";
import Reveal from "@/components/motion/Reveal";
import Gallery from "@/components/gallery/Gallery";

export const metadata = {
  title: "Vintage — Bunmi Alabi",
  description: "Personal archive — memories, photographs and cultural moments preserved before history disappears.",
};

const ITEMS = [
  { src: "/IMG_9474.JPG.jpeg", alt: "Bunmi Alabi — Portrait", caption: "Personal Archive" },
  { src: "/IMG_8906.jpg", alt: "Unbroken Sisterhood Team", caption: "Community Gathering" },
  { src: "/assets/african_women_entrepreneurs.jpg", alt: "Women Entrepreneurs", caption: "Archive • Lagos" },
  { src: "/assets/Nigerian_fashion_displays.jpg", alt: "Fashion Display", caption: "Fashion Archive" },
  { src: "/assets/Nigerian_market_scenes.jpg", alt: "Market Scene", caption: "Balogun Market" },
  { src: "/assets/African_crafts.jpg", alt: "Crafts", caption: "Cultural Crafts" },
  { src: "/assets/lagos_nigeria_cityscape.jpg", alt: "Lagos Cityscape", caption: "Lagos Heritage" },
  { src: "/assets/cultural_festivals.jpg", alt: "Festivals", caption: "Cultural Festivals" },
  { src: "/new-assets/whatsapp-2025-10-06-11-31-05_743fdd0e.jpg", alt: "Personal Memory", caption: "Personal Memory" },
  { src: "/IMG_9475.JPG.jpeg", alt: "Bunmi Alabi", caption: "Bunmi — Archive Portrait" },
];

export default function VintagePage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-36 md:pt-44 pb-12 max-w-[1600px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <FlowerMotif size={64} ambient={true} />
              <span className="w-8 h-px bg-[#C97A9E]" />
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#C97A9E] font-semibold">
                Memory & Heritage
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[88px] leading-[0.92] tracking-tight text-[#1A1118]">
              Personal archive. <br />
              <span className="text-[#C97A9E]">Moments kept.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="font-sans text-lg text-[#7A5C72] leading-relaxed mt-6 max-w-xl">
              Not a commercial storefront — a living archive. Photographs, material heritage, and cherished memories preserved before time fades them. In the spirit of Vintage Africana.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between border-y border-[#EDD8E4] py-4 mb-8">
          <span className="font-sans text-xs tracking-widest uppercase text-[#C97A9E] font-semibold">
            {ITEMS.length} Archived Photographs
          </span>
          <span className="font-sans text-xs text-[#7A5C72]">Tap to view in high resolution</span>
        </div>
        <Gallery items={ITEMS} />
      </section>

      <section className="py-16 bg-[#FDF6F8] border-y border-[#EDD8E4] px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Vintage Africana</Eyebrow>
          <p className="font-sans text-[#7A5C72] text-lg mt-3">
            This personal archive shares the same heartbeat as Vintage Africana — celebrating African cultural heritage and narrative preservation.
          </p>
        </div>
      </section>
    </div>
  );
}
