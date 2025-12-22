import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/Footer";
import MarqueeSection from "@/components/about/MarqueeSection";
import BioSection from "@/components/about/BioSection";
import ExpertiseSection from "@/components/about/ExpertiseSection";
import ImpactSection from "@/components/about/ImpactSection";
import TechArsenalSection from "@/components/about/TechArsenalSection"; // <--- IMPORT THIS
import CrossScroll from "@/components/home/CrossScroll";

export const metadata: Metadata = {
  title: "About | Nimesh Portfolio",
  description:
    "Full Stack Developer focused on scalable SaaS and AI solutions.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background text-white cursor-none md:cursor-auto selection:bg-secondary selection:text-background overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      <div
        style={{ paddingTop: "150px" }}
        className="px-6 md:px-12 mx-auto pb-24 max-w-[1800px]"
      >
        <h1 className="text-7xl md:text-9xl font-medium tracking-tight mb-16">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row gap-12">
          <p className="text-xl md:text-3xl text-text-muted font-light max-w-6xl leading-relaxed">
            I’m a full-stack developer who enjoys building things that genuinely
            make life easier for users and businesses. Most of my work sits at
            the intersection of AI, SaaS, and interactive 3D experiences. I
            focus heavily on real results—cutting response times and automating
            manual workflows.
          </p>
          <div className="hidden md:block flex-1"></div>
        </div>
      </div>

      <MarqueeSection />

      <BioSection />

      <ExpertiseSection />

      <ImpactSection />

      {/* NEW SECTION ADDED HERE */}
      <TechArsenalSection />
      <CrossScroll />

      <Footer />
    </main>
  );
}
