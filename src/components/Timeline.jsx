import { GraduationCap, Briefcase } from 'lucide-react';

const education = [
  {
    school: 'University of Design & Tech',
    degree: 'B.Sc. in Computer Science',
    period: '2017 — 2021',
    details: 'Focused on HCI, algorithms, and product prototyping.'
  }
];

const experience = [
  {
    company: 'Studio Minimal',
    role: 'Frontend Engineer',
    period: '2023 — Present',
    details: 'Building accessible, performant interfaces with React and Tailwind.'
  },
  {
    company: 'Paper & Pixel Co.',
    role: 'Full‑stack Developer',
    period: '2021 — 2023',
    details: 'Prototyped features end-to-end and shaped design systems.'
  }
];

function TimelineList({ items, type }) {
  return (
    <ol className="relative border-l-2 border-slate-300 pl-6">
      {items.map((item, idx) => (
        <li key={idx} className="mb-8">
          <span className="absolute -left-3 top-0 w-6 h-6 rounded-full border-2 border-slate-900 bg-white" />
          <div className="bg-white border-2 border-slate-900 rounded-xl p-5 shadow-[4px_4px_0_0_#0f172a]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-lg font-bold text-slate-900">
                {type === 'edu' ? item.school : item.company}
              </h3>
              <span className="text-sm font-semibold text-slate-600">{item.period}</span>
            </div>
            <p className="mt-1 text-slate-700">{type === 'edu' ? item.degree : item.role}</p>
            <p className="mt-2 text-slate-700">{item.details}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-slate-900 text-white"><GraduationCap className="w-5 h-5" /></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Education</h2>
            </div>
            <TimelineList items={education} type="edu" />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-slate-900 text-white"><Briefcase className="w-5 h-5" /></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Experience</h2>
            </div>
            <TimelineList items={experience} type="exp" />
          </div>
        </div>
      </div>
    </section>
  );
}
