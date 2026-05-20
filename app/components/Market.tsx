'use client';

import { motion } from 'framer-motion';
import Reveal from './Reveal';

const stats = [
  {
    value: '+120M',
    label: 'Veículos no Brasil',
  },
  {
    value: '70%',
    label: 'Sem TAG ativa',
  },
  {
    value: 'R$ 40B+',
    label: 'Mercado potencial',
  },
  {
    value: '24/7',
    label: 'Mobilidade conectada',
  },
];

export default function Market() {
  return (
    <Reveal>
      <section className="relative py-36 px-6 bg-black overflow-hidden">
        
        {/* LIGHT */}
        <div className="absolute top-0 right-0 w-[700px] h-[400px] bg-cyan-400/10 blur-[180px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* HEADER */}
          <div className="text-center mb-24">
            
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-cyan-400 text-sm tracking-[3px]">
                MERCADO
              </span>
            </div>

            <h2 className="text-[clamp(52px,7vw,100px)] leading-[0.95] font-black text-white mb-8">
              Um mercado preparado para
              <span className="text-cyan-400"> disrupção.</span>
            </h2>

            <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-[1.9]">
              O Brasil possui um dos maiores potenciais globais
              para plataformas de mobilidade inteligente integrada.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.8,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-2xl p-10"
              >
                
                {/* HOVER */}
                <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-all duration-500" />

                {/* CONTENT */}
                <div className="relative z-10">
                  
                  <h3 className="text-6xl font-black text-cyan-400 mb-6 drop-shadow-[0_0_30px_rgba(34,211,238,0.45)]">
                    {item.value}
                  </h3>

                  <p className="text-zinc-300 text-xl leading-[1.6]">
                    {item.label}
                  </p>

                  <div className="mt-10 w-24 h-[2px] bg-cyan-400 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}