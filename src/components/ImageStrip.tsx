"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

export default function ImageStrip() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 sm:grid-cols-4 lg:px-10">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-zinc-100 text-zinc-300"
          >
            <ImageIcon size={32} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
