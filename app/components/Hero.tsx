'use client';

import { motion } from 'framer-motion';
import TagCard from './TagCard';
import Particles from './Particles';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center px-6 pt-32">
      
      {/* PARTICLES */}
      <Particles />

      {/* LIGHT EFFECTS */}
      <div className="absolute top-[-250px] left-[-250px] w-[700px] h-[700px] bg-cyan-400/10 rounded-full blur-[180px]" />

      <div className="absolute bottom-[-250px] right-[-250px] w-[700px] h-[700px] bg-cyan-400/10 rounded-full blur-[180px]" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-16">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 min-w-[320px]"
        >
          
          {/* BADGE */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            <span className="text-cyan-400 text-sm tracking-[3px]">
              O FUTURO DA MOBILIDADE
            </span>
          </div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-[clamp(70px,10vw,160px)] leading-[0.88] font-black text-cyan-300 mb-8 drop-shadow-[0_0_60px_rgba(34,211,238,0.35)]"
          >
            LIRA
            <br />
            TAG
          </motion.h1>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-[clamp(18px,2vw,26px)] leading-[1.8] text-zinc-300 max-w-2xl mb-12"
          >
            Plataforma revolucionária de mobilidade inteligente.
            Uma única TAG vinculada ao CPF para múltiplos veículos,
            estacionamentos, condomínios e pedágios.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-wrap gap-5"
          >
            <button className="group relative overflow-hidden px-10 py-5 rounded-2xl bg-cyan-400 text-black font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_60px_rgba(34,211,238,0.35)]">
              <span className="relative z-10">
                CONHEÇA O PROJETO
              </span>

              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-300" />
            </button>

            <button className="px-10 py-5 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl text-white text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
              ÁREA INVESTIDORES
            </button>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-wrap gap-12 mt-16"
          >
            {[
              {
                number: '+120M',
                label: 'VEÍCULOS',
              },
              {
                number: '70%',
                label: 'SEM TAG',
              },
              {
                number: '24/7',
                label: 'MOBILIDADE',
              },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-5xl font-black text-cyan-400 mb-3">
                  {item.number}
                </h3>

                <p className="text-zinc-400 text-lg">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: -6 }}
          transition={{ duration: 1.2 }}
          className="flex-1 min-w-[320px] flex justify-center"
        >
          <TagCard />
        </motion.div>
      </div>
    </section>
  );
}