"use client";
import { motion } from "motion/react";

const achievement = {
  title: "💡 Our AI journey has begun. Stay tuned for our first milestones!",
  image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&auto=format&fit=crop", // AI/achievement themed image
};

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

        <div className="flex flex-col md:flex-row bg-black/70 rounded-xl overflow-hidden shadow-lg w-full max-w-4xl mx-auto h-[300px]">
          {/* Image */}
          <div className="md:w-1/2 w-full h-48 md:h-full">
            <img
              src={achievement.image}
              alt="AI Achievement"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Content */}
          <div className="flex flex-col justify-center items-center md:items-start p-8 md:w-1/2 w-full h-full">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{achievement.title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}