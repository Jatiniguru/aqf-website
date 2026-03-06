"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "About Us", href: "/about/" },
  { label: "Compliance Hub", href: "/compliance-hub/" },
  { label: "Contact", href: "/contact/" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F0] border-b border-[#E9E2D6] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo/aqf-logo.webp"
              alt="AQF Ingredients"
              width={130}
              height={44}
              className="h-10 w-auto object-contain"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#C46A4A] border-b-2 border-[#C46A4A] pb-0.5"
                      : "text-[#5C5C5C] hover:text-[#1D2D44]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact/"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-sm bg-[#C46A4A] hover:bg-[#a8593c] text-white transition-colors"
            >
              Request Quote &amp; Specs
            </Link>
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded text-[#1D2D44]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FFF8F0] border-t border-[#E9E2D6] px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive
                      ? "bg-[#F5CDA0] text-[#C46A4A]"
                      : "text-[#5C5C5C] hover:bg-[#F7F4EE] hover:text-[#1D2D44]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact/"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-2 text-sm font-semibold rounded-sm bg-[#C46A4A] text-white text-center"
            >
              Request Quote &amp; Specs
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
