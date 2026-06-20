"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Send, Link2, AtSign, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-teal-dark)]">
            Let&apos;s Work Together
          </span>
          <h2 className="section-heading-underline mx-auto mt-2 inline-block text-3xl font-extrabold text-[var(--color-ink)] sm:text-4xl">
            Contact Us
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-1 gap-8 rounded-2xl border border-zinc-100 p-8 shadow-sm sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="text-center">
            <h3 className="font-bold text-[var(--color-ink)]">Address</h3>
            <p className="mt-2 text-sm text-zinc-600">
              3 Mehmood Road, Near Telephone Exchange,
              <br />
              New Samanabad Town, Lahore
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-[var(--color-ink)]">Phone</h3>
            <a href="tel:923214924370" className="mt-2 flex items-center justify-center gap-2 text-sm text-zinc-600 hover:text-[var(--color-teal)]">
              <Phone size={14} /> +92 321 49 24 370
            </a>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-[var(--color-ink)]">Email</h3>
            <a href="mailto:designer@shineadve.com" className="mt-2 block text-sm text-zinc-600 hover:text-[var(--color-teal)]">
              designer@shineadve.com
            </a>
            <a href="mailto:Nouman@shineadve.com" className="block text-sm text-zinc-600 hover:text-[var(--color-teal)]">
              Nouman@shineadve.com
            </a>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-[var(--color-ink)]">Follow Us</h3>
            <div className="mt-2 flex justify-center gap-4 text-zinc-500">
              <a href="#" className="transition-colors hover:text-[var(--color-teal)]">
                <Globe size={16} />
              </a>
              <a href="#" className="transition-colors hover:text-[var(--color-teal)]">
                <Link2 size={16} />
              </a>
              <a href="#" className="transition-colors hover:text-[var(--color-teal)]">
                <AtSign size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-0 overflow-hidden rounded-2xl lg:grid-cols-2">
          <a
            href="http://maps.google.com/maps?q=31.5385953%2C74.3074081&z=17&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[320px] items-center justify-center gap-3 bg-zinc-100 text-zinc-400 transition-colors hover:text-[var(--color-teal)]"
          >
            <MapPin size={28} /> View on Google Maps
          </a>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--color-ink)] p-8 sm:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-xl font-bold text-white">Send a Message</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-6 w-full border-b border-white/20 bg-transparent py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-[var(--color-teal)]"
            />
            <input
              type="email"
              placeholder="Email"
              className="mt-5 w-full border-b border-white/20 bg-transparent py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-[var(--color-teal)]"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="mt-5 w-full border-b border-white/20 bg-transparent py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-[var(--color-teal)]"
            />
            <textarea
              placeholder="Type your Message"
              rows={4}
              className="mt-5 w-full resize-none border border-white/20 bg-transparent p-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-[var(--color-teal)]"
            />
            <button
              type="submit"
              className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[var(--color-teal)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-teal-dark)]"
            >
              <Send size={16} /> Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
