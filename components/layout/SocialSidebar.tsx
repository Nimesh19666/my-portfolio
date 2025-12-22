import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function SocialSidebar() {
  return (
    <div className="fixed left-12 top-0 bottom-0 hidden md:flex flex-col justify-between items-center py-12 z-40">
      <div></div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
        <div className="w-[1px] h-[30vh] bg-white/20"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <Link
          href="https://www.linkedin.com/in/nimesh-gujari/"
          target="_blank"
          className="text-text-muted hover:text-primary hover:-translate-y-1 transition-all duration-300"
        >
          <Linkedin size={22} />
        </Link>
        <Link
          href="mailto:gujarinimesh@gmail.com"
          className="text-text-muted hover:text-primary hover:-translate-y-1 transition-all duration-300"
        >
          <Mail size={22} />
        </Link>
        <Link
          href="https://github.com/Nimesh19666"
          target="_blank"
          className="text-text-muted hover:text-primary hover:-translate-y-1 transition-all duration-300"
        >
          <Github size={22} />
        </Link>
        <div className="h-16 w-[1px] bg-white/20 mt-2"></div>
      </div>
    </div>
  );
}
