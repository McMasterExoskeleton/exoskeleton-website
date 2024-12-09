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
    <header className="bg-white shadow-sm">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/exo_white_scalable.svg"
                alt="Logo"
                width={100}
                height={100}
                className="h-12 w-auto sm:h-16 md:h-20 lg:h-24"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8 font-exo-2 text-[24px] md:text-xl lg:text-xl">
            <Link
              href="/sponsors"
              className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md font-medium"
            >
              Sponsors
            </Link>
            <Link
              href="/team"
              className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md font-medium"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          {/* Hamburger Icon */}
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
        <nav className="md:hidden bg-white shadow-sm">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              href="/sponsors"
              className="block text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
            >
              Sponsors
            </Link>
            <Link
              href="/team"
              className="block text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="block text-gray-900 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
