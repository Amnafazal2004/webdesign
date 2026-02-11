// app/page.tsx
"use client"; // needed for useState

import Link from "next/link";
import { useState } from "react";
import { CyGroteskmed } from "@/lib/fonts";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-800 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden fixed top-20 z-40 bg-black rounded-4xl w-[90%] mx-auto px-6 py-6 flex flex-col gap-4 shadow-lg">
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
            className="px-5 py-2 rounded-full font-medium border border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black transition text-center"
          >
            Book a call
          </Link>
        </nav>
      )}
    </main>
  );
}
