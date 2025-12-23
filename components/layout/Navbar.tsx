"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { X, Menu } from "lucide-react";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const { scrollY } = useScroll();

  const lenis = useLenis();
  const pathname = usePathname();
  const router = useRouter();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show floating menu button only after scrolling 400px
    setShowFloatingMenu(latest > 400);
  });

  const navLinks = [
    { label: "Home", href: "/", targetId: "hero" },
    { label: "About", href: "/about", targetId: null },
    { label: "Works", href: "/#works", targetId: "works" },
    { label: "Contact", href: "/#contact", targetId: "contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nimesh-gujari/" },
    { name: "GitHub", url: "https://github.com/Nimesh19666" },
    { name: "Email", url: "mailto:gujarinimesh@gmail.com" },
  ];

  const handleNavigation = (
    e: React.MouseEvent,
    href: string,
    targetId: string | null
  ) => {
    e.preventDefault();
    setIsOpen(false);

    // 1. If it's the About page, just go there normally
    if (href === "/about") {
      router.push("/about");
      return;
    }

    // 2. If we are NOT on home page, push to home
    if (pathname !== "/") {
      router.push(href);
      return;
    }

    // 3. If we are on Home page and clicking Home/Logo, scroll to top
    if (targetId === "hero") {
      if (lenis) lenis.scrollTo(0, { duration: 1.5 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 4. Handle section scrolling (Works/Contact)
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        if (lenis) {
          lenis.scrollTo(element, { duration: 1.5 });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      {/* FIX: Increased z-index to z-[100] so it sits above Hero animations.
         Removed pointer-events-none from container to simplify click detection.
      */}
      <motion.nav
        animate={{
          y: showFloatingMenu ? -100 : 0,
          opacity: showFloatingMenu ? 0 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 w-full flex justify-between items-center p-8 z-[100]"
      >
        {/* LOGO FIX: Added onClick handler */}
        <Link
          href="/"
          onClick={(e) => handleNavigation(e, "/", "hero")}
          className="text-4xl font-black tracking-tighter text-white cursor-pointer hover:scale-105 transition-transform"
        >
          N.
        </Link>

        {/* LINKS FIX: Ensure z-index matches and cursor is pointer */}
        <div className="flex gap-8 text-sm font-semibold tracking-wide text-text-muted">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href, link.targetId)}
              className="hover:text-primary transition cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Floating Menu Button */}
      <AnimatePresence>
        {showFloatingMenu && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed top-8 right-8 w-16 h-16 bg-surface/50 backdrop-blur-md rounded-full flex items-center justify-center z-[100] hover:bg-primary hover:text-white text-white border border-border transition-colors duration-300 shadow-lg cursor-pointer"
          >
            <Menu size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-surface text-white z-[120] p-10 flex flex-col justify-between shadow-2xl border-l border-border"
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
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) =>
                      handleNavigation(e, item.href, item.targetId)
                    }
                    className="text-5xl font-bold text-white hover:text-primary hover:pl-4 transition-all duration-300 cursor-pointer"
                  >
                    {item.label}
                  </a>
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
