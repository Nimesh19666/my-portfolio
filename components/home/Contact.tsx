"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-surface py-32 px-6 md:px-12 border-t border-border"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        {/* Left: Heading */}
        <div className="flex-1 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter"
          >
            LETS <br />
            <span className="text-secondary">WORK</span> <br />
            TOGETHER
          </motion.h2>
        </div>

        {/* Right: Info */}
        <div className="flex-1 flex flex-col justify-end space-y-12">
          <p className="text-xl text-text-muted font-light leading-relaxed">
            I am currently open to full-time opportunities and freelance
            projects. Whether you need a scalable SaaS platform or an AI
            integration, lets talk.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:gujarinimesh@gmail.com"
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-background transition-all duration-300">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">
                  Email
                </p>
                <p className="text-xl text-white font-medium">
                  gujarinimesh@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+919136668654"
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-background transition-all duration-300">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">
                  Phone
                </p>
                <p className="text-xl text-white font-medium">+91 9136668654</p>
              </div>
            </a>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-secondary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">
                  Location
                </p>
                <p className="text-xl text-white font-medium">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
