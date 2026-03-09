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
    <>
      {/* Announcement bar */}
      <div className="bg-[#1D2D44] text-white text-xs text-center py-2 px-4 tracking-wide">
        Premium Indian Ingredients for Food, Nutraceutical &amp; Pet Nutrition &nbsp;·&nbsp; Kosher-certified options available &nbsp;·&nbsp; COA on every order
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
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
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                      isActive
                        ? "text-[#C46A4A]"
                        : "text-gray-500 hover:text-[#1D2D44]"
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
                className="hidden sm:inline-flex items-center px-5 py-2 text-xs font-semibold uppercase tracking-widest bg-[#1D2D44] hover:bg-[#C46A4A] text-white transition-colors"
              >
                Get a Quote
              </Link>
              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 text-[#1D2D44]"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
            <nav className="flex flex-col pt-2" aria-label="Mobile navigation">
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
                    className={`px-3 py-3 text-xs font-semibold uppercase tracking-widest border-b border-gray-100 transition-colors ${
                      isActive ? "text-[#C46A4A]" : "text-gray-500 hover:text-[#1D2D44]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact/"
                onClick={() => setMenuOpen(false)}
                className="mt-3 px-4 py-3 text-xs font-semibold uppercase tracking-widest bg-[#1D2D44] text-white text-center"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
