import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
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
