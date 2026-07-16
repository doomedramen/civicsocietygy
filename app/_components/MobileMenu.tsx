"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "../_lib/nav";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="rounded-full border border-primary/15 p-2 text-primary hover:bg-primary/5"
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <nav id="mobile-navigation" className="absolute left-0 right-0 top-full grid grid-cols-2 border-t border-primary/10 bg-[#faf8f2] p-3 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-primary/75 transition-colors hover:bg-cream hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
