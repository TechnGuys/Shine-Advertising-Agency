"use client";

import { motion } from "framer-motion";
import { User, Link2, AtSign } from "lucide-react";

const TEAM = [
  {
    name: "Nouman Iqbal",
    role: "CEO",
    bio: "Leads the agency's creative vision and client relationships, driving every project from concept to delivery.",
  },
  {
    name: "Designer",
    role: "Designer",
    bio: "Crafts the visual identity behind every campaign — from branding and print layouts to stage and event decor.",
  },
  {
    name: "Director",
    role: "Director",
    bio: "Oversees execution and operations, ensuring every event and project runs smoothly from start to finish.",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-teal-dark)]">
            Meet The Team
          </span>
          <h2 className="section-heading-underline mx-auto mt-2 inline-block text-3xl font-extrabold text-[var(--color-ink)] sm:text-4xl">
            The People Behind Shine
          </h2>
          <p className="mt-5 text-zinc-600">
            Placeholder team profiles shown below — share your team&apos;s
            photos and we&apos;ll update this section.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-3">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="flex aspect-square items-center justify-center bg-zinc-100 text-zinc-300">
                <User size={56} />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-base font-bold text-[var(--color-ink)]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-teal-dark)]">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-zinc-600">{member.bio}</p>
                <div className="mt-4 flex justify-center gap-3 text-zinc-400">
                  <Link2 size={16} className="transition-colors hover:text-[var(--color-teal)]" />
                  <AtSign size={16} className="transition-colors hover:text-[var(--color-teal)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
