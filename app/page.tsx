import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import SocialSidebar from "@/components/home/SocialSidebar";
import RightNameSidebar from "@/components/home/RightNameSidebar";
import CustomCursor from "@/components/home/CustomCursor";
import About from "@/components/home/About";
import Story from "@/components/home/Story";
import Services from "@/components/home/Services";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import CrossScroll from "@/components/home/CrossScroll";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    // FIX: Changed 'bg-white' to 'bg-background' so the dark theme works
    <main className="relative min-h-screen overflow-x-hidden cursor-none md:cursor-auto bg-background">
      <CustomCursor />
      <Navbar />
      <SocialSidebar />
      <RightNameSidebar />
      <Hero />
      <About />
      <Story />
      <Services />
      <Experience />
      <CrossScroll />
      <Projects />
      <Footer />
    </main>
  );
}
