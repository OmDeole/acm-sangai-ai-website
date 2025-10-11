"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

// Team data organized by year - merged leadership into core team
const teamData = {
  "2024-25": {
    faculty: [
      {
        name: "Dr. Priya Sharma",
        role: "Faculty Advisor",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Dr. Rajesh Kumar",
        role: "Faculty Co-Advisor",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
    ],
    core: [
      {
        name: "Arjun Mehta",
        role: "Chapter Chair",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Neha Gupta",
        role: "Vice Chair",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Rohan Patel",
        role: "Secretary",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Ananya Singh",
        role: "Treasurer",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Vikram Reddy",
        role: "Research Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Priya Desai",
        role: "Technical Lead",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Karan Verma",
        role: "Events Lead",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Shreya Nair",
        role: "Content Lead",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Aditya Shah",
        role: "Marketing Lead",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Ishita Joshi",
        role: "Design Lead",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Siddharth Iyer",
        role: "Outreach Lead",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Kavya Malhotra",
        role: "Social Media Lead",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Amit Kapoor",
        role: "Web Development Lead",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Divya Menon",
        role: "AI/ML Lead",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Rahul Singh",
        role: "Data Science Lead",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Pooja Rao",
        role: "Community Manager",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Vishal Sharma",
        role: "Public Relations Lead",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
      {
        name: "Meera Patel",
        role: "Workshop Coordinator",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
        linkedin: "#",
      },
    ],
  },
};

interface FacultyMemberCardProps {
  member: {
    name: string;
    role: string;
    image: string;
    linkedin: string;
  };
  index: number;
}

interface CoreMemberCardProps {
  member: {
    name: string;
    role: string;
    image: string;
    linkedin: string;
  };
  index: number;
}

function FacultyMemberCard({ member, index }: FacultyMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group glass rounded-xl overflow-hidden relative"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.15 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4"
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-sm text-accent">{member.role}</p>
        </motion.div>
      </div>
      
      <div className="p-4 flex gap-2 relative z-10">
        <motion.a
          href={member.linkedin}
          className="flex-1 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Linkedin className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}

function CoreMemberCard({ member, index }: CoreMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group glass rounded-xl overflow-hidden relative"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-3"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-bold text-white">{member.name}</h3>
          <p className="text-xs text-accent">{member.role}</p>
        </motion.div>
      </div>
      
      <div className="p-3 flex gap-2 relative z-10">
        <motion.a
          href={member.linkedin}
          className="flex-1 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Linkedin className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<"faculty" | "core">("faculty");

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-400">
            Passionate individuals driving innovation in AI
          </p>
        </motion.div>

        {/* Simple toggle between Faculty and Core Team */}
        <div className="flex justify-center gap-4 mb-12">
          <motion.button
            onClick={() => setActiveTab("faculty")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all relative ${
              activeTab === "faculty"
                ? "bg-primary text-white"
                : "glass text-gray-400 hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeTab === "faculty" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary rounded-lg"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">Faculty</span>
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab("core")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all relative ${
              activeTab === "core"
                ? "bg-primary text-white"
                : "glass text-gray-400 hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeTab === "core" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary rounded-lg"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">Core Team</span>
          </motion.button>
        </div>

        {/* Team Cards */}
        {activeTab === "faculty" && (
          <motion.div
            key="faculty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center gap-6"
          >
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
              {teamData["2024-25"].faculty.map((member, index) => (
                <FacultyMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "core" && (
          <motion.div
            key="core"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {teamData["2024-25"].core.map((member, index) => (
              <CoreMemberCard key={member.name} member={member} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}