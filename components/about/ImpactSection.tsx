"use client";
import { motion } from "framer-motion";

const impacts = [
  {
    value: "40%",
    title: "Performance Improvement",
    desc: "Reduced AI response latency through optimized RAG retrieval and concurrency patterns.",
  },
  {
    value: "80%",
    title: "Workflow Automation",
    desc: "Decreased manual lead processing time with background job automation and queueing.",
  },
  {
    value: "10+",
    title: "Production Applications",
    desc: "Successfully deployed and maintained scalable SaaS products across various industries.",
  },
  {
    value: "100%",
    title: "Type-Safe Architecture",
    desc: "End-to-end type safety with TypeScript, tRPC, and modern tooling for robust codebases.",
  },
];

export default function ImpactSection() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-[1800px] mx-auto relative">
      {/* Section Header */}
      <div className="text-center mb-20 space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white tracking-tight"
        >
          Proven Impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-text-muted font-light max-w-2xl mx-auto"
        >
          Throughout my career, I've delivered measurable results that matter.
        </motion.p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {impacts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-surface border border-border p-8 rounded-xl hover:border-secondary transition-all duration-300 group"
          >
            <div className="flex flex-col gap-4">
              {/* Big Number Value - Using accent color for pop */}
              <span className="text-6xl font-black text-secondary leading-none tracking-tighter group-hover:scale-105 transition-transform duration-300 origin-left">
                {item.value}
              </span>

              <h3 className="text-xl font-bold text-white">{item.title}</h3>

              <p className="text-sm text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
