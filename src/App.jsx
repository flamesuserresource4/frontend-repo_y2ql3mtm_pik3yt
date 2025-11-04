import Hero from './components/Hero';
import About from './components/About';
import ProjectsAndCertificates from './components/ProjectsAndCertificates';
import Timeline from './components/Timeline';
import { Home, User, Award, Layers } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 font-extrabold tracking-tight">
            <span className="inline-block w-8 h-8 rounded-lg bg-slate-900" />
            <span>My Portfolio</span>
          </a>
          <nav className="hidden sm:flex items-center gap-5 text-sm font-semibold">
            <a href="#home" className="hover:text-slate-600 inline-flex items-center gap-1"><Home className="w-4 h-4" />Home</a>
            <a href="#about" className="hover:text-slate-600 inline-flex items-center gap-1"><User className="w-4 h-4" />About</a>
            <a href="#projects" className="hover:text-slate-600 inline-flex items-center gap-1"><Layers className="w-4 h-4" />Projects</a>
            <a href="#timeline" className="hover:text-slate-600 inline-flex items-center gap-1"><Award className="w-4 h-4" />Journey</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <ProjectsAndCertificates />
        <Timeline />
      </main>

      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} My Portfolio. Crafted with a sketch & paper vibe.</p>
          <a href="#home" className="text-sm font-semibold underline">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
