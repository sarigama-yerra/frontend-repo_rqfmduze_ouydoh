import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop'
];

export default function ParallaxGallery() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section id="gallery" className="relative py-24 bg-[#070815] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Parallax Gallery</h2>
        <p className="mt-2 text-white/70 max-w-2xl">A layered scroll experience. Images drift at different speeds to create depth.</p>
      </div>

      <div className="relative mt-12 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div style={{ y: y1 }} className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img src={images[0]} alt="parallax-1" className="h-full w-full object-cover" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img src={images[1]} alt="parallax-2" className="h-full w-full object-cover" />
        </motion.div>
        <motion.div style={{ y: y3 }} className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img src={images[2]} alt="parallax-3" className="h-full w-full object-cover" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:col-span-2 lg:col-span-1">
          <img src={images[3]} alt="parallax-4" className="h-full w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
