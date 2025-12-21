"use client";
import { motion } from "framer-motion";

const expertise = [
  {
    num: "01",
    title: "Full-Stack Architecture",
    desc: "I architect end-to-end solutions using modern tech stacks—from Node.js backends with PostgreSQL/MongoDB to React and Next.js frontends. Whether building multi-tenant SaaS platforms, real-time dashboards with WebSockets, or RESTful APIs with tRPC, I ensure type-safe, scalable architecture that supports rapid growth and seamless deployment.",
  },
  {
    num: "02",
    title: "AI & Advanced Integration",
    desc: "I specialize in integrating AI capabilities that deliver real value—implementing RAG systems with vector embeddings, building LangChain workflows, and connecting OpenAI APIs for intelligent automation. Beyond AI, I excel at complex integrations: Stripe/PayPal payment processing, Auth0 authentication, and third-party API orchestration.",
  },
  {
    num: "03",
    title: "3D & Interactive Experiences",
    desc: "I create immersive web experiences using Three.js, React Three Fiber, and advanced techniques like Gaussian Splatting. From interactive 3D virtual tours to shader-based animations with GSAP, I transform standard websites into engaging, memorable digital experiences. I optimize WebGL performance for cross-device compatibility.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-[1800px] mx-auto">
      {/* FIX: Added a custom class 'expertise-grid' and a <style> tag below.
         This FORCES the browser to use 3 columns on desktop, even if Tailwind fails.
      */}
      <div className="expertise-grid grid gap-16 md:gap-12">
        {expertise.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="group flex flex-col justify-start"
          >
            {/* The Line Separator */}
            <div className="w-full h-[1px] bg-white/20 mb-8 group-hover:bg-secondary transition-colors duration-500" />

            <div className="flex flex-col gap-4">
              <span className="text-sm font-mono text-text-muted">
                {item.num}
              </span>

              <h3 className="text-2xl md:text-3xl font-medium text-white group-hover:text-secondary transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-lg text-text-muted leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MANUAL CSS OVERRIDE TO FORCE LEFT-TO-RIGHT LAYOUT */}
      <style jsx>{`
        .expertise-grid {
          display: grid;
          grid-template-columns: 1fr; /* Default to mobile stack */
        }
        @media (min-width: 768px) {
          .expertise-grid {
            grid-template-columns: repeat(
              3,
              1fr
            ); /* Force 3 columns on desktop */
          }
        }
      `}</style>
    </section>
  );
}
