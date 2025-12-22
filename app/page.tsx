import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/layout/SocialSidebar";
import RightNameSidebar from "@/components/layout/RightNameSidebar";
import CustomCursor from "@/components/layout/CustomCursor";
import About from "@/components/home/About";
import Story from "@/components/home/Story";
import Services from "@/components/home/Services";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import CrossScroll from "@/components/home/CrossScroll";
import Hero from "@/components/home/Hero";
import Contact from "@/components/home/Contact"; // Imported Contact
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
      <Contact /> {/* Added Contact Section here */}
      <Footer />
    </main>
  );
}
