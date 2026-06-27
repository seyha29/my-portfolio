import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene4_Outro() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-bg-dark z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-bg-dark to-bg-dark" />

      <motion.div 
        className="text-4xl text-text-secondary font-body font-light mb-8 italic"
        initial={{ opacity: 0, y: -20 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      >
        "Let's build something."
      </motion.div>

      <motion.h1 
        className="text-8xl font-display font-bold text-white tracking-tighter mb-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={phase >= 2 ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        THAN SEYHA
      </motion.h1>

      <motion.div 
        className="flex gap-8 text-2xl font-mono text-primary uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      >
        <span>GitHub</span>
        <span className="text-white/30">•</span>
        <span>LinkedIn</span>
        <span className="text-white/30">•</span>
        <span>Email</span>
      </motion.div>
    </motion.div>
  );
}
