import { Code, Award, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Sketchfolio',
    desc: 'A minimalist portfolio theme inspired by notebooks and paper.',
    link: '#',
    tags: ['React', 'Tailwind']
  },
  {
    title: 'Lensboard',
    desc: 'Photo management dashboard with smart albums and EXIF insights.',
    link: '#',
    tags: ['TypeScript', 'UX']
  },
  {
    title: 'PaperUI',
    desc: 'UI component set with hand-drawn accents and subtle textures.',
    link: '#',
    tags: ['Design', 'Components']
  }
];

const certificates = [
  { name: 'Frontend Engineering', org: 'Meta / Coursera', year: '2023' },
  { name: 'Python for Everybody', org: 'Michigan', year: '2022' },
  { name: 'Cloud Practitioner', org: 'AWS', year: '2021' }
];

export default function ProjectsAndCertificates() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-slate-900 text-white"><Code className="w-5 h-5" /></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-white border-2 border-slate-900 rounded-2xl p-6 shadow-[6px_6px_0_0_#0f172a]">
              <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-700">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border border-slate-300 text-slate-600">{t}</span>
                ))}
              </div>
              <a href={p.link} className="mt-4 inline-flex items-center gap-2 text-slate-900 font-semibold hover:underline">
                Visit <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-16 mb-6">
          <div className="p-2 rounded-lg bg-slate-900 text-white"><Award className="w-5 h-5" /></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Certificates</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((c) => (
            <div key={c.name} className="bg-white border-2 border-slate-900 rounded-2xl p-5 shadow-[6px_6px_0_0_#0f172a]">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">{c.name}</h3>
                <span className="text-xs font-semibold text-slate-600">{c.year}</span>
              </div>
              <p className="mt-2 text-slate-700">{c.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
