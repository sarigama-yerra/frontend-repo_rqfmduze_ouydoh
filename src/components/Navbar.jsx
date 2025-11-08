import { useEffect, useState } from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-white">
          <Rocket className="w-6 h-6 text-cyan-400" />
          <span className="font-semibold tracking-tight">Playfolio</span>
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
