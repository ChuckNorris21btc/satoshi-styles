'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export default function HeroSection() {
  const scrollText = "BITCOIN IS FREEDOM - IN BITCOIN WE TRUST - BITCOIN IS FREEDOM - IN BITCOIN WE TRUST - ";
  const [rotationX, setRotationX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientY - startY;
    setRotationX((prev) => prev + delta * 0.5);
    setStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full">
      {/* Animated Banner */}
      <div className="w-full overflow-hidden bg-white border-b border-gray-200">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="whitespace-nowrap"
        >
          <p className="text-4xl font-bold text-orange-500 tracking-wider py-4">
            {scrollText}
          </p>
        </motion.div>
      </div>

      {/* Rotating Bitcoin Hero */}
      <section
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="min-h-screen flex items-center justify-center bg-black cursor-grab active:cursor-grabbing relative overflow-hidden"
        style={{ perspective: '1200px' }}
      >
        {/* 3D Rotating Bitcoin SVG */}
        <motion.svg
          viewBox="0 0 800 400"
          className="w-full max-w-2xl h-auto"
          animate={{
            rotateX: isDragging ? rotationX : 360,
          }}
          transition={{
            rotateX: isDragging
              ? { type: 'tween', duration: 0 }
              : { duration: 25, repeat: Infinity, ease: 'linear' },
          }}
          style={{
            filter: 'drop-shadow(0 0 60px rgba(255, 255, 255, 0.15))',
          }}
        >
          {/* Bitcoin Logo Circle - Left side */}
          <circle
            cx="150"
            cy="200"
            r="100"
            fill="none"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="3"
          />

          {/* Bitcoin B Symbol - Inside circle */}
          <text
            x="150"
            y="210"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="130"
            fontWeight="700"
            fill="none"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="2.5"
            fontFamily="Georgia, serif"
          >
            ₿
          </text>

          {/* "bitcoin" text - Right side, large */}
          <text
            x="520"
            y="220"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="160"
            fontWeight="800"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="3"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="2"
          >
            bitcoin
          </text>
        </motion.svg>

        {/* Overlay Content (Header) */}
        <div className="absolute inset-0 flex flex-col pointer-events-none">
          <div className="flex justify-between items-center px-8 py-6 pointer-events-auto">
            <div className="text-white font-bold text-2xl">Satoshi Styles</div>
            <nav className="flex gap-8 text-white">
              <a href="#" className="hover:text-orange-500 transition">Home</a>
              <a href="#" className="hover:text-orange-500 transition">Shop</a>
              <a href="#" className="hover:text-orange-500 transition">Contact</a>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
