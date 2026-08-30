import Link from "next/link";

const services = [
  {
    title: "Individual Sessions",
    desc: "One-on-one private counseling tailored to your situation — a safe, judgment-free space to process and chart your path forward. Oasis Counseling, Lagos & virtual.",
  },
  {
    title: "Group Workshops",
    desc: "Community healing where women support each other through shared experiences, guided by Bunmi’s facilitation from Unbroken.",
  },
  {
    title: "Speaking Engagements",
    desc: "Talks for events, corporate wellness, churches and schools on mental health, identity and empowerment.",
  },
];

export default function CounselingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-ink text-cream pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold">Oasis Counseling</span>
          <h1 className="font-display text-7xl md:text-[110px] leading-[0.85] tracking-tight mt-4 mb-6">
            You don’t have to <span className="text-clay">heal alone.</span>
          </h1>
          <p className="font-sans text-xl text-paper/70 max-w-xl">Professional, compassionate counseling to help you rebuild, rise and reign — in-person and virtually.</p>
          <div className="mt-8 flex gap-4">
            <a href="https://wa.me/2347063038670?text=Hi%20Bunmi,%20I%20would%20like%20to%20book%20a%20counseling%20session" target="_blank" className="bg-paper text-ink font-sans text-xs tracking-widest uppercase px-8 py-4">Book a Session</a>
            <Link href="/about" className="border border-paper/30 text-paper font-sans text-xs tracking-widest uppercase px-8 py-4">About Bunmi</Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between mb-12 border-b border-ink/10 pb-6">
          <h2 className="font-display text-4xl">Services</h2>
          <span className="font-sans text-xs tracking-widest uppercase text-olive">Lagos • Virtual</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s: any) => (
            <div key={s.title} className="bg-white border border-ink/10 p-8">
              <h3 className="font-display text-2xl mb-3">{s.title}</h3>
              <p className="font-sans text-sm text-olive leading-relaxed mb-6">{s.desc}</p>
              <a href="https://wa.me/2347063038670" target="_blank" className="font-sans text-xs tracking-widest uppercase text-clay border-b border-clay pb-1">Book →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-cream py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-4">Ready to take the first step?</h2>
          <p className="font-sans text-paper/70 mb-8">Reach out via WhatsApp or email — first session within 24 hours.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/2347063038670" target="_blank" className="bg-paper text-ink font-sans text-xs tracking-widest uppercase px-8 py-4">Chat on WhatsApp</a>
            <a href="mailto:unbrokenladies@gmail.com" className="border border-paper/30 text-paper font-sans text-xs tracking-widest uppercase px-8 py-4">Send Email</a>
          </div>
        </div>
      </section>
    </div>
  );
}
