
import { sections, Section } from "@/data/Sections";

import Header from "@/components/Header";
import FlipCard from "@/components/FlipCard";

export function generateStaticParams() {
  return sections.map(s => ({ slug: s.slug }));
}

export default function SectionPage({ params }: { params: { slug: string } }) {
  const section = sections.find(s => s.slug === params.slug);
  if (!section) return null;

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold">{section.title}</h2>
        <p className="text-sm text-neutral-400 mt-1">Click a card to flip for details.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {section.items.map((it, i) => (
            <FlipCard
              key={i}
              title={it.title}
              subtitle={it.subtitle}
              period={it.period}
              bullets={it.bullets}
              bgImage={it.cover}
            />
          ))}
        </div>
      </main>
    </>
  );
}
