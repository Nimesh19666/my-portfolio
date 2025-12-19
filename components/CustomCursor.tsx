"use client"; // This must be a client component to track mouse movement
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to move the cursor
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        // We use transform for high performance
        // -translate-x-1/2 centers the circle on the mouse tip
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-10 h-10 border-2 border-yale rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-75 ease-out will-change-transform"
      style={{
        // Start hidden to avoid a "jump" on load
        transform: "translate(-100px, -100px)",
      }}
    />
  );
}
