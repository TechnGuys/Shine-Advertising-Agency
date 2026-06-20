"use client";

import { motion } from "framer-motion";
import {
  PartyPopper,
  Layers,
  LayoutTemplate,
  Megaphone,
  Rocket,
  Store,
} from "lucide-react";

const SERVICES = [
  { icon: Megaphone, title: "Branding & Advertising", desc: "Indoor and outdoor branding solutions including mall branding, retail displays, and promotional visuals, executed with precision to enhance brand visibility and consistency." },
  { icon: LayoutTemplate, title: "3D Sign Boards", desc: "Custom-designed 3D sign boards using high-quality materials and modern fabrication techniques for shops, offices, and commercial spaces." },
  { icon: PartyPopper, title: "Event Design & Management", desc: "Complete event solutions covering design, setup, coordination, and on-ground execution for corporate events, launches, and exhibitions." },
  { icon: Rocket, title: "Brand Activations", desc: "Engaging brand activations including mall activations, roadshows, and promotional campaigns designed to connect brands with their audience." },
  { icon: Store, title: "Kiosk & Shop Fabrication", desc: "Custom-built kiosks, shops, and retail displays fabricated with durability, functionality, and premium finishing." },
  { icon: Layers, title: "Custom Work & Design", desc: "Tailor-made design and fabrication solutions developed to meet unique project requirements and specifications." },
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
