"use client";
import { motion } from "motion/react";
import { FocusCards } from "@/components/ui/focus-cards";

const achievements = [
  {
    title: "Coming Soon",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
  }
];

export default function AchievementsSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-400">
            Celebrating milestones and recognitions that inspire us forward
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FocusCards cards={achievements} />
        </motion.div>
      </div>
    </section>
  );
}