"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#guidelines", label: "Guidelines" },
  { href: "#timeline", label: "Dates" },
  { href: "#evaluation", label: "Evaluation" },
  { href: "#rules", label: "Rules" },
  { href: "#qna", label: "Q&A" },
  { href: "#submit", label: "Submit PPT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#" className="font-extrabold text-sih-navy text-sm sm:text-base tracking-tight">
          SIH 2026 <span className="text-sih-orange">NITK</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-gray-600 hover:text-sih-orange transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-sih-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-gray-700 hover:text-sih-orange"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
