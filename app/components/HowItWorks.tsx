'use client';

import { motion } from 'framer-motion';
import Reveal from './Reveal';

const steps = [
  {
    number: '01',
    title: 'Cadastro Inteligente',
    description:
      'A TAG é vinculada diretamente ao CPF do usuário.',
  },
  {
    number: '02',
    title: 'Múltiplos Veículos',
    description:
      'Utilize a mesma TAG em diversos veículos cadastrados.',
  },
  {
    number: '03',
    title: 'Mobilidade Total',
    description:
      'Pedágios, estacionamentos, condomínios e acessos integrados.',
  },
];

export default function HowItWorks() {
  return (
    <Reveal>
      <section className="relative py-32 px-6 bg-[#050505] overflow-hidden">
        
        {/* LIGHT */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-400/10 blur-[140px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* HEADER */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-cyan-400 text-sm tracking-[3px]">
                COMO FUNCIONA
              </span>
            </div>

            <h2 className="text-[clamp(48px,7vw,90px)] leading-[1] font-black text-white mb-8">
              Uma nova geração de
              <span className="text-cyan-400"> mobilidade.</span>
            </h2>

            <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-[1.8]">
              Uma única TAG inteligente integrada ao CPF,
              permitindo uma experiência totalmente unificada.
            </p>
          </div>

          {/* STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                }}
                viewport={{
                  once: true,
                }}
                className="relative group overflow-hidden rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-2xl p-10 hover:border-cyan-400/30 transition-all duration-500"
              >
                {/* GLOW */}
                <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-all duration-500" />

                {/* NUMBER */}
                <div className="text-cyan-400 text-6xl font-black mb-8 opacity-30">
                  {step.number}
                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-bold text-white mb-6">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-zinc-400 leading-[1.8] text-lg">
                  {step.description}
                </p>

                {/* LINE */}
                <div className="mt-10 w-24 h-[2px] bg-cyan-400 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}