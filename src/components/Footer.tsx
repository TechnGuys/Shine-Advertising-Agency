"use client";

import { Globe, Link2, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 lg:grid-cols-3 lg:px-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-teal)] text-sm font-extrabold text-white">
              S
            </div>
            <span className="text-base font-bold text-white">
              Shine Advertising Agency
            </span>
          </div>
          <p className="mt-4 flex items-start gap-3 text-sm text-zinc-400">
            <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-teal-light)]" />
            3 Mehmood Road, Near Telephone Exchange, New Samanabad Town, Lahore
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
            <a href="tel:923214924370" className="flex items-center gap-3 transition-colors hover:text-[var(--color-teal-light)]">
              <Phone size={16} /> +92 321 49 24 370
            </a>
            <a href="mailto:designer@shineadve.com" className="flex items-center gap-3 transition-colors hover:text-[var(--color-teal-light)]">
              <Mail size={16} /> designer@shineadve.com
            </a>
            <a href="mailto:Nouman@shineadve.com" className="flex items-center gap-3 transition-colors hover:text-[var(--color-teal-light)]">
              <Mail size={16} /> Nouman@shineadve.com
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Newsletter
          </h4>
          <p className="mt-4 text-sm text-zinc-400">
            Subscribe to get updates on our latest projects and offers.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex overflow-hidden rounded-xl border border-white/10"
          >
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-[var(--color-teal)] px-4 text-white transition-colors hover:bg-[var(--color-teal-dark)]"
            >
              <Send size={16} />
            </button>
          </form>
          <div className="mt-5 flex gap-4 text-zinc-500">
            <a href="tel:923214924370" className="transition-colors hover:text-[var(--color-teal-light)]">
              <Phone size={16} />
            </a>
            <a href="mailto:designer@shineadve.com" className="transition-colors hover:text-[var(--color-teal-light)]">
              <Mail size={16} />
            </a>
            <a href="#" className="transition-colors hover:text-[var(--color-teal-light)]">
              <Globe size={16} />
            </a>
            <a href="#" className="transition-colors hover:text-[var(--color-teal-light)]">
              <Link2 size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} Shine Advertising Agency. All
          rights reserved. &mdash; &ldquo;Your Vision, Our Creative
          Execution.&rdquo;
        </p>
      </div>
    </footer>
  );
}
