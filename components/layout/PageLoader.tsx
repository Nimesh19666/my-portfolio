"use client";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

const slideUp: Variants = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: {
      duration: 1.5, // INCREASED: Slower, smoother lift (was 0.8)
      ease: [0.76, 0, 0.24, 1], // Premium easing
      delay: 0.5, // INCREASED: Holds the curtain longer so you can read the text
    },
  },
};

const opacity: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1, // Full opacity
    transition: { duration: 0.2, delay: 0.2 },
  },
};

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const getDisplayName = (path: string) => {
    if (path === "/") return "Home";
    const name = path.substring(1);
    if (name.includes("#")) {
      return (
        name.split("#")[0].charAt(0).toUpperCase() + name.split("#")[0].slice(1)
      );
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const displayName = getDisplayName(pathname);

  return (
    <>
      <motion.div
        variants={slideUp}
        initial="initial"
        animate="exit"
        className="fixed inset-0 w-full h-screen bg-background z-[9999] flex items-center justify-center pointer-events-none"
      >
        {displayName && (
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="text-white text-5xl md:text-7xl font-bold tracking-tighter absolute z-[10000]"
          >
            <span className="w-3 h-3 bg-secondary rounded-full inline-block mr-4 mb-2 animate-pulse" />
            {displayName}
          </motion.p>
        )}
      </motion.div>
      {children}
    </>
  );
}
