export default function RightNameSidebar() {
  return (
    // Fixed position on the right, centered vertically
    <div className="fixed right-12 top-0 bottom-0 hidden md:flex items-center justify-center z-40">
      {/* rotate-90: Turns text sideways reading bottom-to-top
          whitespace-nowrap: Prevents wrapping onto two lines
          tracking-[0.3em]: Adds that wide, premium letter spacing
        */}
      <h2 className="text-yale/50 font-bold tracking-[0.3em] uppercase text-xs rotate-90 origin-center whitespace-nowrap select-none">
        Nimesh Anand Gujari
      </h2>
    </div>
  );
}
