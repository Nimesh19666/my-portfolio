"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "FinTech Platform",
    title: "Real-Time Stock Market",
    img: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1600&auto=format&fit=crop",
    desc: "Built with Next.js 14, WebSockets, and PostgreSQL. Features sub-millisecond live price updates, OAuth via Better Auth, and background job processing with Inngest.",
  },
  {
    id: 2,
    category: "SaaS Product",
    title: "Enterprise Admin Panel",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    desc: "A production-ready MERN dashboard with Redis caching that reduced API latency by 40%. Implements strict RBAC and JWT authentication for secure data handling.",
  },
  {
    id: 3,
    category: "Real-Time Communication",
    title: "Scalable Chat App",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    desc: "Engineered using Socket.io and Redis Adapter for horizontal scaling. Supports 1:1 and group messaging with Optimistic UI updates and Zustand state management.",
  },
  {
    id: 4,
    category: "Research Publication",
    title: "AI Deepfake Detection",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
    desc: "Published in IJARSCT. A DenseNet-121 & ResNet50 ensemble architecture achieving 94% accuracy and 0.991 ROC-AUC on synthetic image datasets.",
  },
];

export default function Projects() {
  return (
    <section
      id="works"
      className="bg-background px-6 md:px-20 py-24 border-t border-border"
    >
      <div className="max-w-4xl mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }} // REPEATABLE ANIMATION
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-medium text-white leading-tight"
        >
          Selected Works & <br />
          <span className="text-secondary">Technical Achievements</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }} // REPEATABLE ANIMATION
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group cursor-pointer"
          >
            <div className="mb-4 text-sm font-bold text-primary uppercase tracking-widest pl-1">
              {project.category}
            </div>

            <div className="relative overflow-hidden rounded-sm aspect-[4/3] border border-border">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.img})` }}
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500" />

              <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="text-background" size={20} />
              </div>

              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-gray-200 text-sm font-medium leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>

            <h3 className="mt-6 text-2xl md:text-3xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
              {project.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
