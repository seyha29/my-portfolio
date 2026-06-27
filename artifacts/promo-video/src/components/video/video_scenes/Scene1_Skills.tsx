import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const skills = [
  { name: 'HTML', value: 95 },
  { name: 'CSS', value: 90 },
  { name: 'JavaScript', value: 85 },
  { name: 'Bootstrap', value: 88 },
  { name: 'Tailwind', value: 82 },
  { name: 'React JS', value: 80 },
  { name: 'PHP', value: 75 },
  { name: 'Laravel', value: 70 },
];

export function Scene1_Skills() {
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
      className="absolute inset-0 flex items-center justify-center p-24 z-10"
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full max-w-6xl flex items-center gap-16">
        <div className="w-1/3">
          <motion.h2 
            className="text-7xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          >
            Core<br /><span className="text-primary">Arsenal</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-text-secondary"
            initial={{ opacity: 0 }}
            animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Specializing in modern frontend frameworks and robust backend architectures.
          </motion.p>
        </div>

        <div className="w-2/3 grid grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-mono text-lg">{skill.name}</span>
                <span className="font-mono text-primary">{skill.value}%</span>
              </div>
              <div className="h-2 w-full bg-bg-muted rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={phase >= 2 ? { width: `${skill.value}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
