'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Home', 'Clothing', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-900">
      <div className="flex items-center justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <div className="text-white uppercase font-bold text-lg md:text-xl tracking-widest">
          Satoshi Styles
        </div>

        {/* Hamburger - Desktop Nav */}
        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white text-sm uppercase tracking-wide hover:text-orange-500 transition-colors duration-200 cursor-pointer"
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
        className="fixed top-0 right-0 h-screen w-64 bg-black border-l border-gray-900 md:hidden"
        style={{ marginTop: '0' }}
      >
        <nav className="flex flex-col gap-6 p-8 pt-20">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-white uppercase tracking-wide hover:text-orange-500 transition-colors duration-200 cursor-pointer text-lg"
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
