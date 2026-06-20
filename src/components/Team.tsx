"use client";

import { motion } from "framer-motion";
import { User, Link2, AtSign } from "lucide-react";

const TEAM = [
  { name: "Nouman", role: "Founder & Creative Director" },
  { name: "Team Member", role: "Event Manager" },
  { name: "Team Member", role: "Branding & Print Specialist" },
  { name: "Team Member", role: "Media & Sound Lead" },
];

export default function Team() {
  return (
    <section id="team" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold-dark)]">
            Meet The Team
          </span>
          <h2 className="section-heading-underline mx-auto mt-2 inline-block text-3xl font-extrabold text-[var(--color-navy)] sm:text-4xl">
            The People Behind Shine
          </h2>
          <p className="mt-5 text-zinc-600">
            Placeholder team profiles shown below — share your team&apos;s
            names, roles and photos and we&apos;ll update this section.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-light)] text-white/30">
                <User size={56} />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base font-bold text-[var(--color-navy)]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{member.role}</p>
                <div className="mt-3 flex justify-center gap-3 text-zinc-400">
                  <Link2 size={16} className="transition-colors hover:text-[var(--color-gold-dark)]" />
                  <AtSign size={16} className="transition-colors hover:text-[var(--color-gold-dark)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
