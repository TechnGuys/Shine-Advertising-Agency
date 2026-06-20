"use client";

import { motion } from "framer-motion";
import {
  PartyPopper,
  Building2,
  Layers,
  Printer,
  Sparkles,
  LayoutTemplate,
  Megaphone,
  Users2,
  Rocket,
  Store,
  Lightbulb,
  Speaker,
} from "lucide-react";

const SERVICES = [
  { icon: PartyPopper, title: "Event Management & Planning", desc: "End-to-end planning and execution for events of any scale." },
  { icon: Building2, title: "Corporate & Social Event Organizing", desc: "Seamless organizing for corporate and social gatherings." },
  { icon: Layers, title: "Indoor & Outdoor Flex Branding", desc: "High-impact flex branding for indoor and outdoor spaces." },
  { icon: Printer, title: "Printing & Promotional Material", desc: "Quality printing and promotional materials for every campaign." },
  { icon: Sparkles, title: "WHOH Auto Foam Media Solutions", desc: "Eye-catching foam media solutions that stand out." },
  { icon: LayoutTemplate, title: "Stage Setup & Event Decorations", desc: "Stunning stage setups and decor tailored to your event." },
  { icon: Megaphone, title: "Brand Promotions & Marketing", desc: "Creative campaigns that boost brand visibility and reach." },
  { icon: Users2, title: "Chaos Branding & Crowd Engagement", desc: "Bold, creative crowd engagement that gets noticed." },
  { icon: Rocket, title: "Product Launch Events", desc: "Memorable launch events that make a strong first impression." },
  { icon: Store, title: "Exhibition & Stall Branding", desc: "Custom stall and exhibition branding that attracts visitors." },
  { icon: Lightbulb, title: "Sound, Lighting & Media Arrangements", desc: "Professional sound, lighting and media for flawless events." },
  { icon: Speaker, title: "Creative Advertising Campaigns", desc: "Publicity campaigns crafted to leave a lasting impression." },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f4f6fb] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-teal-dark)]">
            What We Do
          </span>
          <h2 className="section-heading-underline mx-auto mt-2 inline-block text-3xl font-extrabold text-[var(--color-ink)] sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-5 text-zinc-600">
            Complete management and execution services under one roof —
            creativity, quality, commitment and customer satisfaction in
            every project.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group rounded-2xl border border-zinc-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[var(--color-teal)] text-[var(--color-teal)] transition-transform group-hover:scale-110 group-hover:bg-[var(--color-teal)] group-hover:text-white">
                <service.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[var(--color-ink)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{service.desc}</p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-teal-dark)] transition-colors hover:text-[var(--color-teal)]"
              >
                Read More &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
