import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Orbit',
    description: 'A WebGL experiment with orbital shaders and parallax fields.',
    tags: ['WebGL', 'Shaders', 'Three.js'],
    link: '#',
  },
  {
    title: 'Harmonic UI',
    description: 'A design system focused on motion-first interactions.',
    tags: ['Design System', 'Animation'],
    link: '#',
  },
  {
    title: 'Microland',
    description: 'A tiny city builder with reactive gameplay loops.',
    tags: ['Game', 'React'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#070815] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full blur-3xl bg-cyan-500/20" />
        <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] rounded-full blur-3xl bg-fuchsia-500/20" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold tracking-tight group-hover:text-cyan-300 transition-colors">{p.title}</h3>
                <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white" />
              </div>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
