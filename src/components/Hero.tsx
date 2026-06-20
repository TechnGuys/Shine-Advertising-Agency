"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

const SLIDES = [
  { id: 1, label: "Corporate Events" },
  { id: 2, label: "Stage Setup & Decor" },
  { id: 3, label: "Flex & Outdoor Branding" },
  { id: 4, label: "Exhibition Branding" },
  { id: 5, label: "Product Launches" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--color-navy)] pt-24"
    >
      <AnimatePresence>
        <motion.div
          key={SLIDES[index].id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy-light)] to-[var(--color-navy)]"
        >
          <span className="select-none text-[10vw] font-extrabold uppercase tracking-tight text-white/5">
            {SLIDES[index].label}
          </span>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(240,169,46,0.15),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-block rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-gold)]"
          >
            Events &middot; Branding &middot; Printing &middot; Media
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Your Vision, <span className="text-[var(--color-gold)]">Our Creative</span> Execution
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-zinc-300 sm:text-lg"
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
              className="flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-7 py-3.5 text-sm font-semibold text-[var(--color-navy)] shadow-lg shadow-[var(--color-gold)]/20 transition-transform hover:scale-105"
            >
              Get a Quote <ArrowRight size={18} />
            </a>
            <a
              href="tel:923214924370"
              className="flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <PhoneCall size={18} /> Call Us Now
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-[var(--color-gold)]" : "w-3 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
