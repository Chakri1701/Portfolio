import "./globals.css";
import type { Metadata } from "next";
import Background3D from "@/components/Background3D";

export const metadata: Metadata = {
  title: "Chakradhar Vitta | Portfolio",
  description: "3D interactive portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-neutral-950 text-neutral-100 antialiased">
        <Background3D />

        {/* Keep overlay NON-interactive so clicks go to the canvas */}
        <div className="fixed inset-0 -z-10 bg-black/40 backdrop-blur-[2px] pointer-events-none" />

        <main className="relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
