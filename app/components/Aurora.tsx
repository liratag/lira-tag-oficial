'use client';

import { motion } from 'framer-motion';

export default function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* AURORA 1 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] rounded-full bg-cyan-400/10 blur-[160px]"
      />

      {/* AURORA 2 */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[-250px] right-[-250px] w-[800px] h-[800px] rounded-full bg-cyan-300/10 blur-[180px]"
      />

      {/* AURORA 3 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[30%] left-[35%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px]"
      />
    </div>
  );
}