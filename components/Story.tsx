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

  // Animation values
  const width = useTransform(scrollYProgress, [0, 1], ["70%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const pathLength = useTransform(imageScrollProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] bg-white pt-20 pb-0 overflow-hidden"
    >
      <motion.div
        style={{ width: width, borderRadius: borderRadius }}
        className="mx-auto bg-[#F3F4F6] overflow-hidden relative z-10 flex flex-col origin-top"
      >
        {/* A. MARQUEE SECTION */}
        <div className="py-12 bg-[#F3F4F6] border-b border-gray-200">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            className="whitespace-nowrap flex gap-12 items-center"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-8 opacity-80">
                <h2 className="text-[7vw] font-black uppercase text-yale leading-none tracking-tighter">
                  Full Stack Developer
                </h2>
                <div className="w-[2vw] h-[2vw] rounded-full bg-frozen" />
                <h2 className="text-[7vw] font-black uppercase text-gray-300 leading-none tracking-tighter">
                  UI & UX Designer
                </h2>
                <MoveRight className="text-yale w-[5vw] h-[5vw]" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* B. IMAGE SECTION */}
        <div ref={imageRef} className="relative w-full h-[100vh]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale contrast-125"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1900&auto=format&fit=crop')",
            }}
          />
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20">
            {/* UPDATED PATH: Ends at 50% (Center) to match Services */}
            <motion.path
              d="M 600 0 
                 Q 600 400, 300 600 
                 T 50% 100%"
              fill="none"
              stroke="var(--color-frozen)"
              strokeWidth="12"
              strokeLinecap="round"
              style={{ pathLength }}
              className="drop-shadow-[0_0_10px_rgba(190,233,232,0.8)]"
            />
          </svg>
        </div>

        {/* D. TEXT & STATS */}
        <div className="bg-[#F3F4F6] px-8 py-24 md:px-20 relative z-30">
          {/* Connecting Dot at the bottom center */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-frozen rounded-full z-50"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 text-yale">
            <h3 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Driving measurable growth and engagement through code.
            </h3>
            <div className="flex flex-col justify-between space-y-12">
              <p className="text-xl md:text-2xl font-light opacity-80">
                I focus on meaningful results—boosting user engagement,
                retention, and overall business impact.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-gray-300">
                <div>
                  <p className="text-sm font-bold tracking-widest uppercase mb-2 opacity-50">
                    Experience
                  </p>
                  <p className="text-7xl font-black">4+</p>
                </div>
                <div>
                  <p className="text-sm font-bold tracking-widest uppercase mb-2 opacity-50">
                    Projects
                  </p>
                  <p className="text-7xl font-black">30+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
