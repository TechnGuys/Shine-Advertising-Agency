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
    <section id="process" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold-dark)]">
            Our Process
          </span>
          <h2 className="section-heading-underline mx-auto mt-2 inline-block text-3xl font-extrabold text-[var(--color-navy)] sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-5 text-zinc-600">
            A simple, transparent process designed for smooth execution from
            start to finish.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-7 left-0 right-0 hidden h-px bg-zinc-200 lg:block" />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-navy)] shadow-lg shadow-amber-200">
                <step.icon size={24} />
              </div>
              <span className="mt-4 text-xs font-bold uppercase tracking-wider text-zinc-400">
                Step 0{i + 1}
              </span>
              <h3 className="mt-2 text-lg font-bold text-[var(--color-navy)]">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-zinc-600">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
