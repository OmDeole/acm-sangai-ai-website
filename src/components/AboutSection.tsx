"use client";
import { motion } from "motion/react";
import { Target, Users, Lightbulb, Award } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const features = [
  {
    icon: Target,
    title: "Our Mission",
    highlightWord: "Mission",
    description: "To foster innovation and technical excellence through collaborative learning and cutting-edge research in AI and computing.",
  },
  {
    icon: Users,
    title: "Community",
    highlightWord: "Community",
    description: "Building a vibrant community of tech enthusiasts, researchers, and innovators working together to shape the future.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    highlightWord: "Innovation",
    description: "Encouraging creative problem-solving and hands-on experience with the latest technologies in AI and machine learning.",
  },
  {
    icon: Award,
    title: "Excellence",
    highlightWord: "Excellence",
    description: "Committed to maintaining the highest standards in research, projects, and professional development opportunities.",
  },
];

export default function AboutSection() {
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
            About <span className="gradient-text">ACM SIGAI</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A premier student chapter dedicated to advancing computing as a science and profession
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CardSpotlight className="h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 relative z-20">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 relative z-20 text-white">
                  {feature.title.split(" ").map((word, idx) => 
                    word === feature.highlightWord ? (
                      <PointerHighlight 
                        key={idx}
                        pointerClassName="text-accent"
                        rectangleClassName="border-accent/50"
                        containerClassName="inline-block mx-1"
                      >
                        <span>{word}</span>
                      </PointerHighlight>
                    ) : (
                      <span key={idx}>{word} </span>
                    )
                  )}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-20">{feature.description}</p>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">Who We Are</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                ACM SIGAI is the Special Interest Group on Artificial Intelligence at our institution, 
                affiliated with the Association for Computing Machinery (ACM). We bring together students, 
                researchers, and industry professionals passionate about AI and computing.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through workshops, hackathons, research symposiums, and industry collaborations, we provide 
                our members with unparalleled opportunities to learn, innovate, and lead in the rapidly 
                evolving field of technology.
              </p>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}