"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { X, Menu, Github, Linkedin, MessageCircle, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const { scrollY } = useScroll();

  // 1. DETECT SCROLL POSITION
  // We hide the standard nav and show the floating button after 500px (approx half hero)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setShowFloatingMenu(true);
    } else {
      setShowFloatingMenu(false);
    }
  });

  return (
    <>
      {/* ---------------------------------------------------- */}
      {/* 1. INITIAL NAVBAR (Visible only at the top)          */}
      {/* ---------------------------------------------------- */}
      <motion.nav
        // Hide this navbar when we scroll down
        animate={{
          y: showFloatingMenu ? -100 : 0,
          opacity: showFloatingMenu ? 0 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 w-full flex justify-between items-center p-8 z-40 pointer-events-none" // pointer-events-none lets clicks pass through if hidden
      >
        <div className="text-4xl font-black tracking-tighter text-yale pointer-events-auto cursor-pointer">
          N.
        </div>

        <div className="flex gap-8 text-sm font-semibold tracking-wide text-yale/80 pointer-events-auto">
          <Link href="/" className="hover:text-pacific transition">
            Home
          </Link>
          <Link href="#about" className="hover:text-pacific transition">
            About
          </Link>
          <Link href="#works" className="hover:text-pacific transition">
            Works
          </Link>
        </div>
      </motion.nav>

      {/* ---------------------------------------------------- */}
      {/* 2. FLOATING MENU BUTTON (Appears after scroll)       */}
      {/* ---------------------------------------------------- */}
      <AnimatePresence>
        {showFloatingMenu && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed top-8 right-8 w-16 h-16 bg-gray-200/50 backdrop-blur-md rounded-full flex items-center justify-center z-50 hover:bg-yale hover:text-white transition-colors duration-300 shadow-lg"
          >
            <Menu size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ---------------------------------------------------- */}
      {/* 3. FULL SCREEN MENU OVERLAY (The Dark Side Menu)     */}
      {/* ---------------------------------------------------- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            />

            {/* Side Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-[#1a1a1a] text-white z-[60] p-10 flex flex-col justify-between shadow-2xl"
            >
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:rotate-90 transition-transform duration-300"
                >
                  <X size={32} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-6 mt-10">
                {["Home", "About", "Works", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-bold hover:text-gray-400 hover:pl-4 transition-all duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Footer Socials */}
              <div className="border-t border-gray-700 pt-8">
                <h4 className="text-xs font-bold text-gray-500 mb-4 tracking-widest uppercase">
                  Socials
                </h4>
                <div className="flex gap-6 text-sm text-gray-400">
                  <a href="#" className="hover:text-white transition">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-white transition">
                    WhatsApp
                  </a>
                  <a href="#" className="hover:text-white transition">
                    Email
                  </a>
                  <a href="#" className="hover:text-white transition">
                    Github
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
