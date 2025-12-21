"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { LayoutTemplate, Server, Zap, CloudCog } from "lucide-react"; // Updated icons
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const totalScroll = cards!.scrollWidth - window.innerWidth;

      gsap.to(cards, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Content derived directly from your Resume
  const services = [
    {
      icon: LayoutTemplate,
      number: "01",
      title: "Frontend Architecture",
      // Based on Kayana experience & Skills
      description:
        "Architecting scalable, pixel-perfect UIs using React.js, Next.js 14, and TailwindCSS. Expert in performance optimization (Lazy Loading, Code Splitting) and complex state management with Redux Toolkit & Zustand.",
    },
    {
      icon: Zap,
      number: "02",
      title: "Real-Time Systems",
      // Based on Stock Market & Chat App projects
      description:
        "Engineering sub-millisecond real-time applications using WebSockets and Socket.io. Experience building live financial platforms and scalable chat infrastructure with Redis adapters and Optimistic UI.",
    },
    {
      icon: Server,
      number: "03",
      title: "Backend Engineering",
      // Based on Enterprise Admin Dashboard & Skills
      description:
        "Developing robust RESTful and GraphQL APIs with Node.js and Express. Implementing secure authentication (JWT/OAuth), Role-Based Access Control (RBAC), and high-performance caching strategies using Redis.",
    },
    {
      icon: CloudCog,
      number: "04",
      title: "Cloud & DevOps",
      // Based on Acuradyne experience & Skills
      description:
        "Deploying full-stack applications on AWS (EC2, S3) with Nginx reverse proxies. Managing Docker containerization, CI/CD pipelines for zero-downtime updates, and optimizing PostgreSQL/MongoDB schemas.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-background pt-10 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight max-w-4xl">
          Transforming ideas into{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-secondary">exceptional</span>
            <svg
              className="absolute -top-3 -left-2 w-full h-full pointer-events-none"
              viewBox="0 0 300 80"
              style={{ width: "110%", height: "120%" }}
            >
              <motion.path
                d="M 10 40 Q 150 15, 290 40"
                fill="none"
                stroke="var(--color-secondary)"
                strokeWidth="25"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="opacity-50"
              />
            </svg>
          </span>{" "}
          digital experiences.
        </h2>
      </div>

      <div className="relative h-[450px] flex items-center overflow-hidden">
        <div
          ref={cardsRef}
          className="flex gap-6 items-center h-full pl-[10vw] pr-[10vw] w-max"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] bg-surface border border-border rounded-xl p-8 hover:border-primary transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center mb-6 text-secondary">
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>

                <p className="text-sm font-semibold text-text-muted mb-3">
                  {service.number}
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {service.title}
                </h3>

                <p className="text-text-muted leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0">
          <motion.path
            d="M 0 250 Q 400 150, 800 250 T 1600 250 Q 2000 350, 2400 250"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
