"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What services does Shine Advertising Agency provide?",
    a: "We offer complete branding and advertising solutions, including branding, 3D sign boards, event design & management, brand activations, kiosk and shop fabrication, and custom design and fabrication services.",
  },
  {
    q: "Do you handle projects from concept to execution?",
    a: "Yes. We manage every project end-to-end, from concept development and design to fabrication, setup, coordination and on-ground execution.",
  },
  {
    q: "Can you create custom designs based on our requirements?",
    a: "Absolutely. We offer customized design and fabrication services tailored to your specific brand guidelines, space requirements and project goals.",
  },
  {
    q: "Do you manage events and brand activations?",
    a: "Yes, we manage events end-to-end covering concept development, fabrication, setup, coordination and execution for corporate events, brand launches, exhibitions and trade shows.",
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
                className="overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 border-zinc-100"
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
