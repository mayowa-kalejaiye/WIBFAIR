"use client";

import Image from "next/image";
import { UNBROKEN_EDITIONS } from "@/data/unbroken";

export default function UnbrokenArchive() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="bg-[#1A1118] text-white font-sans text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-bold">
          Heritage Archive
        </span>
        <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C97A9E] font-bold">
          2019 → 2026 · In order
        </span>
      </div>
      <h2 className="font-display text-4xl md:text-5xl text-[#1A1118]">Every Unbroken, in order</h2>
      <p className="font-sans text-sm text-[#7A5C72] mt-3 max-w-2xl">
        Read the flyers — dates, themes, speakers and venues come straight from them. LOLO1 appears on the 2025 SHERO flyer, not 2019.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {UNBROKEN_EDITIONS.map((ed) => (
          <article
            key={ed.year}
            className="group bg-white border border-[#EDD8E4] overflow-hidden hover:border-[#C97A9E] transition-colors"
          >
            <div className="relative aspect-[3/4] bg-[#FDF6F8] overflow-hidden">
              <Image
                src={ed.flyer}
                alt={`Unbroken ${ed.year} — ${ed.theme} flyer`}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 25vw"
                loading="lazy"
              />
              <span
                className={`absolute top-3 left-3 font-sans text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-full ${
                  ed.status === "upcoming" ? "bg-[#C97A9E] text-white" : "bg-[#1A1118]/85 text-white"
                }`}
              >
                {ed.status === "upcoming" ? "Upcoming · 2026" : `Past · ${ed.year}`}
              </span>
            </div>
            <div className="p-5">
              <p className="font-sans text-[11px] tracking-widest uppercase text-[#C97A9E] font-bold">
                Unbroken {ed.year}
              </p>
              <h3 className="font-display text-xl text-[#1A1118] mt-1 leading-tight">{ed.theme}</h3>
              <p className="font-sans text-xs text-[#7A5C72] mt-2">{ed.date}</p>
              <p className="font-sans text-xs text-[#7A5C72] mt-1 line-clamp-2">{ed.venue}</p>
              <div className="mt-3 pt-3 border-t border-[#EDD8E4]/70">
                <p className="font-sans text-[11px] text-[#7A5C72]">
                  <span className="font-semibold text-[#1A1118]">Host:</span> {ed.host}
                </p>
                {ed.speakers.map((s) => (
                  <p key={s.name} className="font-sans text-[11px] text-[#7A5C72] mt-1">
                    <span className="font-semibold text-[#1A1118]">{s.name}</span> — {s.role}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
