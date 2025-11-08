import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Scroll-triggered reveal wrapper
export default function Reveal({ children, delay = 0, y = 20, once = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '0px 0px -10% 0px', once });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, filter: 'blur(0px)' });
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
