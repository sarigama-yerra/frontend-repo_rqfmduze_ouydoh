import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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

function TiltCard({ children, i }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 200, damping: 20 });
  const glow = useTransform(mx, [0, 0.5, 1], [0.2, 0.6, 0.2]);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mx.set(x);
    my.set(y);
  };

  return (
    <motion.a
      href="#"
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0.5); my.set(0.5); }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 transition-colors backdrop-blur-sm overflow-hidden"
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-1 rounded-2xl"
        style={{
          background: glow.to((g) => `radial-gradient(600px 200px at 50% -20%, rgba(56,189,248,${g}), transparent 60%), radial-gradient(400px 160px at 120% 120%, rgba(217,70,239,${g * 0.8}), transparent 60%)`),
          opacity: 0,
        }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 0.6 }}
        aria-hidden
      />
      {children}
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#070815] text-white overflow-hidden">
      {/* Animated grid backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_60%,#070815_100%)]" />
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]">
          <div className="absolute -inset-px bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px] animate-[pulse_10s_ease-in-out_infinite]" />
        </div>
        <motion.div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full blur-3xl bg-cyan-500/20" animate={{ y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity }} />
        <motion.div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] rounded-full blur-3xl bg-fuchsia-500/20" animate={{ y: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity }} />
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

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1000px]">
          {projects.map((p, i) => (
            <TiltCard key={p.title} i={i}>
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold tracking-tight group-hover:text-cyan-300 transition-colors">{p.title}</h3>
                <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white" />
              </div>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">{t}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
