"use client";
import { motion } from "motion/react";
import TiltedCard from "@/components/ui/TiltedCard";
import { Sparkles } from "lucide-react";

const projects = [
  {
    title: "Coming Soon",
    description: "Exciting projects are in the pipeline. Stay tuned for groundbreaking AI innovations!",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-10xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-10xl mx-auto">
           Showcasing our students innovative projects in AI and emerging technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-4xl"
            >
              <div className="flex flex-col md:flex-row bg-black/70 rounded-xl overflow-hidden shadow-lg w-full h-[300px]">
                {/* Image */}
                <div className="md:w-1/2 w-full h-48 md:h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col justify-center items-center md:items-start p-8 md:w-1/2 w-full h-full">
                  <Sparkles className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-lg text-gray-300 text-center md:text-left">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}