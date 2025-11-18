'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export function TagWall() {
  const wallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wallRef.current) {
      const tags = wallRef.current.querySelectorAll('.tag');

      gsap.fromTo(
        tags,
        {
          opacity: 0,
          scale: 0.5,
          rotation: () => Math.random() * 40 - 20,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: () => Math.random() * 10 - 5,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        }
      );
    }
  }, []);

  const tags = [
    { text: 'STREET', color: 'bg-pink-500', size: 'text-4xl', rotation: -5 },
    { text: 'ART', color: 'bg-purple-600', size: 'text-5xl', rotation: 3 },
    { text: 'FRESH', color: 'bg-cyan-500', size: 'text-3xl', rotation: -8 },
    { text: 'BOMB', color: 'bg-yellow-400', size: 'text-4xl', rotation: 6 },
    { text: 'WILD', color: 'bg-orange-500', size: 'text-5xl', rotation: -3 },
    { text: 'STYLE', color: 'bg-green-500', size: 'text-3xl', rotation: 7 },
    { text: 'TAG', color: 'bg-red-500', size: 'text-4xl', rotation: -6 },
    { text: 'URBAN', color: 'bg-blue-600', size: 'text-5xl', rotation: 4 },
    { text: 'CREW', color: 'bg-indigo-500', size: 'text-3xl', rotation: -4 },
    { text: 'DOPE', color: 'bg-pink-600', size: 'text-4xl', rotation: 8 },
  ];

  return (
    <div className="relative container mx-auto px-4 py-16 md:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2
          className="text-5xl md:text-7xl font-black mb-4"
          style={{
            fontFamily: 'Impact, sans-serif',
            WebkitTextStroke: '2px #000',
            textShadow: '5px 5px 0 #ff006e, 10px 10px 0 #8338ec',
            transform: 'skew(-5deg)',
            color: '#fff',
          }}
        >
          TAG WALL
        </h2>
        <div className="flex gap-2">
          <div className="h-2 w-16 bg-pink-500" />
          <div className="h-2 w-16 bg-purple-600" />
          <div className="h-2 w-16 bg-cyan-500" />
          <div className="h-2 w-16 bg-yellow-400" />
        </div>
      </motion.div>

      {/* Tag Wall */}
      <div
        ref={wallRef}
        className="relative min-h-[500px] bg-zinc-800 rounded-lg border-4 border-black p-8"
        style={{
          boxShadow: '10px 10px 0 rgba(0,0,0,0.9)',
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 35px,
              rgba(255,255,255,0.03) 35px,
              rgba(255,255,255,0.03) 36px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 70px,
              rgba(255,255,255,0.03) 70px,
              rgba(255,255,255,0.03) 71px
            )
          `,
        }}
      >
        {/* Scattered Tags */}
        <div className="relative w-full h-full">
          {tags.map((tag, index) => (
            <motion.div
              key={index}
              className="tag absolute"
              style={{
                top: `${Math.random() * 70 + 5}%`,
                left: `${Math.random() * 80 + 5}%`,
                transform: `rotate(${tag.rotation}deg)`,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                zIndex: 50,
                transition: { duration: 0.2 },
              }}
            >
              <div
                className={`${tag.color} ${tag.size} font-black px-4 py-2 border-4 border-black text-white cursor-pointer`}
                style={{
                  fontFamily: 'Impact, sans-serif',
                  boxShadow: '5px 5px 0 rgba(0,0,0,0.8)',
                  WebkitTextStroke: '1px #000',
                  letterSpacing: '2px',
                }}
              >
                {tag.text}
              </div>

              {/* Spray paint effect behind tag */}
              <div
                className={`absolute inset-0 ${tag.color} opacity-20 blur-xl -z-10`}
                style={{
                  transform: 'scale(1.5)',
                }}
              />
            </motion.div>
          ))}

          {/* Additional spray paint splatters */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`splatter-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="absolute rounded-full blur-2xl"
              style={{
                width: `${Math.random() * 150 + 100}px`,
                height: `${Math.random() * 150 + 100}px`,
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
                backgroundColor: [
                  '#ff006e',
                  '#8338ec',
                  '#3a86ff',
                  '#ffbe0b',
                  '#fb5607',
                  '#06ffa5',
                ][i % 6],
              }}
            />
          ))}
        </div>

        {/* Corner Tags */}
        <div className="absolute top-4 right-4">
          <motion.div
            initial={{ rotate: 0, scale: 0 }}
            whileInView={{ rotate: 15, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-yellow-400 text-black px-3 py-1 border-2 border-black font-black text-sm"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            2025
          </motion.div>
        </div>

        <div className="absolute bottom-4 left-4">
          <motion.div
            initial={{ rotate: 0, scale: 0 }}
            whileInView={{ rotate: -12, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-pink-500 text-white px-3 py-1 border-2 border-black font-black text-sm"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            REPRESENT
          </motion.div>
        </div>
      </div>

      {/* Bottom Row of Stickers */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mt-8"
      >
        {[
          { emoji: '🎨', text: 'CREATE', color: 'bg-purple-600' },
          { emoji: '💥', text: 'BOOM', color: 'bg-red-500' },
          { emoji: '⚡', text: 'FLASH', color: 'bg-yellow-400' },
          { emoji: '🔥', text: 'FIRE', color: 'bg-orange-500' },
          { emoji: '✨', text: 'SHINE', color: 'bg-cyan-500' },
        ].map((sticker) => (
          <motion.div
            key={sticker.text}
            whileHover={{
              rotate: [0, -10, 10, -10, 0],
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            className={`${sticker.color} px-4 py-2 rounded-full border-2 border-black flex items-center gap-2 cursor-pointer`}
            style={{
              boxShadow: '3px 3px 0 rgba(0,0,0,0.8)',
              transform: `rotate(${Math.random() * 10 - 5}deg)`,
            }}
          >
            <span className="text-xl">{sticker.emoji}</span>
            <span
              className="font-black text-white text-sm"
              style={{ fontFamily: 'Impact, sans-serif' }}
            >
              {sticker.text}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
