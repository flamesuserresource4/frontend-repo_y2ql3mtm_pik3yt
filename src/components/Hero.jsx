import Spline from '@splinetool/react-spline';
import { Camera, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/40 to-white/90" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="inline-flex items-center gap-2 text-slate-700 bg-white/70 backdrop-blur rounded-full px-4 py-2 border border-slate-200 shadow-sm">
            <Camera className="w-4 h-4" />
            <span className="text-xs font-medium tracking-wide">Creative • Technology • Minimal</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight text-slate-900">
            Capturing ideas with a sketch-and-paper soul
          </h1>
          <p className="mt-4 max-w-2xl text-slate-700 text-base sm:text-lg">
            I’m a developer and creator who blends design, code, and photography to craft clean, modern experiences.
            Explore my work, journey, and achievements below.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl shadow hover:bg-slate-800 transition">
              <Sparkles className="w-4 h-4" />
              <span className="font-semibold">View Projects</span>
            </a>
            <a href="#about" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition">
              <span className="font-semibold">About Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
