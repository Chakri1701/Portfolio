import Header from "@/components/Header";
import FlipCard from "@/components/FlipCard";
import { sections } from "@/data/Sections";

export const metadata = { title: "Education | Portfolio" };

export default function EducationPage() {
  const education = sections.find(s => s.slug === "education");
  if (!education) return null;

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-semibold">Education</h1>
        <p className="text-sm text-neutral-400 mt-1">Click a card to open; Flip for details.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {education.items.map((it, i) => (
            <FlipCard
              key={i}
              title={it.title}
              subtitle={it.subtitle}
              period={it.period}
              bullets={it.bullets}
              bgImage={it.cover}
              href="/education"
            />
          ))}
        </div>
      </main>
    </>
  );
}
