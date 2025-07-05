"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-jet shadow-sm sticky top-0 z-50">
      <div className="max-w-full mx-auto px-2 sm:px-2 lg:px-3">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/exo_logo_gold_black.png"
                alt="Logo"
                width={100}
                height={100}
                className="h-10 w-auto sm:h-16 md:h-18 lg:h-18"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden font-semibold text-softWhite md:flex md:space-x-8 font-exo-2 text-[24px] md:text-xl lg:text-xl">
            <Link href="/recruiting" className="relative group px-3 py-2">
              <span>Join the Team</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-ashGold transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/ace" className="relative group px-3 py-2">
              <span>ACE 2025</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-ashGold transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/team" className="relative group px-3 py-2">
              <span>Team</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-ashGold transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/design" className="relative group px-3 py-2">
              <span>Design</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-ashGold transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/sponsors" className="relative group px-3 py-2">
              <span>Sponsors</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-ashGold transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link href="/contact" className="relative group px-3 py-2">
              <span>Contact</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-ashGold transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${
                menuOpen ? "animate-spin-slow" : ""
              }`}
            >
              <Image
                src="/gear.svg"
                alt="Menu"
                width={40}
                height={40}
                className={`transform transition-transform duration-700 ${
                  menuOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="md:hidden bg-jet shadow-sm">
          <div className="space-y-1 px-4 pt-4 pb-6 text-softWhite font-exo-2 text-lg">
            <Link
              href="/recruiting"
              onClick={toggleMenu}
              className="relative block group py-2"
            >
              <span>Join the Team</span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-ashGold transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/ace"
              onClick={toggleMenu}
              className="relative block group py-2"
            >
              <span>ACE 2025</span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-ashGold transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/team"
              onClick={toggleMenu}
              className="relative block group py-2"
            >
              <span>Team</span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-ashGold transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/design"
              onClick={toggleMenu}
              className="relative block group py-2"
            >
              <span>Design</span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-ashGold transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/sponsors"
              onClick={toggleMenu}
              className="relative block group py-2"
            >
              <span>Sponsors</span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-ashGold transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/contact"
              onClick={toggleMenu}
              className="relative block group py-2"
            >
              <span>Contact</span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-ashGold transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
