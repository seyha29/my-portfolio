import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const projects = [
  { name: 'University IU CAM', desc: 'React responsive university site', img: 'proj-uni.png' },
  { name: 'Laravel E-Commerce', desc: 'Full-stack robust platform', img: 'proj-shop.png' },
  { name: 'React Store', desc: 'Stripe + Khmer/English i18n', img: 'proj-uni.png' }, // reusing images for visual placeholder
  { name: 'Portfolio Website', desc: 'Interactive animated showcase', img: 'bg-code.png' },
];

export function Scene2_Projects() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 4000), // second proj
      setTimeout(() => setPhase(3), 8000), // third proj
      setTimeout(() => setPhase(4), 12000), // fourth proj
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const getActiveProject = () => {
    if (phase < 2) return 0;
    if (phase < 3) return 1;
    if (phase < 4) return 2;
    return 3;
  };

  const activeIndex = getActiveProject();

  return (
    <motion.div 
      className="absolute inset-0 bg-bg-dark z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Image changes based on active project */}
      <motion.img 
        key={`bg-${activeIndex}`}
        src={`${import.meta.env.BASE_URL}images/${projects[activeIndex].img}`}
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/80 to-transparent" />

      <div className="absolute inset-0 flex items-center px-24">
        <div className="w-1/2">
          <motion.div className="text-primary font-mono text-xl mb-4 tracking-widest">
            FEATURED WORK
          </motion.div>
          <motion.h2 
            key={`title-${activeIndex}`}
            className="text-6xl font-display font-bold text-white mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {projects[activeIndex].name}
          </motion.h2>
          <motion.p 
            key={`desc-${activeIndex}`}
            className="text-2xl text-text-secondary"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {projects[activeIndex].desc}
          </motion.p>
        </div>

        <div className="w-1/2 flex justify-end">
          <motion.div 
            key={`img-${activeIndex}`}
            className="w-[36vw] h-[24vw] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20"
            initial={{ x: 100, opacity: 0, rotateY: -15 }}
            animate={{ x: 0, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ perspective: 1000 }}
          >
            <img 
              src={`${import.meta.env.BASE_URL}images/${projects[activeIndex].img}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
