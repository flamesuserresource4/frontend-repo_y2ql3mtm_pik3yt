import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-slate-900 text-white"><User className="w-5 h-5" /></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white border-2 border-slate-900 rounded-2xl p-6 shadow-[6px_6px_0_0_#0f172a]">
            <p className="text-slate-700 leading-relaxed">
              I’m a multidisciplinary developer focused on building thoughtful digital products. My style blends
              a sketch-and-paper sensibility with modern interfaces: simple structure, strong contrast, and minimal
              ornamentation. I care about clarity, accessibility, and performance.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              When not coding, I explore photography and visual storytelling. It keeps my eye trained on composition and
              detail—skills I bring back into my product work.
            </p>
          </div>

          <ul className="space-y-3">
            <li className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-[4px_4px_0_0_#0f172a]">
              <span className="font-semibold text-slate-900">Focus:</span> Frontend • Full-stack • UI Engineering
            </li>
            <li className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-[4px_4px_0_0_#0f172a]">
              <span className="font-semibold text-slate-900">Toolbox:</span> React, TypeScript, Node, Python
            </li>
            <li className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-[4px_4px_0_0_#0f172a]">
              <span className="font-semibold text-slate-900">Values:</span> Clarity, Craft, Curiosity
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
