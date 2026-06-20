"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What areas/cities do you provide services in?",
    a: "We are based in Lahore and provide event management, branding and printing services across Lahore and nearby cities. For large-scale projects, we can travel to other locations as well.",
  },
  {
    q: "How far in advance should I book your services?",
    a: "For corporate events and large activations, we recommend booking 2-4 weeks in advance. For smaller setups, printing or branding work, we can often accommodate shorter timelines too.",
  },
  {
    q: "Do you handle everything in-house or outsource work?",
    a: "We manage planning, design, branding, printing, stage setup and media arrangements in-house with our own team, ensuring consistent quality and smooth coordination from start to finish.",
  },
  {
    q: "Can you manage both small and large-scale events?",
    a: "Yes. Whether it's a small indoor setup or a large-scale promotional campaign, our team scales resources and planning to match the size and requirements of your event.",
  },
  {
    q: "What is included in your printing & branding services?",
    a: "Our printing and branding services include indoor/outdoor flex printing, promotional materials, exhibition and stall branding, signage and creative advertising material tailored to your brand.",
  },
  {
    q: "How can I get a quotation for my project?",
    a: "Simply contact us via call, WhatsApp or email with your event details and requirements, and our team will get back to you with a tailored quotation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-teal-dark)]">
            Got Questions?
          </span>
          <h2 className="section-heading-underline mx-auto mt-2 inline-block text-3xl font-extrabold text-[var(--color-ink)] sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-[var(--color-ink)]">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-[var(--color-teal-dark)]"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-600">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
