'use client';

import { motion } from 'framer-motion';

export default function TagCard() {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="relative w-[min(560px,92vw)] h-[350px]"
    >
      {/* GLOW */}
      <div className="absolute inset-0 bg-cyan-400/20 blur-[120px] rounded-full scale-110" />

      {/* CARD */}
      <div className="relative w-full h-full overflow-hidden rounded-[42px] border border-cyan-400/20 bg-gradient-to-br from-zinc-900 via-black to-cyan-950 shadow-[0_0_120px_rgba(34,211,238,0.25)] backdrop-blur-2xl">
        
        {/* TOP LIGHT */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-300/60" />

        {/* SIDE LIGHT */}
        <div className="absolute top-0 right-0 w-[2px] h-full bg-cyan-300/40" />

        {/* REFLECTION */}
        <div className="absolute top-0 left-[-120px] w-[160px] h-full bg-white/10 blur-3xl rotate-12" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-10">
          
          {/* CHIP */}
          <div className="absolute top-10 left-10 w-16 h-12 rounded-lg border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl" />

          {/* TITLE */}
          <h2 className="text-[clamp(70px,8vw,120px)] font-black italic tracking-tight text-cyan-300 drop-shadow-[0_0_40px_rgba(34,211,238,0.45)]">
            FREEDOM
          </h2>

          {/* SUBTITLE */}
          <p className="mt-5 text-zinc-400 tracking-[6px] text-sm uppercase">
            Uma TAG. Infinitas possibilidades.
          </p>

          {/* LINE */}
          <div className="mt-8 w-32 h-[2px] bg-cyan-400 rounded-full" />
        </div>

        {/* CORNER LIGHT */}
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-400/10 blur-[80px]" />
      </div>
    </motion.div>
  );
}