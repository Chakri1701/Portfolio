import Header from "@/components/Header";
import { sections } from "@/data/Sections";   // <-- lowercase file name
import CopyChip from "@/components/CopyChip";

export const metadata = { title: "Skills | Portfolio" };

export default function SkillsPage() {
  const skills = sections.find((s) => s.slug === "skills");
  if (!skills) return null;

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-6 text-soft">
        <h1 className="text-2xl font-semibold">Skills</h1>
        <p className="text-sm text-dim mt-1">Tap a chip to copy.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.items.map((group, i) => (
            <div key={i} className="glass rounded-2xl p-4">
              <div className="text-base font-medium">{group.title}</div>
              {group.subtitle && <div className="text-dim text-sm">{group.subtitle}</div>}

              <div className="mt-3 flex flex-wrap gap-2">
                {(group.bullets ?? []).map((skill, k) => (
                  <CopyChip key={k} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
