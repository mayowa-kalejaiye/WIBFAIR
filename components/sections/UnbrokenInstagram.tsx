import { UNBROKEN_INSTAGRAM } from "@/data/unbroken";

export default function UnbrokenInstagram() {
  return (
    <div className="bg-[#FDF6F8] border border-[#EDD8E4] p-6 md:p-8">
      <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-[#C97A9E] font-bold">
        Instagram — Unbroken moments
      </p>
      <div className="mt-4 space-y-3">
        {UNBROKEN_INSTAGRAM.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 bg-white border border-[#EDD8E4] px-4 py-3 hover:border-[#C97A9E] transition-colors"
          >
            <span className="font-sans text-sm text-[#1A1118] group-hover:text-[#C97A9E]">{l.label}</span>
            <span className="font-sans text-xs text-[#C97A9E] font-bold shrink-0">Instagram →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
