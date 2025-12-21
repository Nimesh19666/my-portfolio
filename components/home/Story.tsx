"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function Story() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 20%"],
  });

  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start center", "end center"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["70%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const pathLength = useTransform(imageScrollProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-background pt-20 pb-0 overflow-hidden"
    >
      <motion.div
        style={{ width: width, borderRadius: borderRadius }}
        className="mx-auto bg-surface overflow-hidden relative z-10 flex flex-col origin-top will-change-transform transform-gpu [backface-visibility:hidden] border border-border"
      >
        <div className="py-12 bg-surface border-b border-border">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            className="whitespace-nowrap flex gap-12 items-center will-change-transform"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-8 opacity-80">
                <h2 className="text-[7vw] font-black uppercase text-white leading-none tracking-tighter">
                  Full Stack Developer
                </h2>
                <div className="w-[2vw] h-[2vw] rounded-full bg-secondary" />
                <h2 className="text-[7vw] font-black uppercase text-border leading-none tracking-tighter"></h2>
                <MoveRight className="text-primary w-[5vw] h-[5vw]" />
              </div>
            ))}
          </motion.div>
        </div>

        <div ref={imageRef} className="relative w-full h-[100vh]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale contrast-125 opacity-80"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1900&auto=format&fit=crop')",
            }}
          />
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 600 0 Q 600 400, 300 600 T 600 800"
              fill="none"
              stroke="var(--color-secondary)"
              strokeWidth="12"
              strokeLinecap="round"
              style={{ pathLength }}
              className="drop-shadow-[0_0_10px_var(--color-secondary)]"
            />
          </svg>
        </div>

        <div className="bg-surface px-8 py-24 md:px-20 relative z-30">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-secondary rounded-full z-50"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 text-white">
            <h3 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Driving measurable growth and engagement through code.
            </h3>
            <div className="flex flex-col justify-between space-y-12">
              <p className="text-xl md:text-2xl font-light text-text-muted">
                I focus on meaningful results—boosting user engagement,
                retention, and overall business impact.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-border">
                <div>
                  <p className="text-sm font-bold tracking-widest uppercase mb-2 text-text-muted">
                    Experience
                  </p>
                  <p className="text-7xl font-black text-secondary">4+</p>
                </div>
                <div>
                  <p className="text-sm font-bold tracking-widest uppercase mb-2 text-text-muted">
                    Projects
                  </p>
                  <p className="text-7xl font-black text-secondary">30+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
