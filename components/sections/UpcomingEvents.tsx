import Link from "next/link";
import Image from "next/image";

const events = [
  {
    title: "Unbroken 2025 — SHERO",
    date: "15 November 2025",
    location: "Lagos, Nigeria",
    desc: "She Rose, She Rebuilt, She Reigns — annual gathering for single mums and mature singles. Marketplace, entertainment, seminar with Bunmi Alabi and LOLO1.",
    href: "/events",
    image: "/IMG_9347_1.jpeg",
    status: "upcoming",
  },
];

export default function UpcomingEvents() {
  if (events.length === 0) {
    return (
      <section className="py-24 bg-cream border-y border-ink/10 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 bg-clay rounded-full animate-pulse" />
          <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold">Upcoming Events</span>
        </div>
        <p className="font-sans text-olive">No upcoming events at the moment — check back soon or join the community.</p>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 bg-cream border-y border-ink/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clay opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-clay"></span>
          </span>
          <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold">Upcoming Events</span>
          <span className="font-sans text-[10px] tracking-widest uppercase text-olive ml-2">Live</span>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <h2 className="font-display text-5xl md:text-6xl leading-none mb-6">
              Upcoming
              <br />
              Events
            </h2>
            <p className="font-sans text-olive max-w-md">Join Bunmi at the next gathering — healing, identity and community, curated with care.</p>
          </div>

          <div className="md:col-span-7">
            {events.map((ev) => (
              <Link key={ev.title} href={ev.href} className="group block bg-white border border-ink/10 overflow-hidden">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="relative aspect-[4/3] md:aspect-square md:col-span-2 overflow-hidden bg-paper">
                    <Image src={ev.image} alt={ev.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                    <span className="absolute top-3 left-3 bg-ink text-cream font-sans text-[10px] tracking-widest uppercase px-3 py-1">Upcoming</span>
                  </div>
                  <div className="p-6 md:p-8 md:col-span-3 flex flex-col justify-center">
                    <h3 className="font-display text-2xl md:text-3xl group-hover:text-clay transition-colors">{ev.title}</h3>
                    <p className="font-sans text-xs tracking-widest uppercase text-olive mt-2">{ev.date} • {ev.location}</p>
                    <p className="font-sans text-sm text-olive mt-4 line-clamp-3">{ev.desc}</p>
                    <span className="font-sans text-xs tracking-widest uppercase text-ink border-b border-ink pb-1 mt-6 inline-block w-fit">View Event →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
