"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageIcon } from "lucide-react";

const CATEGORIES = ["All", "Events", "Branding", "Printing", "Stage Decor"];

const PROJECTS = [
  { id: 1, title: "Corporate Annual Gala", category: "Events" },
  { id: 2, title: "Outdoor Flex Branding", category: "Branding" },
  { id: 3, title: "Product Launch Setup", category: "Events" },
  { id: 4, title: "Exhibition Stall Design", category: "Branding" },
  { id: 5, title: "Promotional Print Campaign", category: "Printing" },
  { id: 6, title: "Wedding Stage Decor", category: "Stage Decor" },
  { id: 7, title: "Brand Activation Drive", category: "Branding" },
  { id: 8, title: "Concert Lighting & Sound", category: "Stage Decor" },
  { id: 9, title: "Indoor Banner Printing", category: "Printing" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-teal-dark)]">
            Our Work
          </span>
          <h2 className="section-heading-underline mx-auto mt-2 inline-block text-3xl font-extrabold text-[var(--color-ink)] sm:text-4xl">
            Portfolio & Projects
          </h2>
          <p className="mt-5 text-zinc-600">
            A glimpse of the experiences and brand visibility we&apos;ve
            created. (Placeholder images shown — real project photos coming
            soon.)
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-[var(--color-teal)] text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-teal-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100"
              >
                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 transition-transform duration-500 group-hover:scale-110">
                  <ImageIcon size={48} />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-teal-light)]">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
