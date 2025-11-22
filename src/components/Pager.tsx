// src/components/Pager.tsx
import Link from "next/link";
type Props = { prev?: string; next?: string };
export default function Pager({ prev, next }: Props) {
  return (
    <div className="mt-8 flex justify-between">
      <div>{prev && <Link className="underline" href={prev}>← Prev</Link>}</div>
      <div>{next && <Link className="underline" href={next}>Next →</Link>}</div>
    </div>
  );
}
