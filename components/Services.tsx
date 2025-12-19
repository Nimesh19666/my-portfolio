"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Palette, Box, Network } from "lucide-react";

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import GSAP only on client side
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

      gsap.registerPlugin(ScrollTrigger);

      if (cardsRef.current && sectionRef.current) {
        const cards = cardsRef.current;
        const totalScroll = cards.scrollWidth - window.innerWidth;

        gsap.to(cards, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${totalScroll}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      }
    };

    loadGSAP();
  }, []);

  const services = [
    {
      icon: Code,
      number: "01",
      title: "Full Stack Development",
      description:
        "Building scalable and high-performance web applications using Next.js, React, Node.js, and TypeScript, with robust backend architectures, secure RESTful APIs, and clean code practices.",
    },
    {
      icon: Palette,
      number: "02",
      title: "UI/UX Design & Frontend",
      description:
        "Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion. Creating intuitive experiences with clean design systems and pixel-perfect implementations.",
    },
    {
      icon: Box,
      number: "03",
      title: "SaaS Platform Development",
      description:
        "Developing end-to-end SaaS solutions with subscription systems, Stripe billing, and multi-tenant management. Ensuring scalability and secure user management.",
    },
    {
      icon: Network,
      number: "04",
      title: "API & System Architecture",
      description:
        "Designing robust APIs with Prisma, PostgreSQL, and GraphQL. Building microservices, optimizing database queries, and ensuring efficient data flow across systems.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50 py-20 overflow-hidden"
    >
      {/* Hero Title */}
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight max-w-4xl">
          Transforming ideas into{" "}
          <span className="relative inline-block">
            <span className="relative z-10">exceptional</span>
            <svg
              className="absolute -top-3 -left-2 w-full h-full pointer-events-none"
              viewBox="0 0 300 80"
              style={{ width: "110%", height: "120%" }}
            >
              <motion.path
                d="M 10 40 Q 150 15, 290 40"
                fill="none"
                stroke="#c4ff61"
                strokeWidth="25"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </svg>
          </span>{" "}
          digital experiences through expertise and innovation
        </h2>
      </div>

      {/* Horizontal Scrolling Cards - Starts centered */}
      <div className="relative h-[500px]">
        <div
          ref={cardsRef}
          className="flex gap-6 items-center h-full"
          style={{ paddingLeft: "20%", paddingRight: "20%" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-[#c4ff61] flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-gray-900" strokeWidth={2} />
                </div>

                {/* Number */}
                <p className="text-sm font-semibold text-gray-400 mb-3">
                  {service.number}
                </p>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Background Snake Path */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0">
          <motion.path
            d="M 0 250 Q 400 150, 800 250 T 1600 250 Q 2000 350, 2400 250"
            fill="none"
            stroke="#c4ff61"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
