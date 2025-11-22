import Header from "@/components/Header";
import { sections } from "@/data/Sections";
import FlipCard from "@/components/FlipCard";

export const metadata = { title: "Projects | Portfolio" };

export default function ProjectsPage() {
  const projects = sections.find((s) => s.slug === "projects");
  if (!projects) return null;

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-6 text-soft">
        <h1 className="text-2xl font-semibold text-glow">Projects</h1>
        <p className="text-sm text-dim mt-1">
          Click a card to flip and see highlights.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((p) => (
            <FlipCard
              key={p.title}
              title={p.title}
              subtitle={p.subtitle}
              bgImage={p.cover}
              bullets={p.bullets ?? []}
              href={p.href}        // optional — add links per project if you have them
              compactBack
            />
          ))}
        </div>
      </main>
    </>
  );
}
