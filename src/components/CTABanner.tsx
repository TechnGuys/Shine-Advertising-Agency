"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-teal)] py-16">
      <div className="shard absolute -left-24 top-0 hidden h-full w-1/3 bg-white/10 lg:block" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center lg:flex-row lg:px-10 lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="mt-2 text-white/80">
            Let&apos;s talk about your next event, campaign or branding project.
          </p>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
          Get in Touch <ArrowRight size={18} />
        </motion.a>
      </div>
    </section>
  );
}
