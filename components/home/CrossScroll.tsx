"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { Sparkles } from "lucide-react";

// --- HELPER FUNCTION: Wraps value within a range (0% to -50%) ---
function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // This changes the speed based on scroll speed
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Wrap the x position so it loops infinitely between 0% and -50%
  // We assume the content is duplicated enough (4 times) to handle this loop.
  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // LOGIC: Flip direction based on scroll direction
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div className="flex whitespace-nowrap" style={{ x }}>
      {children}
    </motion.div>
  );
}

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
      {/* Strip 1: Primary Background - Moves Right by default */}
      <div className="absolute w-[120%] -rotate-3 bg-primary py-5 shadow-2xl z-10 scale-110 origin-center">
        <ParallaxText baseVelocity={-3}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center mx-4 inline-flex">
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
        </ParallaxText>
      </div>

      {/* Strip 2: Surface Background - Moves Left by default (Opposite) */}
      <div className="absolute w-[120%] rotate-3 bg-surface py-5 shadow-2xl z-20 scale-110 origin-center mix-blend-hard-light opacity-95 border-y border-border">
        <ParallaxText baseVelocity={3}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center mx-4 inline-flex">
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
        </ParallaxText>
      </div>
    </section>
  );
}
