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

      <div className="max-w-7xl mx-auto relative z-10">
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
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative solutions built by our talented members
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
              className="max-w-md"
            >
              <TiltedCard
                imageSrc={project.image}
                altText={project.title}
                captionText={project.title}
                containerHeight="350px"
                containerWidth="100%"
                imageHeight="250px"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <Sparkles className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-sm text-gray-300 text-center">{project.description}</p>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}