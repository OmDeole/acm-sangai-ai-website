"use client";
import { motion } from "motion/react";
import { Linkedin, Github, Mail } from "lucide-react";

const team = [
  {
    name: "Dr. Priya Sharma",
    role: "Faculty Advisor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
    bio: "PhD in AI, 15+ years experience in ML research",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Arjun Mehta",
    role: "Chapter President",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    bio: "Final Year CS, AI Researcher, 3x Hackathon Winner",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Neha Gupta",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
    bio: "ML Engineer Intern, Deep Learning Enthusiast",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Rohan Patel",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
    bio: "Full Stack Dev, Open Source Contributor",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Ananya Singh",
    role: "Events Head",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop",
    bio: "Event Management Expert, Community Builder",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Vikram Reddy",
    role: "Research Coordinator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
    bio: "NLP Researcher, Published Author",
    linkedin: "#",
    github: "#",
    email: "#",
  },
];

export default function TeamSection() {
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
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate individuals driving innovation and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent text-sm font-semibold">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-primary group-hover:text-white" />
                  </a>
                  <a
                    href={member.github}
                    className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-black transition-all group"
                  >
                    <Github className="w-5 h-5 text-secondary group-hover:text-black" />
                  </a>
                  <a
                    href={member.email}
                    className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all group"
                  >
                    <Mail className="w-5 h-5 text-accent group-hover:text-black" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}