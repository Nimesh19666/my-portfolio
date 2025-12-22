"use client";
import { useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setShowFloatingMenu(true);
    } else {
      setShowFloatingMenu(false);
    }
  });

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Works", href: "/#works" }, // Updated Link
    { label: "Contact", href: "/#contact" }, // Updated Link
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nimesh-gujari/" },
    { name: "GitHub", url: "https://github.com/Nimesh19666" },
    { name: "Email", url: "mailto:gujarinimesh@gmail.com" },
  ];

  return (
    <>
      <motion.nav
        animate={{
          y: showFloatingMenu ? -100 : 0,
          opacity: showFloatingMenu ? 0 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 w-full flex justify-between items-center p-8 z-40 pointer-events-none"
      >
        <Link
          href="/"
          className="text-4xl font-black tracking-tighter text-white pointer-events-auto cursor-pointer"
        >
          N.
        </Link>

        <div className="flex gap-8 text-sm font-semibold tracking-wide text-text-muted pointer-events-auto">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-primary transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.nav>

      <AnimatePresence>
        {showFloatingMenu && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed top-8 right-8 w-16 h-16 bg-surface/50 backdrop-blur-md rounded-full flex items-center justify-center z-50 hover:bg-primary hover:text-white text-white border border-border transition-colors duration-300 shadow-lg cursor-pointer"
          >
            <Menu size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-surface text-white z-[60] p-10 flex flex-col justify-between shadow-2xl border-l border-border"
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:rotate-90 transition-transform duration-300 text-white cursor-pointer"
                >
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-bold text-white hover:text-primary hover:pl-4 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-border pt-8">
                <h4 className="text-xs font-bold text-text-muted mb-4 tracking-widest uppercase">
                  Socials
                </h4>
                <div className="flex gap-6 text-sm text-text-muted">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
