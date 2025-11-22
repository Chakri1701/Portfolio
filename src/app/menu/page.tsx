import Header from "@/components/Header";
import FlipCard from "@/components/FlipCard";
import { sections, Section } from "@/data/Sections";

export const metadata = { title: "Menu | Portfolio" };

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold">Sections</h2>
        <p className="text-sm text-neutral-400 mt-1">
          Click a card to open the page. Use the small “Flip” button to see details.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s: Section) => (
            <div
              key={s.slug}
              className="transition-transform duration-200 hover:scale-[1.02] hover:-translate-y-0.5"
            >
              <FlipCard
                title={s.title}
                bgImage={s.cover}
                bullets={[`${s.items.length} item(s)`]}
                href={
                  s.slug === "experience"
                    ? "/experience"
                    : s.slug === "education"
                    ? "/education"
                    : s.slug === "skills"
                    ? "/skills"
                    :s.slug === "projects"   
                    ? "/projects"
                    : `/s/${s.slug}`
                }
                compactBack
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
