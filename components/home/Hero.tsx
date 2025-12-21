export default function Hero() {
  return (
    // FIX: Ensure bg-background is used here, NOT bg-white
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="relative w-[600px] h-[600px] animate-float opacity-80">
          <div className="absolute top-0 left-0 w-80 h-80 bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
        </div>
      </div>

      <div className="text-center z-10 space-y-4">
        <p className="text-lg text-text-muted font-medium tracking-wide"></p>

        <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.1] tracking-tight">
          Hi! Im <span className="text-white font-semibold">Nimesh</span>
          <br />
          <span className="text-text-muted font-light italic">
            Full-stack Developer
          </span>
        </h1>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <span className="text-sm text-text-muted lowercase tracking-widest">
          scroll down
        </span>
      </div>
    </section>
  );
}
