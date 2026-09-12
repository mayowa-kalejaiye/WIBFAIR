import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import FlowerMotif from "@/components/motif/FlowerMotif";
import SpinningSeal from "@/components/motion/SpinningSeal";
import TiltCard from "@/components/motion/TiltCard";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Connect & Inquiries â€” Bunmi Alabi",
  description: "Direct communication pathways for Oasis Counselling, Unbroken sponsorship, keynote speaking invitations, and official media inquiries.",
};

export default function ConnectPage() {
  return (
    <div className="bg-[#FCFAF8] text-[#1A1118] min-h-screen pt-36 md:pt-44 pb-32 overflow-hidden relative">
      
      {/* Ambient atmospheric aura */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#E8A0BF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-[#C97A9E]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* â”€â”€ HEADER: SCULPTED SANCTUARY INVITATION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          
          <div className="flex justify-center mb-8">
            <SpinningSeal
              text="BUNMI ALABI â€¢ CONVERSATIONS WORTH HAVING â€¢ CONNECT â€¢"
              size={140}
              flowerSize={46}
            />
          </div>

          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#EDD8E4] shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C97A9E]" />
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#7A5C72] font-semibold">
                Direct Channels Â· Lagos & Global
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[92px] leading-[0.9] tracking-tight text-[#1A1118]">
              Let us begin <br />
              <span className="italic font-normal text-[#C97A9E]">a conversation.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-lg sm:text-xl text-[#7A5C72] mt-6 leading-relaxed max-w-xl mx-auto">
              Every message is received with dignity and care. Select the direct pathway tailored to what you need today.
            </p>
          </Reveal>

        </div>

        {/* â”€â”€ THREE ARCHITECTURAL PORTALS (NO BORING RECTANGLES) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
            Portal 1: Cathedral Archway (Oasis Counselling)
            Portal 2: Asymmetric Sisterhood Frame (Unbroken & 2026 Conference)
            Portal 3: Refined Executive Stationery Capsule (Media & Speaking)
        â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 items-stretch mb-24">
          
          {/* â”€â”€ PORTAL 01: OASIS COUNSELLING SANCTUARY â”€â”€ */}
          <TiltCard maxTilt={7} className="h-full">
            <div className="h-full flex flex-col justify-between rounded-t-[140px] rounded-b-[28px] bg-gradient-to-b from-[#FDF6F8] via-white to-[#FDF6F8] p-8 lg:p-10 border-2 border-white shadow-xl shadow-[#C97A9E]/10 relative overflow-hidden group">
              
              {/* Subtle top light aura */}
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#E8A0BF]/20 to-transparent pointer-events-none" />

              <div className="relative z-10 text-center flex flex-col items-center">
                {/* Botanical Blossom Crown */}
                <div className="mb-6">
                  <FlowerMotif size={64} ambient={true} interactive={true} />
                </div>

                <span className="font-sans text-[10px] tracking-[0.25em] uppercase px-3.5 py-1 rounded-full bg-white border border-[#EDD8E4] text-[#C97A9E] font-semibold mb-4">
                  01 Â· Private Therapy
                </span>

                <h3 className="font-display text-3xl sm:text-4xl text-[#1A1118] tracking-tight mb-3">
                  Oasis Sanctuary
                </h3>

                <p className="font-sans text-sm text-[#7A5C72] leading-relaxed mb-6">
                  Confidential, unhurried therapy with Bunmi Alabi. For single mothers, marital reconciliation, reproductive grief, and deep personal restoration.
                </p>

                <div className="w-full pt-4 border-t border-[#EDD8E4]/60 space-y-2 text-xs font-sans text-[#7A5C72]">
                  <p className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C97A9E]" />
                    <span>In-person in Lagos Â· Virtual worldwide</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 text-[11px] text-[#C97A9E] font-medium">
                    <span>Direct WhatsApp reservation</span>
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-[#EDD8E4]/60 text-center">
                <a
                  href="https://wa.me/2347063038670?text=Hello%20Bunmi%20Alabi,%20I%20am%20reaching%20out%20to%20reserve%20a%20private%20counselling%20session%20at%20Oasis."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block font-sans text-xs tracking-[0.2em] uppercase bg-[#C97A9E] text-white py-4 rounded-full hover:bg-[#9B4D77] transition-all font-semibold shadow-md shadow-[#C97A9E]/20"
                >
                  Reserve on WhatsApp â†’
                </a>
                <p className="font-sans text-[11px] text-[#7A5C72]/70 mt-2">
                  Response within 24 hours
                </p>
              </div>

            </div>
          </TiltCard>

          {/* â”€â”€ PORTAL 02: UNBROKEN COMMUNITY & 2026 CONFERENCE â”€â”€ */}
          <TiltCard maxTilt={7} className="h-full">
            <div className="h-full flex flex-col justify-between rounded-[56px_20px_56px_20px] bg-gradient-to-br from-[#FAF7F9] via-white to-[#FDF6F8] p-8 lg:p-10 border-2 border-white shadow-xl shadow-[#1A1118]/5 relative overflow-hidden group">
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Embedded Unbroken Crest Medal */}
                <div className="relative w-16 h-16 mb-6 p-2 rounded-full bg-white shadow-md border border-[#EDD8E4]">
                  <Image
                    src="/IMG_9362.PNG"
                    alt="Unbroken Ladies Community Emblem"
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <span className="font-sans text-[10px] tracking-[0.25em] uppercase px-3.5 py-1 rounded-full bg-white border border-[#EDD8E4] text-[#C97A9E] font-semibold mb-4">
                  02 Â· Sisterhood & Events
                </span>

                <h3 className="font-display text-3xl sm:text-4xl text-[#1A1118] tracking-tight mb-3">
                  Unbroken Community
                </h3>

                <p className="font-sans text-sm text-[#7A5C72] leading-relaxed mb-6">
                  Inquiries for <strong>Unbroken 2026: Becoming</strong> (31st Oct, Lagos), conference sponsorship, marketplace vendor stalls, or joining the WhatsApp sisterhood.
                </p>

                {/* Hotlines */}
                <div className="w-full pt-4 border-t border-[#EDD8E4]/60 space-y-2 text-xs font-sans">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[#EDD8E4]/60">
                    <span className="text-[#7A5C72]">Tosin (Sponsorship):</span>
                    <a href="tel:08035637325" className="font-semibold text-[#1A1118] hover:text-[#C97A9E]">
                      08035637325
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[#EDD8E4]/60">
                    <span className="text-[#7A5C72]">Tobi (Registration):</span>
                    <a href="tel:09011782190" className="font-semibold text-[#1A1118] hover:text-[#C97A9E]">
                      09011782190
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-[#EDD8E4]/60 text-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe0f9JsVvNl0-mFZy9IgqRzoDlSL1vm0ETGJIzoFZnQSrDW_Q/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block font-sans text-xs tracking-[0.2em] uppercase bg-[#1A1118] text-white py-4 rounded-full hover:bg-[#C97A9E] transition-all font-semibold shadow-md"
                >
                  Register Free on Bitly â†’
                </a>
                <p className="font-sans text-[11px] text-[#7A5C72]/70 mt-2">
                  Dresscode: All Shades of Pink
                </p>
              </div>

            </div>
          </TiltCard>

          {/* â”€â”€ PORTAL 03: SPEAKING, MEDIA & BAHF FOUNDATION â”€â”€ */}
          <TiltCard maxTilt={7} className="h-full">
            <div className="h-full flex flex-col justify-between rounded-[24px_56px_24px_56px] bg-gradient-to-bl from-[#FDF6F8] via-white to-[#FAF7F9] p-8 lg:p-10 border-2 border-white shadow-xl shadow-[#C97A9E]/10 relative overflow-hidden group">
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Embedded BAHF Foundation Crest */}
                <div className="relative w-16 h-16 mb-6 p-2 rounded-full bg-white shadow-md border border-[#EDD8E4]">
                  <Image
                    src="/IMG_9347_1.jpeg"
                    alt="Bunmi Alabi Humanitarian Foundation Crest"
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <span className="font-sans text-[10px] tracking-[0.25em] uppercase px-3.5 py-1 rounded-full bg-white border border-[#EDD8E4] text-[#C97A9E] font-semibold mb-4">
                  03 Â· Media & Speaking
                </span>

                <h3 className="font-display text-3xl sm:text-4xl text-[#1A1118] tracking-tight mb-3">
                  Executive Office
                </h3>

                <p className="font-sans text-sm text-[#7A5C72] leading-relaxed mb-6">
                  Keynote speaking invitations, podcast collaborations on Just A Chat, press inquiries, and partner donations for the Bunmi Alabi Humanitarian Foundation.
                </p>

                <div className="w-full pt-4 border-t border-[#EDD8E4]/60 space-y-2 text-xs font-sans text-[#7A5C72]">
                  <p className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C97A9E]" />
                    <span>Keynote Invitations & Summits</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C97A9E]" />
                    <span>Humanitarian Partnerships</span>
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-[#EDD8E4]/60 text-center">
                <a
                  href="mailto:unbrokenladies@gmail.com"
                  className="w-full block font-sans text-xs tracking-[0.2em] uppercase border-2 border-[#1A1118] text-[#1A1118] py-3.5 rounded-full hover:bg-[#1A1118] hover:text-white transition-all font-semibold"
                >
                  Email Executive Office â†’
                </a>
                <p className="font-sans text-[11px] text-[#7A5C72]/70 mt-2">
                  unbrokenladies@gmail.com
                </p>
              </div>

            </div>
          </TiltCard>

        </div>

        {/* â”€â”€ SOCIAL NETWORK & SISTERHOOD BAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="py-12 border-t border-[#EDD8E4] flex flex-wrap items-center justify-between gap-6">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#7A5C72] font-semibold">
            Official Channels:
          </p>
          <div className="flex flex-wrap items-center gap-8 font-sans text-xs tracking-wider uppercase font-medium">
            <a
              href="https://www.youtube.com/@bunmialabi7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1118] hover:text-[#C97A9E] transition-colors flex items-center gap-2"
            >
              <span>YouTube Channel</span>
              <span className="text-[#C97A9E]">â†—</span>
            </a>
            <a
              href="https://www.instagram.com/Bunmi.Tomialabi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1118] hover:text-[#C97A9E] transition-colors flex items-center gap-2"
            >
              <span>Instagram</span>
              <span className="text-[#C97A9E]">â†—</span>
            </a>
            <a
              href="https://chat.whatsapp.com/JfVWDOML1iF0UDvrDXNnC1?s=sw&p=i&mlu=4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1118] hover:text-[#C97A9E] transition-colors flex items-center gap-2"
            >
              <span>WhatsApp Sisterhood</span>
              <span className="text-[#C97A9E]">â†—</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
