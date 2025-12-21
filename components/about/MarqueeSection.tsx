"use client";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function MarqueeSection() {
  return (
    <div className="w-full py-12 bg-background border-y border-border overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap items-center"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15, // Exact speed from your Story component
        }}
      >
        {/* Repeating 4 times to ensure it covers wide screens smoothly */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex items-center gap-12 pr-12 shrink-0 opacity-80"
          >
            {/* 1. The Text */}
            <h2 className="text-[7vw] font-black uppercase text-white leading-none tracking-tighter">
              Full Stack Developer
            </h2>

            {/* 2. The Dot */}
            <div className="w-[2vw] h-[2vw] rounded-full bg-secondary" />

            {/* 3. The Arrow Icon */}
            <MoveRight className="text-primary w-[5vw] h-[5vw]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
