'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Home', 'Clothing', 'Kontakt'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#F7931A]/20">
      <div className="flex items-center justify-between px-4 md:px-8 py-6 md:py-8">
        {/* Logo - Centered */}
        <div className="absolute left-1/2 -translate-x-1/2 font-[family-name:var(--font-cormorant)] font-bold text-[#F7931A] tracking-[0.15em] text-center">
          <div className="text-base md:text-lg leading-none">SATOSHI</div>
          <div className="text-base md:text-lg leading-none">STYLES</div>
        </div>

        {/* Desktop Navigation */}
        <div className="flex-1" />
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="font-[family-name:var(--font-montserrat)] text-[#F7931A] text-xs uppercase tracking-[0.15em] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer ml-auto"
          aria-label="Toggle menu"
        >
          <div
            className={`h-0.5 w-6 bg-[#F7931A] transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <div
            className={`h-0.5 w-6 bg-[#F7931A] transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <div
            className={`h-0.5 w-6 bg-[#F7931A] transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: menuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-64 bg-black border-l border-[#F7931A]/20 md:hidden"
        style={{ marginTop: '0' }}
      >
        <nav className="flex flex-col gap-6 p-6 pt-24">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="font-[family-name:var(--font-montserrat)] text-[#F7931A] uppercase tracking-[0.15em] hover:opacity-70 transition-opacity duration-200 cursor-pointer text-sm"
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
