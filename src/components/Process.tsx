"use client";

import { motion } from "framer-motion";
import { MessageSquare, PencilRuler, Hammer, PartyPopper } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Consultation",
    desc: "We listen to your vision, goals and budget to understand exactly what you need.",
  },
  {
    icon: PencilRuler,
    title: "Planning & Design",
    desc: "Our team crafts a creative concept, layout and timeline tailored to your event.",
  },
  {
    icon: Hammer,
    title: "Execution & Setup",
    desc: "Branding, printing, stage and media setup handled by our experienced crew.",
  },
  {
    icon: PartyPopper,
    title: "Event Day & Delivery",
    desc: "Smooth, on-time execution with full support until the final moment.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-teal-dark)]">
              How We Work
            </span>
            <h2 className="section-heading-underline mt-2 inline-block text-3xl font-extrabold text-[var(--color-ink)] sm:text-4xl">
              We Care for Every Brand
            </h2>
            <p className="mt-5 max-w-md text-zinc-600">
              A simple, transparent process designed for smooth execution from
              start to finish — from the first conversation to the final
              event-day delivery.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-teal)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-200 transition-transform hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {STEPS.map((step, i) => {
              const filled = i === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl p-7 shadow-sm ${
                    filled
                      ? "bg-[var(--color-teal)] text-white"
                      : "bg-white text-[var(--color-ink)]"
                  }`}
                >
                  <span
                    className={`text-3xl font-extrabold ${
                      filled ? "text-white/40" : "text-[var(--color-teal)]/30"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                  <p
                    className={`mt-2 text-sm ${
                      filled ? "text-white/80" : "text-zinc-600"
                    }`}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
