export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* THE BLOB: Simulated using CSS Gradients */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="relative w-[500px] h-[500px] animate-float opacity-80">
          {/* Layer 1: Purple/Pink */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-pulse"></div>
          {/* Layer 2: Blue/Cyan */}
          <div className="absolute top-0 -right-4 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-pulse delay-75"></div>
          {/* Layer 3: Yellow/Orange highlight */}
          <div className="absolute -bottom-8 left-20 w-full h-full bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-pulse delay-150"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 space-y-4">
        <p className="text-lg text-gray-600 font-medium tracking-wide">
          Hi! Im <span className="text-black font-semibold">Nimesh</span>
        </p>

        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-[1.1] tracking-tight">
          Full-stack Developer
          <br />
          <span className="text-gray-500 font-light italic">
            UI & UX Designer.
          </span>
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <span className="text-sm text-gray-500 lowercase tracking-widest">
          scroll down
        </span>
      </div>
    </section>
  );
}
