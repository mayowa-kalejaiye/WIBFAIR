"use client";

import { useState } from "react";
import Image from "next/image";
import TiltCard from "@/components/motion/TiltCard";
import { SPEAKERS_ROSTER, Speaker } from "@/data/speakers";
import SpeakerProfileModal from "@/components/sections/SpeakerProfileModal";

type SpeakersRosterSectionProps = {
  title?: string;
  subtitle?: string;
};

export default function SpeakersRosterSection({
  title = "Meet the 2026 Speakers",
  subtitle = "Conference Speakers",
}: SpeakersRosterSectionProps) {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <div className="mt-28 pt-16 border-t border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#E8A0BF] font-bold block mb-2">
          {subtitle}
        </span>
        <h3 className="font-display text-4xl md:text-5xl text-white">
          {title}
        </h3>
        <p className="font-sans text-sm text-white/60 mt-3">
          Click on any speaker to view their complete professional biography &amp; achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {SPEAKERS_ROSTER.map((sp) => (
          <TiltCard key={sp.id} maxTilt={6}>
            <div
              onClick={() => setSelectedSpeaker(sp)}
              className="group bg-[#1E131B] border border-white/10 rounded-t-[72px] rounded-b-[20px] overflow-hidden hover:border-[#E8A0BF] transition-all p-3 shadow-xl h-full flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Speaker Photo in Arched Frame */}
                <div className="relative aspect-[4/5] rounded-t-[60px] rounded-b-[16px] overflow-hidden mb-4 bg-[#150D13]">
                  <Image
                    src={sp.img}
                    alt={`${sp.name} — Unbroken Speaker`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150D13]/80 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

                  {/* Hover "Read Profile" Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#150D13]/40 backdrop-blur-[2px]">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-white bg-[#C97A9E] px-4 py-2 rounded-full shadow-lg">
                      Read Profile &rarr;
                    </span>
                  </div>
                </div>

                <div className="px-2">
                  <h4 className="font-display text-lg md:text-xl text-white group-hover:text-[#E8A0BF] transition-colors leading-tight">
                    {sp.name}
                  </h4>
                  <p className="font-sans text-xs text-[#E8A0BF] mt-1 font-semibold">
                    {sp.role}
                  </p>
                </div>
              </div>

              <div className="px-2 pt-3 border-t border-white/10 mt-3 flex items-center justify-between">
                <p className="font-sans text-[11px] text-white/60 line-clamp-1">
                  {sp.subRole}
                </p>
                <span className="font-sans text-[10px] tracking-wider uppercase text-[#E8A0BF] font-bold group-hover:translate-x-0.5 transition-transform shrink-0">
                  Read &rarr;
                </span>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Speaker Profile Modal */}
      <SpeakerProfileModal
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </div>
  );
}
