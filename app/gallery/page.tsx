import Gallery from "@/components/gallery/Gallery";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata = {
  title: "Gallery — Bunmi Alabi",
  description: "Photography from Unbroken, Oasis, Just A Chat and Vintage — editorial lightbox.",
};

const ITEMS = [
  { src: "/assets/cultural_festivals.jpg", alt: "Unbroken 2019", caption: "Unbroken 2019" },
  { src: "/assets/Nigerian_fashion_displays.jpg", alt: "Unbroken 2019", caption: "Unbroken 2019" },
  { src: "/assets/Nigerian_market_scenes.jpg", alt: "Unbroken 2019", caption: "Unbroken 2019" },
  { src: "/assets/lagos_nigeria_cityscape.jpg", alt: "Unbroken 2019", caption: "Unbroken 2019" },
  { src: "/assets/african_women_entrepreneurs.jpg", alt: "Vintage", caption: "Vintage" },
  { src: "/assets/grid.jpg", alt: "Vintage", caption: "Vintage" },
];

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <section className="pt-28 md:pt-36 pb-12 max-w-[1600px] mx-auto px-6 md:px-12">
        <Eyebrow>Gallery</Eyebrow>
        <h1 className="font-display text-5xl md:text-6xl mt-4">Photography</h1>
        <p className="font-sans text-olive mt-4 max-w-xl">Responsive, lazy-loaded, lightbox with keyboard and swipe — the same system Vintage and the 2019 Unbroken gallery use.</p>
      </section>
      <section className="pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <Gallery items={ITEMS} />
      </section>
    </div>
  );
}
