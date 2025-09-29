"use client";
import { motion } from "motion/react";
import TiltedCard from "@/components/ui/TiltedCard";
import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "AI Image Generator",
    description: "Generate stunning AI-powered images using state-of-the-art diffusion models",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tech: ["Python", "TensorFlow", "Stable Diffusion"],
    stars: 245,
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Smart Campus Assistant",
    description: "NLP-powered chatbot to help students navigate campus resources and services",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "OpenAI"],
    stars: 189,
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Code Review AI",
    description: "Automated code review system using machine learning for better code quality",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    tech: ["Python", "FastAPI", "GPT-4"],
    stars: 312,
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Voice Command System",
    description: "Real-time voice recognition system for hands-free device control",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
    tech: ["Python", "PyTorch", "Whisper"],
    stars: 156,
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Blockchain Voting",
    description: "Secure and transparent voting system built on blockchain technology",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    tech: ["Solidity", "Web3.js", "React"],
    stars: 201,
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Health Tracker ML",
    description: "Machine learning model to predict health trends from wearable device data",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    tech: ["Python", "Scikit-learn", "Flask"],
    stars: 178,
    github: "https://github.com",
    demo: "https://demo.com"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  <div className="w-full h-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="text-sm text-white font-medium">{project.stars}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="flex items-center gap-1 px-3 py-1 text-sm rounded-lg bg-accent/20 text-accent border border-accent/30 hover:bg-accent hover:text-black transition-all"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-1 px-3 py-1 text-sm rounded-lg bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary hover:text-black transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
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