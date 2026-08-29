import Link from "next/link";

const products = [
  {
    title: "Couples' Waiting Room",
    type: "Book",
    description: "A practical guide for couples navigating infertility — physically, spiritually, medically and mentally. Testimonies + fertility options.",
    image: "/assets/Nigerian_market_scenes.jpg",
    badge: "Best Seller",
    href: "https://selar.com/m/BunmiAlabi",
  },
  {
    title: "Healing Workbook",
    type: "Ebook",
    description: "A guided journal from Oasis Counseling to process emotions and chart your healing journey.",
    image: "/assets/african_women_entrepreneurs.jpg",
    badge: "New",
    href: "https://selar.com/m/BunmiAlabi",
  },
  {
    title: "Unbroken Online Course",
    type: "Course",
    description: "Self-paced video on identity, healing and purposeful living — companion to Unbroken 2025 SHERO.",
    image: "/assets/cultural_festivals.jpg",
    badge: "Coming Soon",
    href: "/events",
  },
];

export default function StorePage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-ink text-cream pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold">Store</span>
          <h1 className="font-display text-7xl md:text-[110px] leading-[0.85] tracking-tight mt-4 mb-6">
            Resources to <span className="text-clay">rise.</span>
          </h1>
          <p className="font-sans text-xl text-paper/70 max-w-xl">Books and courses crafted at Oasis Counseling and Unbroken — for your journey of healing.</p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target={p.href.startsWith("/") ? undefined : "_blank"}
              className="group block bg-white border border-ink/10 overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-clay font-semibold">{p.type}</span>
                  <span className={`font-sans text-[10px] tracking-widest uppercase px-2 py-1 border ${p.badge === "Coming Soon" ? "bg-cream text-olive border-ink/10" : "bg-ink text-cream border-ink"}`}>{p.badge}</span>
                </div>
                <h3 className="font-display text-2xl mb-2 group-hover:text-clay transition-colors">{p.title}</h3>
                <p className="font-sans text-sm text-olive line-clamp-3">{p.description}</p>
                <span className="font-sans text-xs tracking-widest uppercase border-b border-ink pb-1 mt-4 inline-block">{p.badge === "Coming Soon" ? "Coming Soon" : "Get it →"}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 p-8 bg-paper border border-ink/10 text-center">
          <p className="font-sans text-olive">Payment via <span className="font-semibold text-ink">Paystack / Selar</span> — shop at <a href="https://selar.com/m/BunmiAlabi" target="_blank" className="text-clay underline">selar.com/m/BunmiAlabi</a></p>
          <a href="mailto:unbrokenladies@gmail.com" className="inline-block mt-4 bg-ink text-cream font-sans text-xs tracking-widest uppercase px-8 py-3">Contact to Order</a>
        </div>
      </section>
    </div>
  );
}
