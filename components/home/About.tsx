"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const curveVal = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen mt-20">
      <div className="absolute top-0 left-0 w-full h-[200px] -translate-y-[99%] overflow-hidden z-10 leading-none">
        <svg
          className="w-full h-full block fill-surface"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d={useTransform(
              curveVal,
              (val) => `M0,100 Q720,${val} 1440,100 V100 H0 Z`
            )}
          />
        </svg>
      </div>

      <section className="bg-surface text-white pt-10 pb-32 min-h-screen flex flex-col items-center justify-center relative">
        <div className="container mx-auto px-6 flex flex-col items-center text-center space-y-12 max-w-5xl z-20">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-medium leading-tight"
          >
            Im Nimesh – a{" "}
            <span className="text-secondary">Full Stack Developer</span>{" "}
            crafting fast, scalable, immersive experiences.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-muted font-light max-w-3xl"
          >
            Merging creativity with engineering precision. Specialized in SaaS,
            AI-driven products, and interactive 3D web experiences.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group flex items-center gap-4 px-8 py-4 bg-secondary rounded-full text-surface font-bold text-lg shadow-[0_0_20px_var(--color-secondary)]"
          >
            About Me
            <span className="w-8 h-8 flex items-center justify-center bg-surface text-secondary rounded-full group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={18} />
            </span>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
