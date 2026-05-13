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
      >
        {/* 3D Rotating Bitcoin Container */}
        <motion.div
          animate={isDragging ? { rotateX: rotationX } : { rotateX: 0 }}
          transition={isDragging ? { type: 'tween' } : { duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ perspective: '1200px' }}
          className="w-full h-full flex items-center justify-center"
        >
          <motion.svg
            viewBox="0 0 500 500"
            className="w-96 h-96 md:w-[500px] md:h-[500px]"
            style={{
              rotateX: isDragging ? 0 : undefined,
              filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.1))',
            }}
          >
            {/* Bitcoin B Logo with Circle */}
            <g>
              {/* Outer circle with transparency */}
              <circle
                cx="250"
                cy="150"
                r="90"
                fill="none"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="4"
              />

              {/* Bitcoin B letter */}
              <text
                x="250"
                y="170"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="100"
                fontWeight="700"
                fill="none"
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="2"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                ₿
              </text>
            </g>

            {/* "bitcoin" text with transparency */}
            <g>
              <text
                x="250"
                y="320"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="120"
                fontWeight="700"
                fill="none"
                stroke="rgba(255, 255, 255, 0.35)"
                strokeWidth="2.5"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="8"
              >
                bitcoin
              </text>
            </g>

            {/* Optional subtle gradient effect */}
            <defs>
              <radialGradient id="bitcoinGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
              </radialGradient>
            </defs>
            <circle
              cx="250"
              cy="250"
              r="250"
              fill="url(#bitcoinGlow)"
              opacity="0.5"
            />
          </motion.svg>
        </motion.div>

        {/* Overlay Content (Header will go here) */}
        <div className="absolute inset-0 flex flex-col pointer-events-none">
          {/* Header placeholder */}
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
