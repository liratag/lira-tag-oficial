'use client';

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
      }}
      transition={{
        delay: 2,
        duration: 1,
      }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-none"
    >
      <div className="relative flex flex-col items-center">
        
        {/* GLOW */}
        <div className="absolute w-40 h-40 bg-cyan-400/20 rounded-full blur-[80px]" />

        {/* LOGO */}
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="relative z-10 text-cyan-400 text-6xl md:text-8xl font-black tracking-[8px] drop-shadow-[0_0_40px_rgba(34,211,238,0.5)]"
        >
          LIRA
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="relative z-10 mt-6 text-zinc-500 tracking-[6px] uppercase text-sm"
        >
          Mobility Intelligence
        </motion.p>

        {/* LOADING BAR */}
        <div className="relative mt-12 w-64 h-[2px] bg-white/10 overflow-hidden rounded-full">
          
          <motion.div
            initial={{
              x: '-100%',
            }}
            animate={{
              x: '100%',
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
          />
        </div>
      </div>
    </motion.div>
  );
}