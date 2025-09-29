"use client";
import { motion } from "motion/react";
import { Brain, Database, Eye, Cpu, Network, Zap } from "lucide-react";

const researchAreas = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Advanced algorithms, neural networks, and deep learning architectures for intelligent systems.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image recognition, object detection, and visual understanding using cutting-edge AI models.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Database,
    title: "Natural Language Processing",
    description: "Text analysis, language understanding, and generation using transformer-based models.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Network,
    title: "Distributed Systems",
    description: "Scalable architectures, cloud computing, and distributed machine learning frameworks.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Cpu,
    title: "Edge AI & IoT",
    description: "Deploying AI models on edge devices for real-time intelligent applications.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Zap,
    title: "Reinforcement Learning",
    description: "Agent-based learning systems for decision making and autonomous control.",
    gradient: "from-accent to-secondary",
  },
];

export default function ResearchSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Research <span className="gradient-text">Areas</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Exploring the frontiers of artificial intelligence and computing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="glass rounded-xl p-6 hover:border-primary/50 transition-all group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
            </motion.div>
          ))}
        </div>

        {/* Research Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop"
                alt="AI Research"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">Research Publications</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our chapter has published over 15 research papers in prestigious conferences like 
                NeurIPS, ICML, CVPR, and ACL. We collaborate with leading research institutions 
                and industry partners to push the boundaries of AI research.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Members get opportunities to work on cutting-edge research projects, publish papers, 
                and present at international conferences.
              </p>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-gray-400">15+ Publications</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-gray-400">8+ Collaborations</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}