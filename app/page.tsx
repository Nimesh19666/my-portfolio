import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialSidebar from "@/components/SocialSidebar";
import RightNameSidebar from "@/components/RightNameSidebar";
import CustomCursor from "@/components/CustomCursor";
import About from "@/components/About";
import Story from "@/components/Story";
import Services from "@/components/Services";
import Projects from "@/components/Projects"; // Import here

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden cursor-none md:cursor-auto bg-white">
      <CustomCursor />
      <Navbar />
      <SocialSidebar />
      <RightNameSidebar />
      <Hero />
      <About />
      <Story />
      <Services />
      <Projects /> {/* The new horizontal scroll section */}
    </main>
  );
}
