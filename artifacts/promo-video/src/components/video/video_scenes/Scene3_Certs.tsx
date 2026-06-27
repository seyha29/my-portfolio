import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const certs = [
  { name: 'AWS Academy Cloud Foundations', date: 'April 2025', color: '#FF9900' },
  { name: 'Fortinet Network Security Associate', date: 'June 2025', color: '#EE0000' }
];

export function Scene3_Certs() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col justify-center px-24 z-10 bg-bg-dark"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-bg-dark to-bg-dark" />
      
      <motion.div className="text-primary font-mono text-xl mb-4 tracking-widest uppercase"
        initial={{ opacity: 0, x: -50 }}
        animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      >
        Verified Expertise
      </motion.div>
      <motion.h2 
        className="text-7xl font-display font-bold text-white mb-16"
        initial={{ opacity: 0, x: -50 }}
        animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ delay: 0.1 }}
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-2 gap-12">
        {certs.map((cert, index) => (
          <motion.div 
            key={cert.name}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
          >
            <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: cert.color }} />
            <div className="text-2xl font-bold text-white mb-2 pl-4">{cert.name}</div>
            <div className="text-primary font-mono text-lg pl-4">{cert.date}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
