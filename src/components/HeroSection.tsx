"use client";
import { motion } from "motion/react";
import LayoutTextFlipDemo from "./layout-text-flip-demo";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-32 overflow-hidden">
      {/* 3D Brain Background - Interactive */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="sketchfab-embed-wrapper w-full h-full">
          <iframe 
            title="Brain Point Cloud" 
            className="w-full h-full"
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            src="https://sketchfab.com/models/c427ea0aee214141a78eba37bf9b76bb/embed?autospin=0&autostart=1&transparent=1&ui_controls=1&ui_infos=0&ui_stop=0&ui_hint=2"
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80 pointer-events-none" />
      </div>

      <div className="mx-auto text-center relative z-10 space-y-8 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold gradient-text drop-shadow-2xl">
          ACM SIGAI
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}>
          <LayoutTextFlipDemo />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mx-auto leading-relaxed max-w-3xl px-4">
          Empowering students through cutting-edge technology, innovation, and collaborative learning
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-4">
          <a
            href="#projects"
            className="inline-block px-10 py-4 bg-accent text-background font-semibold text-lg rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-xl hover:shadow-accent/50 hover:scale-105">
            Explore Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}