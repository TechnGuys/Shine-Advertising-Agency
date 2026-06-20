"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Link2, AtSign, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-24"
    >
      <div className="shard absolute -right-32 top-0 hidden h-full w-[42%] bg-[var(--color-teal)] lg:block" />
      <div className="shard absolute -right-10 top-0 hidden h-full w-[20%] bg-[var(--color-ink)] opacity-90 lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-block rounded-full border border-[var(--color-teal)]/40 bg-[var(--color-teal)]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[var(--color-teal-dark)]"
          >
            Welcome to Shine Advertising Agency
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl"
          >
            Your Vision, <span className="text-[var(--color-teal)]">Our Creative</span> Execution
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-zinc-600 sm:text-lg"
          >
            We turn ideas into unforgettable experiences — from corporate events
            and branding to flex printing and promotional campaigns, all under
            one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-[var(--color-teal)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-200 transition-transform hover:scale-105"
            >
              Get a Quote <ArrowRight size={18} />
            </a>
            <a
              href="tel:923214924370"
              className="flex items-center gap-2 rounded-full border border-zinc-300 px-7 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-zinc-100"
            >
              <PhoneCall size={18} /> Call Us Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex gap-4 text-zinc-500"
          >
            <a href="#" className="transition-colors hover:text-[var(--color-teal)]">
              <Link2 size={18} />
            </a>
            <a href="#" className="transition-colors hover:text-[var(--color-teal)]">
              <AtSign size={18} />
            </a>
            <a href="#" className="transition-colors hover:text-[var(--color-teal)]">
              <Globe size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
