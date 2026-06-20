"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarCheck, Clock, Users } from "lucide-react";

const STATS = [
  { icon: Clock, value: 10, suffix: "+", label: "Years of Experience" },
  { icon: Users, value: 25, suffix: "+", label: "Professional Team" },
  { icon: CalendarCheck, value: 100, suffix: "+", label: "Projects Executed" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-teal-dark)]">
              About Us
            </span>
            <h2 className="section-heading-underline mt-2 inline-block text-3xl font-extrabold text-[var(--color-ink)] sm:text-4xl">
              Creativity, Commitment & Customer Satisfaction
            </h2>
            <p className="mt-5 text-zinc-600">
              Shine Advertising Agency is a complete partner for event
              management, branding, printing and promotional solutions. We
              bring ideas to life with creative execution, quality materials
              and dedicated planning — delivering memorable experiences for
              every client, every time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[var(--color-ink)] p-8"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-teal)]/20 text-[var(--color-teal-light)]">
                    <stat.icon size={22} />
                  </div>
                  <div className="text-3xl font-extrabold text-white">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
