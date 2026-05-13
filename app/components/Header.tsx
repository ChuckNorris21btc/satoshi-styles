'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Home', 'Clothing', 'Kontakt'];

  return (
    <header className="fixed top-12 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
        {/* Logo */}
        <div className="font-[family-name:var(--font-cormorant)] font-bold text-white tracking-[0.3em]">
          <div className="text-sm md:text-base leading-none">SATOSHI</div>
          <div className="text-sm md:text-base leading-none">STYLES</div>
        </div>

        {/* Desktop Navigation + Hamburger Container */}
        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="font-[family-name:var(--font-montserrat)] text-white text-xs uppercase tracking-[0.15em] hover:text-[#F7931A] transition-colors duration-200 cursor-pointer"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <div
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <div
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <div
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: menuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-64 bg-black border-l border-white/10 md:hidden"
        style={{ marginTop: '0' }}
      >
        <nav className="flex flex-col gap-6 p-6 pt-24">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="font-[family-name:var(--font-montserrat)] text-white uppercase tracking-[0.15em] hover:text-[#F7931A] transition-colors duration-200 cursor-pointer text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
