"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-10">
        <Link href="#home" className="flex items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-teal)] text-lg font-extrabold text-white">
            S
          </div>
          <span className="text-lg font-bold tracking-tight text-[var(--color-ink)]">
            Shine Advertising
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-700 transition-colors hover:text-[var(--color-teal)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:923214924370"
          className="hidden items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 lg:flex"
        >
          <Phone size={16} />
          Get Started
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-[var(--color-ink)] lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-ink)] hover:bg-teal-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:923214924370"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[var(--color-teal)] px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Phone size={16} />
                Call Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
