"use client";

import { UNBROKEN_MERCH } from "@/data/unbroken";

export default function UnbrokenMerch({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`bg-white border border-[#EDD8E4] ${compact ? "p-6" : "p-8 md:p-10"} shadow-sm`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#C97A9E] animate-pulse" />
        <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-[#C97A9E] font-bold">
          Outfit Sales — Unbroken 2026
        </p>
      </div>
      <h3 className={`font-display ${compact ? "text-2xl" : "text-3xl md:text-4xl"} text-[#1A1118]`}>
        {UNBROKEN_MERCH.title}
      </h3>
      <p className="font-sans text-sm text-[#7A5C72] mt-2 font-semibold">{UNBROKEN_MERCH.note}</p>

      <div className="mt-5 grid sm:grid-cols-3 gap-3">
        {UNBROKEN_MERCH.items.map((item) => (
          <div key={item.name} className="bg-[#FDF6F8] border border-[#EDD8E4] p-4 text-center">
            <p className="font-sans text-sm font-semibold text-[#1A1118]">{item.name}</p>
            <p className="font-display text-xl text-[#C97A9E] mt-1">{item.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 bg-[#1A1118] text-white p-5 rounded-2xl">
        <p className="font-sans text-xs tracking-widest uppercase text-[#E8A0BF] font-bold">Payment details</p>
        <p className="font-sans text-sm mt-2">
          {UNBROKEN_MERCH.bank} — <span className="font-bold tracking-wider">{UNBROKEN_MERCH.account}</span>
          <br />
          {UNBROKEN_MERCH.name}
        </p>
        <p className="font-sans text-xs text-white/70 mt-2">({UNBROKEN_MERCH.instruction})</p>
      </div>

      <a
        href={UNBROKEN_MERCH.source}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex mt-5 font-sans text-xs tracking-[0.2em] uppercase font-bold text-[#C97A9E] border-b border-[#C97A9E] pb-1 hover:text-[#9B4D77]"
      >
        View sale post on Instagram →
      </a>
    </div>
  );
}
