"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Speaker } from "@/data/speakers";

type SpeakerProfileModalProps = {
  speaker: Speaker | null;
  onClose: () => void;
};

export default function SpeakerProfileModal({
  speaker,
  onClose,
}: SpeakerProfileModalProps) {
  // Lock page scroll + close on Escape while open
  useEffect(() => {
    if (!speaker) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [speaker, onClose]);

  return (
    <AnimatePresence>
      {speaker && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#150D13]/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Dialog Capsule */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-3xl bg-white text-[#1A1118] rounded-[36px_16px_36px_16px] shadow-2xl border-2 border-[#EDD8E4] overflow-hidden z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#1A1118]/80 hover:bg-[#C97A9E] text-white flex items-center justify-center transition-colors shadow-md"
            aria-label="Close speaker profile"
          >
            &times;
          </button>

          <div
            className="max-h-[85vh] overflow-y-auto overscroll-contain p-6 sm:p-10"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {/* Header info layout */}
            <div className="grid sm:grid-cols-12 gap-6 sm:gap-8 items-start mb-8 pb-8 border-b border-[#EDD8E4]">
              {/* Speaker Photo */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative aspect-[4/5] w-full max-w-[260px] rounded-t-[100px] rounded-b-[24px] overflow-hidden shadow-xl border-2 border-[#C97A9E]/30 bg-[#150D13]">
                  <Image
                    src={speaker.img}
                    alt={`${speaker.name} — Unbroken Speaker Profile`}
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150D13]/70 via-transparent to-transparent opacity-40" />
                </div>
              </div>

              {/* Speaker Titles & Role */}
              <div className="sm:col-span-7 space-y-3">
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#FDF6F8] border border-[#EDD8E4] text-[#C97A9E] font-sans text-[11px] tracking-[0.2em] uppercase font-bold">
                  {speaker.role}
                </div>

                <h2 className="font-display text-3xl sm:text-4xl text-[#1A1118] leading-tight">
                  {speaker.name}
                </h2>

                <p className="font-sans text-xs sm:text-sm font-semibold text-[#C97A9E] leading-relaxed">
                  {speaker.title}
                </p>

                {speaker.contact && (
                  <div className="pt-2 text-xs font-sans text-[#7A5C72] space-y-1">
                    {speaker.contact.phone && (
                      <p><strong>Phone:</strong> {speaker.contact.phone}</p>
                    )}
                    {speaker.contact.email && (
                      <p><strong>Email:</strong> {speaker.contact.email.join(" • ")}</p>
                    )}
                    {speaker.contact.instagram && (
                      <p><strong>Social:</strong> {speaker.contact.instagram.join(" • ")}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Detailed Bio Content */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-[#7A5C72] leading-relaxed">
              <h3 className="font-display text-xl text-[#1A1118] mb-2">
                Professional Biography
              </h3>
              {speaker.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Footer action */}
            <div className="mt-8 pt-6 border-t border-[#EDD8E4] flex justify-end">
              <button
                onClick={onClose}
                className="font-sans text-xs tracking-[0.2em] uppercase font-bold bg-[#1A1118] text-white px-8 py-3.5 rounded-full hover:bg-[#C97A9E] transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
