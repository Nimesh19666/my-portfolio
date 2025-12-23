"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    id: 1,
    company: "Kayana",
    role: "Frontend Developer",
    period: "Dec 2024 - Present",
    desc: "Architecting a scalable Partner Admin Panel for 50+ restaurants using React.js and Redux Toolkit. Engineered a white-label Gym Management Platform with RBAC and boosted dashboard performance by 25% via code splitting and memoization.",
  },
  {
    id: 2,
    company: "Acuradyne Sine (IIT Bombay)",
    role: "Software Developer Intern",
    period: "Jun 2024 - Oct 2024",
    desc: "Developed FISYO Healthcare Dashboard using Dash/Python on AWS with 95% precision for patient data analysis. Deployed full-stack apps on AWS EC2 with Nginx reverse proxy and automated CI/CD pipelines for zero-downtime updates.",
  },
  {
    id: 3,
    company: "Google Developer Student Clubs",
    role: "Core Team Member",
    period: "Leadership",
    desc: "Organized technical workshops and hackathons for 200+ students. Mentored peers in web development technologies (React, Node.js), significantly improving the club’s overall project output quality.",
  },
];

export default function Experience() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative bg-surface text-white py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // REPEATABLE
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-center mb-32 tracking-tight"
        >
          My <span className="text-secondary">Journey</span>
        </motion.h2>

        <div className="relative flex flex-col gap-32">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row items-center relative ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4 md:px-12 text-center md:text-right">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }} // REPEATABLE
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4 max-w-md"
                  >
                    <h3 className="text-4xl font-bold tracking-tight">
                      {exp.company}
                    </h3>
                    <p className="text-secondary font-mono text-sm tracking-widest uppercase font-bold">
                      {exp.role}
                    </p>
                    <p className="text-text-muted leading-relaxed text-base">
                      {exp.desc}
                    </p>
                    <p className="text-xs text-primary font-bold tracking-widest uppercase mt-2">
                      {exp.period}
                    </p>
                  </motion.div>
                </div>

                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 z-20 hidden md:flex">
                  <div className="w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_var(--color-secondary)]" />
                  <div className="absolute inset-0 w-full h-full bg-secondary rounded-full animate-ping opacity-30" />
                </div>

                <div className="w-full md:w-1/2 hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>

      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50 z-0"
        viewBox="0 0 1440 1800"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 720 0 
             C 720 200, 200 400, 200 600 
             C 200 800, 1240 1000, 1240 1200 
             C 1240 1400, 720 1600, 720 1800"
          fill="none"
          stroke="var(--color-secondary)"
          strokeWidth="4"
          strokeLinecap="round"
          style={{ pathLength }}
          className="drop-shadow-[0_0_10px_var(--color-secondary)]"
        />
      </svg>
    </section>
  );
}
