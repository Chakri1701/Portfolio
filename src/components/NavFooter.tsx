"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type RouteItem = { href: string; label: string };

// EDIT THIS to control the flow order (menu → experience → education → skills → menu)
const orderedPages: RouteItem[] = [
  { href: "/menu", label: "Menu" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "projects"},
];

export default function NavFooter() {
  const pathname = usePathname();

  // find exact match in the list (treat "/" as outside the flow)
  const idx = orderedPages.findIndex(p => p.href === pathname);

  // if current page isn't in the flow, just show a button to start at Menu
  if (idx === -1) {
    return (
      <div className="mt-10 flex justify-end">
        <Link
          href="/menu"
          className="rounded-lg border border-neutral-700 px-3 py-1 text-sm hover:bg-neutral-900"
          aria-label="Open Menu"
        >
          Go to Menu →
        </Link>
      </div>
    );
  }

  const prev = idx > 0 ? orderedPages[idx - 1] : null;
  const next = idx < orderedPages.length - 1 ? orderedPages[idx + 1] : null;

  return (
    <nav
      aria-label="Page navigation"
      className="mt-10 flex items-center justify-between border-t border-neutral-800 pt-4 text-sm"
    >
      <div>
        {prev ? (
          <Link
            href={prev.href}
            className="underline hover:no-underline"
            aria-label={`Go to ${prev.label}`}
          >
            ← {prev.label}
          </Link>
        ) : (
          <span className="text-neutral-600"> </span>
        )}
      </div>

      <div className="text-neutral-400">
        {orderedPages[idx].label} ({idx + 1}/{orderedPages.length})
      </div>

      <div>
        {next ? (
          <Link
            href={next.href}
            className="underline hover:no-underline"
            aria-label={`Go to ${next.label}`}
          >
            {next.label} →
          </Link>
        ) : (
          // if you want the flow to loop back to Menu when last page, swap this block:
          // <Link href="/menu" className="underline hover:no-underline">Back to Menu →</Link>
          <span className="text-neutral-600"> </span>
        )}
      </div>
    </nav>
  );
}
