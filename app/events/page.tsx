import Link from "next/link";

export const dynamic = "force-dynamic";

export default function EventsPage() {
  const events = [
    {
      title: "Unbroken 2025 — SHERO",
      date: "15 November 2025",
      location: "Lagos, Nigeria",
      description:
        "The annual women's empowerment conference hosted by Bunmi Alabi. A day of healing, connection, inspiration, and transformation. This year's theme SHERO — She Rose, She Rebuilt, She Reigns — celebrates resilience with speakers Bunmi Alabi and Omotunde Adebowale David (LOLO1), plus marketplace, entertainment and seminars.",
      status: "upcoming",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Dark Editorial Hero — matches /just-a-chat */}
      <section className="bg-ink text-cream pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold block mb-8">
            Gatherings
          </span>
          <h1 className="font-display text-7xl md:text-[130px] leading-[0.85] tracking-tight mb-8">
            Events
          </h1>
          <p className="font-sans text-xl md:text-2xl text-paper/70 max-w-xl">
            Transformative gatherings for healing, identity and community — curated by Bunmi Alabi.
          </p>
        </div>
      </section>

      {/* Archive — matches Stories / About */}
      <section className="bg-cream py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-16 border-b border-ink/10 pb-6">
            <h2 className="font-display text-4xl md:text-5xl">Upcoming</h2>
            <span className="font-sans text-xs tracking-widest uppercase text-olive">
              Lagos • November
            </span>
          </div>

          {events.map((event: any) => (
            <div
              key={event.title}
              className="bg-white border border-ink/10 overflow-hidden mb-12"
            >
              <div className="h-1 bg-clay" />
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div>
                    <span
                      className={`font-sans text-[10px] tracking-widest uppercase px-3 py-1 border ${
                        event.status === "upcoming"
                          ? "bg-paper text-ink border-ink/10"
                          : "bg-cream text-olive border-ink/10"
                      }`}
                    >
                      {event.status}
                    </span>
                    <h3 className="font-display text-4xl md:text-5xl mt-4">{event.title}</h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mb-6 font-sans text-sm text-olive">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-clay rounded-full" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-ink rounded-full" />
                    {event.location}
                  </span>
                </div>

                <p className="font-sans text-olive text-lg leading-relaxed max-w-3xl mb-10">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/2347063038670"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-ink text-cream font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-ink/90 transition-colors"
                  >
                    Register Interest
                  </a>
                  <a
                    href="mailto:unbrokenladies@gmail.com"
                    className="border border-ink/20 font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-paper transition-colors"
                  >
                    Get Notified
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-16 p-8 bg-paper border border-ink/10">
            <p className="font-sans text-olive">
              More details via{" "}
              <a href="https://www.instagram.com/unbrokenladies" target="_blank" rel="noopener noreferrer" className="text-ink font-semibold border-b border-ink hover:text-clay hover:border-clay">
                @unbrokenladies
              </a>{" "}
              or{" "}
              <a href="mailto:unbrokenladies@gmail.com" className="text-ink font-semibold border-b border-ink hover:text-clay hover:border-clay">
                join the mailing list
              </a>
              .
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/stories/unbroken-she-rose-she-rebuilt-she-reigns" className="font-sans text-xs tracking-widest uppercase text-clay hover:text-ink border-b border-clay pb-1">
              Read Unbroken story →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
