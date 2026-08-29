import { prisma } from "@/lib/db";
import { PROJECTS as FALLBACK } from "@/data/projects";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  let projects: any[] = [];
  try {
    projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });
  } catch {}
  if (projects.length === 0) projects = FALLBACK as any;

  const projects2010s = projects.filter((p: any) => p.year === "2010s");
  const projects2020s = projects.filter((p: any) => p.year.includes("2020") || p.year.includes("2024") || p.year.includes("Present"));

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <div className="mb-24 md:mb-48 text-center md:text-left">
          <h1 className="font-display text-6xl md:text-8xl lg:text-[110px] leading-[0.85] tracking-tight mb-12">I am Bunmi.</h1>
          <p className="font-sans text-xl md:text-2xl text-olive leading-relaxed max-w-2xl">
            Wife. Mother. Entrepreneur. Creator. Woman of faith. <br />
            <br />
            I love conversations that make us stop, think, laugh, question and sometimes see life differently. These are the experiences that shaped the woman behind the conversations.
          </p>
        </div>

        <div className="relative border-l border-ink/20 pl-8 md:pl-16 space-y-24 md:space-y-32">
          <div className="relative">
            <span className="absolute -left-10 md:-left-[73px] top-1 w-4 h-4 bg-cream border border-ink rounded-full" />
            <h2 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-clay mb-6">1990s</h2>
            <h3 className="font-display text-4xl md:text-5xl mb-4">The Early Years</h3>
            <p className="font-sans text-olive max-w-xl leading-relaxed">Education, growth, and the foundational years that set the stage. It was during this decade that I met Akin, a meeting that would define so much of my future path.</p>
          </div>

          <div className="relative">
            <span className="absolute -left-10 md:-left-[73px] top-1 w-4 h-4 bg-cream border border-ink rounded-full" />
            <h2 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-clay mb-6">2000s</h2>
            <h3 className="font-display text-4xl md:text-5xl mb-4">Marriage & Family</h3>
            <p className="font-sans text-olive max-w-xl leading-relaxed">We married in 2008. The transition into building a home and family became the greatest learning ground for understanding patience, love, and human connection.</p>
          </div>

          <div className="relative">
            <span className="absolute -left-10 md:-left-[73px] top-1 w-4 h-4 bg-cream border border-ink rounded-full" />
            <h2 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-clay mb-6">2010s</h2>
            <h3 className="font-display text-4xl md:text-5xl mb-4">Creating & Building</h3>
            <p className="font-sans text-olive max-w-xl leading-relaxed mb-12">This decade was defined by creation. From our music duo T.I.V creating sounds that resonated across Nigeria, to the launch of Single & Special—a platform dedicated to helping singles navigate the complexities of modern dating.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(projects2010s.length ? projects2010s : projects.filter((p: any) => p.year === "2010s")).map((project: any, i: number) => (
                <div key={project.id} className="group">
                  <div className="aspect-[4/3] bg-paper mb-4 relative overflow-hidden">
                    {project.coverId ? <img src={`/api/media/${project.coverId}`} alt={project.name} className="w-full h-full object-cover" /> : <img src={["/assets/cultural_festivals.jpg","/assets/Nigerian_fashion_displays.jpg"][i % 2]} alt={project.name} className="w-full h-full object-cover" />}
                  </div>
                  <h4 className="font-display text-2xl">{project.name}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <span className="absolute -left-10 md:-left-[73px] top-1 w-4 h-4 bg-ink rounded-full" />
            <h2 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-clay mb-6">2020s</h2>
            <h3 className="font-display text-4xl md:text-5xl mb-4">Conversations & Legacy</h3>
            <p className="font-sans text-olive max-w-xl leading-relaxed mb-12">The launch of Just A Chat and the curation of Vintage Africana. This current chapter is all about archiving memories, having honest conversations, and leaving something meaningful behind.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(projects2020s.length ? projects2020s : projects).slice(0, 4).map((project: any, i: number) => (
                <div key={project.id} className="group">
                  <div className="aspect-[4/3] bg-paper mb-4 relative overflow-hidden">
                    {project.coverId ? <img src={`/api/media/${project.coverId}`} alt={project.name} className="w-full h-full object-cover" /> : <img src={["/thumb.jpg","/thumb2.jpg","/assets/african_women_entrepreneurs.jpg","/assets/lagos_nigeria_cityscape.jpg"][i % 4]} alt={project.name} className="w-full h-full object-cover" />}
                  </div>
                  <h4 className="font-display text-2xl">{project.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
