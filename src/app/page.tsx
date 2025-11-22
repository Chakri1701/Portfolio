import Header from "@/components/Header";
import { profile } from "@/data/profile";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative z-10 max-w-3xl mx-auto p-6 text-center md:text-left">
        {/* Add a glass wrapper for readability */}
        <div className="glass inline-block px-6 py-8 rounded-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-glow">
            {profile.name}
          </h1>
          <p className="text-dim mt-1 text-lg">
            {profile.title} • {profile.location}
          </p>

          <div className="mt-4 space-x-4 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="underline hover:text-white transition"
            >
              Email
            </a>
            <a
              href={profile.links.linkedin}
              className="underline hover:text-white transition"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              className="underline hover:text-white transition"
              target="_blank"
            >
              GitHub
            </a>
          </div>

          <div className="mt-10">
            <Link
              className="inline-block bg-white text-black font-semibold rounded-xl px-5 py-2 hover:bg-white/90 transition"
              href="/menu"
            >
              Explore sections →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
