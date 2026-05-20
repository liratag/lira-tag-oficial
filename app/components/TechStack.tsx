'use client';

import { motion } from 'framer-motion';
import Reveal from './Reveal';

const techs = [
  'UHF RFID',
  'NFC',
  'Cloud Platform',
  'AI Analytics',
  'Biometria',
  'API Integrada',
  'IoT',
  'Smart Mobility',
];

export default function TechStack() {
  return (
    <Reveal>
      <section className="relative py-36 px-6 bg-[#040404] overflow-hidden">
        
        {/* LIGHT */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-cyan-400/10 blur-[180px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* HEADER */}
          <div className="text-center mb-24">
            
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-cyan-400 text-sm tracking-[3px]">
                TECNOLOGIA
              </span>
            </div>

            <h2 className="text-[clamp(52px,7vw,100px)] leading-[0.95] font-black text-white mb-8">
              Infraestrutura criada para
              <span className="text-cyan-400"> escalar.</span>
            </h2>

            <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-[1.9]">
              Uma plataforma desenvolvida com arquitetura moderna,
              preparada para integrar mobilidade, pagamentos,
              acessos inteligentes e analytics em tempo real.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techs.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.8,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.04,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-cyan-400/10 bg-white/5 backdrop-blur-2xl p-8 flex items-center justify-center min-h-[150px]"
              >
                
                {/* HOVER LIGHT */}
                <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-all duration-500" />

                {/* BORDER GLOW */}
                <div className="absolute inset-0 rounded-[28px] border border-transparent group-hover:border-cyan-400/30 transition-all duration-500" />

                {/* CONTENT */}
                <div className="relative z-10 text-center">
                  
                  <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 mx-auto mb-5 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                  </div>

                  <h3 className="text-white text-xl font-bold tracking-wide">
                    {tech}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}