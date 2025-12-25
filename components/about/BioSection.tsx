"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BioSection() {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
        {/* Left Column: Text Content */}
        <div className="space-y-12 md:sticky md:top-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-light">
              My approach combines strategic architecture with hands-on
              development—whether its implementing{" "}
              <strong className="text-white font-semibold">
                Retrieval-Augmented Generation (RAG)
              </strong>{" "}
              systems, optimizing React rendering for complex dashboards, or
              architecting type-safe backends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-light">
              I’ve worked across diverse industries, from building Partner Admin
              Panels at
              <span className="text-secondary font-medium"> Kayana</span> to
              healthcare dashboards at
              <span className="text-secondary font-medium"> IIT Bombay</span>. I
              dont just write code—I architect solutions that drive measurable
              business outcomes.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-surface"
        >
          {/* IMPORTANT: 
             1. Create a folder named 'img' inside your 'public' folder.
             2. Rename your photo to 'new-photo.jpg' and put it there.
          */}
          <Image
            src="/img/nimeshpfp.jpeg"
            alt="Nimesh Gujari"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full animate-pulse pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
