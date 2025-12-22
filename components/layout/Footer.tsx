"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // CURVE LOGIC: Down to Up (Valley -> Flat)
  const curveControlY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const smoothCurve = useSpring(curveControlY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gujarinimesh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/#works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nimesh-gujari/" },
    { name: "GitHub", url: "https://github.com/Nimesh19666" },
    { name: "WhatsApp", url: "https://wa.me/919136668654" },
    { name: "Email", url: "mailto:gujarinimesh@gmail.com" },
  ];

  return (
    <footer
      ref={containerRef}
      className="relative bg-surface text-white pt-20 pb-10 overflow-visible mt-20"
    >
      {/* SVG Container - Reverse Curtain (Down to Up) */}
      <div className="absolute top-0 left-0 w-full h-[100px] -translate-y-[99%] overflow-hidden z-10 leading-none pointer-events-none">
        <svg
          className="w-full h-full block fill-surface"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d={useTransform(
              smoothCurve,
              (val) => `M0,0 Q720,${val} 1440,0 L1440,100 L0,100 Z`
            )}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          {/* LEFT SIDE: Links & Socials */}
          <div className="flex gap-16 md:gap-32 flex-wrap">
            {/* Navigation Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">
                Links
              </h4>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg text-white hover:text-primary transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">
                Socials
              </h4>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white hover:text-primary transition-colors cursor-pointer"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Time & Email Button */}
          <div className="flex flex-col items-end gap-6">
            <div className="flex items-center gap-4">
              <div className="text-right hidden md:block mr-8">
                <p className="text-text-muted text-xs font-bold uppercase tracking-widest">
                  Local Time
                </p>
                <p className="text-white font-mono">{time} IST</p>
              </div>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="px-6 py-3 rounded-full border border-border hover:bg-white hover:text-background transition-all duration-300 flex items-center gap-2 group min-w-[240px] justify-center"
              >
                <span className="text-sm font-medium">
                  {copied ? "Copied!" : "gujarinimesh@gmail.com"}
                </span>
                {copied ? (
                  <Check size={14} className="text-green-600" />
                ) : (
                  <Copy
                    size={14}
                    className="group-hover:scale-110 transition"
                  />
                )}
              </button>

              {/* Mailto Button */}
              <a
                href="mailto:gujarinimesh@gmail.com"
                className="w-12 h-12 rounded-full bg-secondary text-background flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
            <p className="text-text-muted text-xs mt-2">2025 © Edition</p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="flex justify-center my-12 relative">
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] animate-spin-slow blur-xl opacity-50"></div>
            <div className="absolute inset-2 bg-surface rounded-[1.5rem] flex items-center justify-center border border-white/10 shadow-2xl z-10 overflow-hidden">
              <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Big Text */}
        <div className="relative flex justify-center items-end mt-12 overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[18vw] font-black leading-none text-white tracking-tighter select-none"
          >
            NIMESH
          </motion.h1>
        </div>
      </div>
    </footer>
  );
}
