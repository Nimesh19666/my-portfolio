"use client";
import { motion } from "framer-motion";

const techData = [
  {
    title: "Languages & Frameworks",
    stack: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Fastify",
    ],
  },
  {
    title: "AI & Machine Learning",
    stack: [
      "OpenAI API",
      "LangChain",
      "RAG",
      "Google Generative AI",
      "Vector Embeddings",
    ],
  },
  {
    title: "3D & Graphics",
    stack: [
      "Three.js",
      "React Three Fiber",
      "WebGL",
      "Gaussian Splatting",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    title: "Databases & State",
    stack: [
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Drizzle ORM",
      "Redis",
      "React Query",
      "Zustand",
    ],
  },
  {
    title: "DevOps & Cloud",
    stack: [
      "Docker",
      "CI/CD",
      "Google Cloud Platform",
      "Vercel",
      "VPS",
      "Nginx",
      "Caddy",
      "PM2",
    ],
  },
  {
    title: "UI & Styling",
    stack: ["Tailwind CSS", "ShadCN UI", "Radix UI", "MUI", "Framer Motion"],
  },
];

export default function TechArsenalSection() {
  return (
    <section className="px-6 md:px-12 py-32 max-w-[1800px] mx-auto relative  mt-12">
      {/* Section Header */}
      <div className="text-center mb-24 space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight"
        >
          Technology Arsenal
        </motion.h2>
        <p className="text-xl text-text-muted font-light max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications.
        </p>
      </div>

      {/* Tech Grid - FORCED 3 COLUMNS */}
      <div className="tech-grid gap-x-12 gap-y-20">
        {techData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="space-y-6"
          >
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-white mb-6">
              {category.title}
            </h3>

            {/* Pills Container */}
            <div className="flex flex-wrap gap-3">
              {category.stack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-5 py-2.5 rounded-full bg-surface border border-border text-sm md:text-base text-text-muted font-medium transition-all duration-300 hover:border-secondary hover:text-white hover:-translate-y-1 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* MANUAL CSS OVERRIDE to guarantee 3 columns */}
      <style jsx>{`
        .tech-grid {
          display: grid;
          grid-template-columns: 1fr; /* Mobile: 1 Column */
        }
        @media (min-width: 768px) {
          .tech-grid {
            grid-template-columns: repeat(3, 1fr); /* Desktop: 3 Columns */
            align-items: start;
          }
        }
      `}</style>
    </section>
  );
}
