import Link from "next/link";
import Button from "@/components/ui/Button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-white">CRV</Link>

        <nav className="hidden sm:flex gap-2">
          <Button href="/menu" variant="ghost" size="sm">Menu</Button>
          <Button href="/experience" variant="ghost" size="sm">Experience</Button>
          <Button href="/education" variant="ghost" size="sm">Education</Button>
          <Button href="/skills" variant="ghost" size="sm">Skills</Button>
          <Button href="/projects" variant="ghost" size="sm">projects</Button>
        </nav>
      </div>
    </header>
  );
}
