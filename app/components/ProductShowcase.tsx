'use client';

import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function ProductShowcase() {
  return (
    <Reveal>
      <section className="relative py-36 px-6 overflow-hidden bg-black">
        
        {/* BACKGROUND LIGHT */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-cyan-400/10 blur-[180px]" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-wrap items-center justify-between gap-24">
          
          {/* LEFT */}
          <div className="flex-1 min-w-[320px]">
            
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-cyan-400 text-sm tracking-[3px]">
                HARDWARE PREMIUM
              </span>
            </div>

            <h2 className="text-[clamp(52px,7vw,100px)] leading-[0.95] font-black text-white mb-10">
              Design criado para o
              <span className="text-cyan-400"> futuro.</span>
            </h2>

            <p className="text-zinc-400 text-xl leading-[1.9] max-w-2xl mb-12">
              Uma TAG inteligente com acabamento premium,
              tecnologia UHF/NFC integrada e visual futurista
              desenvolvido para a nova geração da mobilidade.
            </p>

            {/* FEATURES */}
            <div className="flex flex-col gap-6">
              {[
                'Tecnologia UHF de longo alcance',
                'Integração com múltiplos veículos',
                'Chip NFC integrado',
                'Acabamento premium anti-risco',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

                  <span className="text-zinc-300 text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateY: [0, 6, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex-1 min-w-[320px] flex justify-center perspective-[2000px]"
          >
            <div className="relative">
              
              {/* GLOW */}
              <div className="absolute inset-0 bg-cyan-400/20 blur-[120px] rounded-full scale-125" />

              {/* TAG */}
              <div className="relative w-[520px] max-w-[92vw] h-[320px] rounded-[42px] overflow-hidden border border-cyan-400/20 bg-gradient-to-br from-zinc-900 via-black to-cyan-950 shadow-[0_0_120px_rgba(34,211,238,0.25)] backdrop-blur-2xl">

                {/* REFLECTION */}
                <div className="absolute top-0 left-[-120px] w-[180px] h-full bg-white/10 blur-3xl rotate-12" />

                {/* GRID */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />

                {/* CHIP */}
                <div className="absolute top-10 left-10 w-20 h-14 rounded-xl border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl" />

                {/* SIGNAL */}
                <div className="absolute top-10 right-10 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400/70" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400/40" />
                </div>

                {/* CENTER */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-10">
                  
                  <h3 className="text-[clamp(70px,8vw,120px)] font-black italic tracking-tight text-cyan-300 drop-shadow-[0_0_40px_rgba(34,211,238,0.45)]">
                    FREEDOM
                  </h3>

                  <p className="mt-5 text-zinc-400 tracking-[6px] text-sm uppercase">
                    Uma TAG. Infinitas possibilidades.
                  </p>

                  <div className="mt-8 w-32 h-[2px] bg-cyan-400 rounded-full" />
                </div>

                {/* CORNER LIGHT */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-400/10 blur-[80px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}