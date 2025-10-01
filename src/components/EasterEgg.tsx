"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X } from "lucide-react";

export default function EasterEgg() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl+Shift+Q
      if (e.ctrlKey && e.shiftKey && e.key === "Q") {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] w-[90%] max-w-md"
          >
            <div className="glass rounded-2xl p-8 relative border border-accent/20 shadow-2xl">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Content */}
              <div className="text-center space-y-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold gradient-text">
                  You found it! 🎉
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  This beautiful website was crafted with passion and precision by
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-6 py-3 rounded-lg bg-accent/10 border border-accent/30"
                >
                  <p className="text-accent font-bold text-lg">Om Deole</p>
                </motion.div>

                <p className="text-gray-500 text-xs italic">
                  Psst... Press Ctrl+Shift+Q to toggle this message
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}