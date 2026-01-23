// app/page.tsx
import Link from "next/link";
import { CyGroteskmed } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="bg-[#F7F1E8]  text-black">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className={`${CyGroteskmed.className} text-xl`}>NextByte Studio</Link>
        <nav className="hidden md:flex gap-8 text-sm items-center">
          <Link href="#why" className="hover:text-[#C9A24D] transition">Why Us</Link>
          <Link href="#about" className="hover:text-[#C9A24D] transition">About</Link>
          <Link href="#services" className="hover:text-[#C9A24D] transition">Services</Link>
          <Link href="/Portfolio" className="hover:text-[#C9A24D] transition">Portfolio</Link>
          <Link
            href="#contact"
            className="px-5 py-2 rounded-full font-medium border border-[#C9A24D] text-[#C9A24D]
            hover:bg-[#C9A24D] hover:text-black transition"
          >
            Book a call
          </Link>
        </nav>
      </header>



    </main>
  );
}
