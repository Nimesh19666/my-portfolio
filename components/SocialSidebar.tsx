import { Github, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function SocialSidebar() {
  return (
    // Updated layout: Spans full height, aligns items vertically between top/center/bottom
    <div className="fixed left-12 top-0 bottom-0 hidden md:flex flex-col justify-between items-center py-12 z-40">
      {/* Top empty spacer to balance layout */}
      <div></div>

      {/* --- NEW ELEMENT: Vertical Line with Dots --- */}
      <div className="flex flex-col items-center gap-4">
        {/* Top Dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-yale"></div>
        {/* The long central line */}
        <div className="w-[1px] h-[30vh] bg-yale/30"></div>
        {/* Bottom Dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-yale"></div>
      </div>
      {/* ------------------------------------------- */}

      {/* Existing Social Icons Section at bottom */}
      <div className="flex flex-col gap-6 items-center">
        <Link
          href="#"
          className="text-yale/60 hover:text-yale hover:-translate-y-1 transition-all duration-300"
        >
          <Linkedin size={22} />
        </Link>
        <Link
          href="#"
          className="text-yale/60 hover:text-yale hover:-translate-y-1 transition-all duration-300"
        >
          <MessageCircle size={22} />
        </Link>
        <Link
          href="#"
          className="text-yale/60 hover:text-yale hover:-translate-y-1 transition-all duration-300"
        >
          <Github size={22} />
        </Link>

        {/* The small bottom line connects to edge */}
        <div className="h-16 w-[1px] bg-yale/30 mt-2"></div>
      </div>
    </div>
  );
}
