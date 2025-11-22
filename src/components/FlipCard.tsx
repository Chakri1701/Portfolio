"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type FlipCardProps = {
  title: string;
  subtitle?: string;
  period?: string;
  bullets?: string[];
  href?: string;      // target route
  bgImage: string;    // /images/...
  compactBack?: boolean;
};

export default function FlipCard({
  title, subtitle, period, bullets, href, bgImage, compactBack
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const router = useRouter();

  const handleFrontClick = () => {
    if (href) router.push(href);
  };

  return (
    <div className="relative h-56 sm:h-64 w-full [perspective:1000px]">
      <div
        className={`relative h-full w-full rounded-2xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT: full card navigates */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden] cursor-pointer group"
          onClick={handleFrontClick}
          role="button"
          aria-label={`Open ${title}`}
        >
          <Image
            src={bgImage}
            alt={title}
            fill
            className="object-cover brightness-75 transition-transform duration-200 group-hover:scale-[1.02]"
            priority
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/20 to-black/0" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            {subtitle && <p className="text-sm text-neutral-300">{subtitle}</p>}
          </div>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setFlipped(true); }}
            className="absolute top-3 right-3 rounded-full border border-neutral-700 bg-neutral-900/70 px-3 py-1 text-xs hover:bg-neutral-900"
            aria-label={`Flip ${title} for details`}
          >
            Flip
          </button>
        </div>

        {/* BACK: details on glass surface */}
        <div className="absolute inset-0 rounded-2xl glass p-4 text-left [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {period && <div className="text-xs text-neutral-400">{period}</div>}
          <h4 className="mt-1 text-lg font-medium">{title}</h4>
          {subtitle && <div className="text-sm text-neutral-400">{subtitle}</div>}

          {bullets && bullets.length > 0 && (
            <ul className={`mt-3 list-disc list-inside space-y-1 text-sm text-neutral-300 ${compactBack ? "line-clamp-4" : ""}`}>
              {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}

          <div className="mt-4 flex items-center gap-3">
            {href && (
              <Link
                href={href}
              >
              </Link>
            )}
            <button
              type="button"
              onClick={() => setFlipped(false)}
              className="rounded-lg border border-neutral-700 px-3 py-1 text-sm hover:bg-neutral-900"
              aria-label="Flip back"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
