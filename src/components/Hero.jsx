import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#070815] via-[#0a0f1f] to-[#0b1226] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.25),_transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(168,85,247,0.18),_transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          Interactive, playful, modern.
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Portfolio in motion.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-xl text-white/80"
        >
          Explore projects with smooth scroll, micro-interactions, and a 3D hero you can play with.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex gap-3"
        >
          <a href="#projects" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-medium px-5 py-3 transition-colors">View Projects</a>
          <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 text-white font-medium px-5 py-3 transition-colors">Contact</a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col items-center text-white/70 text-xs"
        >
          <div className="w-[2px] h-12 bg-gradient-to-b from-transparent via-white/60 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
          <span className="mt-2">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
