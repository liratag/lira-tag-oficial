'use client';

import { motion } from 'framer-motion';

export default function Particles() {
  const particles = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, index) => {
        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 0,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: -800,
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: 'linear',
            }}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: '-20px',
              filter: 'blur(1px)',
              boxShadow: '0 0 20px rgba(34,211,238,0.8)',
            }}
          />
        );
      })}
    </div>
  );
}