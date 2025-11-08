import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Global magnetic cursor that follows the pointer and reacts to interactive elements
export default function MagneticCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.6 });
  const sScale = useSpring(scale, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      sx.set(e.clientX);
      sy.set(e.clientY);
    };

    const enter = () => scale.set(1);
    const leave = () => scale.set(0.8);

    window.addEventListener('pointermove', move, { passive: true });
    // react on common interactive targets
    const selectors = 'a, button, input, textarea, [data-magnetic]';
    const addHoverListeners = () => {
      document.querySelectorAll(selectors).forEach((el) => {
        el.addEventListener('pointerenter', enter);
        el.addEventListener('pointerleave', leave);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('pointermove', move);
      observer.disconnect();
      document.querySelectorAll(selectors).forEach((el) => {
        el.removeEventListener('pointerenter', enter);
        el.removeEventListener('pointerleave', leave);
      });
    };
  }, [sx, sy, scale]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2"
      style={{ left: sx, top: sy, scale: sScale }}
    >
      {/* outer glow */}
      <div className="absolute -inset-4 rounded-full bg-cyan-400/10 blur-2xl" />
      {/* core ring */}
      <div className="h-6 w-6 rounded-full border border-cyan-300/60 bg-white/5 shadow-[0_0_40px_rgba(34,211,238,0.25)]" />
    </motion.div>
  );
}
