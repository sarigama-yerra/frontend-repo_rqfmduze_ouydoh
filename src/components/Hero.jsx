import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function Hero() {
  // Subtle parallax on headline based on pointer
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 120, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 120, damping: 20 });

  useEffect(() => {
    const onMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set(e.clientX / w);
      my.set(e.clientY / h);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [mx, my]);

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#070815] via-[#0a0f1f] to-[#0b1226] text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Iridescent gradient veils (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-24 h-[38rem] w-[38rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-48 -right-24 h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/25 blur-3xl" />
        {/* animated conic sweep */}
        <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" aria-hidden>
          <div className="pointer-events-none absolute -inset-1 animate-[spin_16s_linear_infinite] bg-[conic-gradient(from_0deg,transparent,rgba(56,189,248,0.18),transparent,rgba(217,70,239,0.15),transparent)]" />
        </div>
      </div>

      {/* Floating orbs to echo the Spline scene (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-24 left-10 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-300/70 to-fuchsia-400/60 blur"
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-28 right-16 h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-400/50 to-cyan-300/60 blur-md"
          animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 h-10 w-10 rounded-full bg-gradient-to-br from-cyan-300/60 to-white/40 blur"
          animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-24">
        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight [text-shadow:0_10px_40px_rgba(56,189,248,.15)]">
            More motion. More dimension.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-200 to-fuchsia-300">
              A futuristic 3D portfolio.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-xl text-white/80"
        >
          Interact with the scene, enjoy parallax layers, and glide through sections with buttery animations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex gap-3"
        >
          <a href="#projects" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-medium px-5 py-3 transition-colors shadow-[0_0_0_0_rgba(34,211,238,0.6)] hover:shadow-[0_0_30px_2px_rgba(34,211,238,0.35)]">View Projects</a>
          <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 text-white font-medium px-5 py-3 transition-colors">Contact</a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col items-center text-white/70 text-xs"
        >
          <div className="w-[2px] h-12 bg-gradient-to-b from-transparent via-white/70 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
          <span className="mt-2">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
