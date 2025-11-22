// src/components/SectionCard.tsx
type Item = { title: string; subtitle?: string; period?: string; bullets?: string[] };
export default function SectionCard({ title, subtitle, period, bullets }: Item) {
  return (
    <div className="rounded-2xl border border-neutral-800 p-5">
      <div className="text-lg font-medium">{title}</div>
      {subtitle && <div className="text-neutral-400">{subtitle}</div>}
      {period && <div className="text-neutral-500 text-sm">{period}</div>}
      {bullets && <ul className="mt-3 list-disc list-inside space-y-1 text-neutral-300">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>}
    </div>
  );
}
