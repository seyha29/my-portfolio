import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene0_Intro() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div 
          className="text-primary font-mono text-xl mb-4 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Portfolio Showcase
        </motion.div>
        
        <h1 className="text-9xl font-display font-bold text-text-primary tracking-tighter leading-none mb-6">
          <span className="block overflow-hidden">
            <motion.span 
              className="block"
              initial={{ y: "100%" }}
              animate={phase >= 1 ? { y: 0 } : { y: "100%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              THAN
            </motion.span>
          </span>
          <span className="block overflow-hidden text-primary">
            <motion.span 
              className="block"
              initial={{ y: "100%" }}
              animate={phase >= 1 ? { y: 0 } : { y: "100%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              SEYHA
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="text-3xl text-text-secondary font-body font-light"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={phase >= 2 ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 1 }}
        >
          Web Developer / React Specialist
        </motion.div>
      </div>
    </motion.div>
  );
}
