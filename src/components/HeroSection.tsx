"use client";
import { motion } from "motion/react";
import LayoutTextFlipDemo from "./layout-text-flip-demo";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-32 overflow-hidden">
      {/* Interactive Background Ripple Effect */}
      <BackgroundRippleEffect />

      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-12">
        {/* Bold ACM SIGAI Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold gradient-text md:!text-7xl">
          ACM SIGAI
        </motion.h1>

        {/* Layout Text Flip moved up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}>
          <LayoutTextFlipDemo />
        </motion.div>

        {/* Subtitle moved down */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Empowering students through cutting-edge technology, innovation, and collaborative learning
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/50 hover:scale-105">
            Explore Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}