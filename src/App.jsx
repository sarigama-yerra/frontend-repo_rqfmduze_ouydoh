import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParallaxGallery from './components/ParallaxGallery';
import MagneticCursor from './components/MagneticCursor';
import Reveal from './components/Reveal';

function App() {
  return (
    <div className="bg-[#070815] text-white scroll-smooth">
      <MagneticCursor />
      <Navbar />
      <main>
        <Hero />
        <Reveal y={30}><Projects /></Reveal>
        <Reveal y={30} delay={0.05}><ParallaxGallery /></Reveal>
        <Reveal y={30} delay={0.1}><Contact /></Reveal>
      </main>
      <footer className="py-10 text-center text-white/60 bg-[#070815]">
        <p>
          © {new Date().getFullYear()} Playfolio — Built with motion and play
        </p>
      </footer>
    </div>
  );
}

export default App;
