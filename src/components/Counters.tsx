"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarCheck, Clock, Users, Smile } from "lucide-react";

const STATS = [
  { icon: CalendarCheck, value: 350, suffix: "+", label: "Projects Completed" },
  { icon: Clock, value: 8, suffix: "+", label: "Years of Experience" },
  { icon: Users, value: 25, suffix: "+", label: "Team Members" },
  { icon: Smile, value: 200, suffix: "+", label: "Happy Clients" },
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

export default function Counters() {
  return (
    <section className="bg-[var(--color-navy)] py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-10">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-gold)]/15 text-[var(--color-gold)]">
              <stat.icon size={26} />
            </div>
            <div className="text-3xl font-extrabold text-white sm:text-4xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-sm text-zinc-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
