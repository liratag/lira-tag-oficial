'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const handleResize = () => {
      setMobile(window.innerWidth <= 900);
    };

    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuItems = [
    'Início',
    'Tecnologia',
    'Mercado',
    'Investidores',
    'Contato',
  ];

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-2xl border-b border-cyan-400/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* LOGO */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-cyan-400 text-3xl font-black tracking-[4px] cursor-pointer"
        >
          LIRA TAG
        </motion.h1>

        {/* DESKTOP */}
        {!mobile && (
          <nav className="flex items-center gap-10">
            {menuItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                className="relative group cursor-pointer"
              >
                <span className="text-zinc-300 text-[15px] transition-all duration-300 group-hover:text-cyan-400">
                  {item}
                </span>

                <div className="absolute left-0 bottom-[-8px] w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </nav>
        )}

        {/* MOBILE BUTTON */}
        {mobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cyan-400 text-4xl"
          >
            ☰
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {menuOpen && mobile && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/95 backdrop-blur-2xl border-t border-cyan-400/10 px-8 py-8 flex flex-col gap-6"
        >
          {menuItems.map((item) => (
            <div
              key={item}
              className="text-zinc-300 text-xl hover:text-cyan-400 transition-all duration-300"
            >
              {item}
            </div>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}