"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "AI Assistant",
    title: "VexLogic AI",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Business SaaS",
    title: "NexGen Dashboard",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "3D Visualization",
    title: "Architectural Flow",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "E-Commerce",
    title: "Luxe Market",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    // Simple vertical section, matching background color
    <section className="bg-[#F3F4F6] px-6 md:px-20 py-24">
      {/* HEADER */}
      <div className="max-w-4xl mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-medium text-yale leading-tight"
        >
          Discover my latest work and creative <br />
          solutions that bring ideas to life
        </motion.h2>
      </div>

      {/* GRID LAYOUT (2 Columns) */}
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
            {/* Category Label */}
            <div className="mb-4 text-sm font-bold text-gray-400 uppercase tracking-widest pl-1">
              {project.category}
            </div>

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.img})` }}
              />

              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="text-yale" size={20} />
              </div>
            </div>

            {/* Title (Below Image) */}
            <h3 className="mt-6 text-2xl md:text-3xl font-bold text-yale group-hover:text-frozen transition-colors duration-300">
              {project.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
