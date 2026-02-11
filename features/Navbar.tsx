// app/page.tsx
import Link from "next/link";
import { CyGroteskmed } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="bg-black text-white flex flex-col items-center">
      {/* Floating Navbar */}
      <header className="fixed top-4 z-50 bg-black rounded-4xl max-w-7xl w-[90%] mx-auto px-8 py-2 flex items-center justify-between shadow-lg">
        {/* Logo */}
        <Link href="/" className={`${CyGroteskmed.className} text-xl font-bold`}>
          NextByte Studio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm items-center">
          <Link href="#why" className="hover:text-[#C9A24D] transition-colors">
            Why Us
          </Link>
          <Link href="#about" className="hover:text-[#C9A24D] transition-colors">
            About
          </Link>
          <Link href="#services" className="hover:text-[#C9A24D] transition-colors">
            Services
          </Link>
          <Link href="/Portfolio" className="hover:text-[#C9A24D] transition-colors">
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="px-5 py-2 rounded-full font-medium border border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black transition"
          >
            Book a call
          </Link>
        </nav>
      </header>


    </main>
  );
}
