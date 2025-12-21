"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "Admin Dashboard",
    title: "Enterprise MERN Panel",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    desc: "React, Node.js, Redis, Docker, MongoDB. Features RBAC, Server-Side Pagination, and 40% reduced API latency.",
  },
  {
    id: 2,
    category: "FinTech",
    title: "Live Stock Platform",
    img: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1600&auto=format&fit=crop",
    desc: "Next.js 14, WebSockets, TypeScript. Sub-millisecond price updates with Better Auth and Inngest background jobs.",
  },
  {
    id: 3,
    category: "Communication",
    title: "Real-Time Chat App",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    desc: "MERN, Socket.io, Redis Adapter. Scalable infrastructure supporting 1:1 and group messaging with optimistic UI.",
  },
  {
    id: 4,
    category: "Deep Learning Research",
    title: "AI Image Detection",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
    desc: "Published in IJARSCT. DenseNet-121 & ResNet50 ensemble achieving 94% accuracy and 0.991 ROC-AUC.",
  },
];

export default function Projects() {
  return (
    <section className="bg-background px-6 md:px-20 py-24 border-t border-border">
      <div className="max-w-4xl mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-medium text-white leading-tight"
        >
          Discover my latest work and creative <br />
          solutions that bring ideas to life
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
