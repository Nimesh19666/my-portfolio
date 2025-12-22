"use client";

export default function FooterCurve() {
  return (
    <div className="relative h-[100px] w-full overflow-hidden bg-transparent">
      {/* This SVG sits at the bottom of the content.
        It is the same color as the BACKGROUND (bg-background/black) 
        but acts as an inverted curve.
      */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[100%] fill-background"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        {/* This path draws a curve. 
          Modify the 'Q' values to change the steepness.
          fill-background ensures it matches your page background color.
        */}
        <path d="M0,0 C480,100 960,100 1440,0 V100 H0 V0 Z" />
      </svg>
    </div>
  );
}
