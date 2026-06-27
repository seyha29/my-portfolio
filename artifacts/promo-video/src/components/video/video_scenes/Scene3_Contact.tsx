import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const contactItems = [
  { label: 'GitHub', handle: 'github.com/thanseyha', icon: 'GH', color: '#f0f6fc' },
  { label: 'LinkedIn', handle: 'linkedin.com/in/thanseyha', icon: 'LI', color: '#0a66c2' },
  { label: 'Email', handle: 'thanseyha@email.com', icon: '@', color: '#2563eb' },
];

export function Scene3_Contact() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 4800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center px-[8vw] z-10"
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={{ clipPath: 'inset(0 0% 0 0)' }}
      exit={{ clipPath: 'inset(0 0 0 100%)' }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="absolute inset-0 bg-[#0f172a]/95" />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 80% 50%, #2563eb 0%, transparent 70%)',
        }}
      />

      {/* Animated vertical accent line */}
      <motion.div
        className="absolute left-[7vw] top-[15%] w-[3px] bg-[#2563eb] rounded-full"
        initial={{ height: 0 }}
        animate={phase >= 1 ? { height: '70%' } : { height: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative z-10 pl-[4vw]">
        <motion.div
          className="font-mono text-[1.2vw] tracking-[0.3em] uppercase mb-[1.5vh]"
          style={{ color: '#2563eb' }}
          initial={{ opacity: 0, x: -30 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.4, ease: 'circOut' }}
        >
          Get in touch
        </motion.div>

        <motion.h2
          className="text-[7vw] font-black tracking-tighter leading-none text-white mb-[6vh]"
          style={{ fontFamily: 'var(--font-display)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Let's Connect
        </motion.h2>

        <div className="flex flex-col gap-[2.5vh]">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-[2vw]"
              initial={{ opacity: 0, x: -40 }}
              animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{
                duration: 0.5,
                delay: phase >= 3 ? i * 0.12 : 0,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className="w-[4.5vw] h-[4.5vw] rounded-xl flex items-center justify-center text-white font-black text-[1.4vw] shrink-0"
                style={{
                  background: `${item.color}22`,
                  border: `1.5px solid ${item.color}55`,
                  color: item.color,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {item.icon}
              </div>
              <div>
                <div className="text-[1vw] text-white/50 font-mono tracking-widest uppercase mb-[0.3vh]">
                  {item.label}
                </div>
                <div
                  className="text-[1.8vw] font-bold"
                  style={{ color: item.color === '#2563eb' ? '#60a5fa' : 'white' }}
                >
                  {item.handle}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Exit: slide entire block up */}
      <motion.div
        className="absolute inset-0 bg-[#2563eb]"
        initial={{ scaleY: 0, transformOrigin: 'bottom' }}
        animate={phase >= 4 ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ zIndex: 20 }}
      />
    </motion.div>
  );
}
