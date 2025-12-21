"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CrossScroll() {
  const texts = [
    "Driven by Passion, Built with Code",
    "Custom Web Experiences",
    "Innovative Self-Made Creations",
    "Tailored Web Development",
    "Digital Solutions",
  ];

  return (
    <section className="relative h-[60vh] bg-background overflow-hidden flex items-center justify-center">
      <div className="absolute w-[120%] -rotate-3 bg-primary py-5 shadow-2xl z-10 scale-110 origin-center">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center mx-4">
              {texts.map((text, index) => (
                <div key={index} className="flex items-center gap-8">
                  <span className="text-xl md:text-3xl font-bold text-white uppercase tracking-widest">
                    {text}
                  </span>
                  <Sparkles className="text-secondary w-6 h-6 md:w-8 md:h-8 animate-pulse" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute w-[120%] rotate-3 bg-surface py-5 shadow-2xl z-20 scale-110 origin-center mix-blend-hard-light opacity-95 border-y border-border">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center mx-4">
              {texts.map((text, index) => (
                <div key={index} className="flex items-center gap-8">
                  <span className="text-xl md:text-3xl font-bold text-white uppercase tracking-widest">
                    {text}
                  </span>
                  <Sparkles className="text-secondary w-6 h-6 md:w-8 md:h-8 animate-pulse" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
