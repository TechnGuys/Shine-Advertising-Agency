"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--color-navy)] py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(240,169,46,0.12),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
            Let&apos;s Work Together
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Contact Us for Bookings & Collaborations
          </h2>
          <p className="mt-5 max-w-md text-zinc-300">
            DM us for quotations and event planning — our team is ready to
            deliver professional results with modern ideas and smooth
            execution.
          </p>

          <div className="mt-9 flex flex-col gap-5">
            <a
              href="tel:923214924370"
              className="flex items-center gap-4 text-zinc-200 transition-colors hover:text-[var(--color-gold)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Phone size={18} />
              </span>
              +92 321 49 24 370
            </a>
            <a
              href="mailto:designer@shineadve.com"
              className="flex items-center gap-4 text-zinc-200 transition-colors hover:text-[var(--color-gold)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Mail size={18} />
              </span>
              designer@shineadve.com
            </a>
            <a
              href="mailto:Nouman@shineadve.com"
              className="flex items-center gap-4 text-zinc-200 transition-colors hover:text-[var(--color-gold)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Mail size={18} />
              </span>
              Nouman@shineadve.com
            </a>
            <a
              href="http://maps.google.com/maps?q=31.5385953%2C74.3074081&z=17&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 text-zinc-200 transition-colors hover:text-[var(--color-gold)]"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                <MapPin size={18} />
              </span>
              3 Mehmood Road, Near Telephone Exchange,
              <br />
              New Samanabad Town, Lahore
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white p-7 shadow-2xl sm:p-9"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-gold)]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-gold)]"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="mt-5 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-gold)]"
          />
          <textarea
            placeholder="Tell us about your event or project..."
            rows={4}
            className="mt-5 w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-gold)]"
          />
          <button
            type="submit"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] py-3.5 text-sm font-semibold text-[var(--color-navy)] transition-transform hover:scale-[1.02]"
          >
            <Send size={16} /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
