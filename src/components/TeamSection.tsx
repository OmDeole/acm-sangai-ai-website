"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Github, Mail } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Team data organized by year and category
const teamData = {
  "2024-25": {
    faculty: [
      {
        name: "Dr. Priya Sharma",
        role: "Faculty Advisor",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
        linkedin: "#",
        github: "#",
        email: "#",
      },
      {
        name: "Dr. Rajesh Kumar",
        role: "Faculty Co-Advisor",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop",
        linkedin: "#",
        github: "#",
        email: "#",
      },
    ],
    leadership: [
      {
        name: "Arjun Mehta",
        role: "Chapter Chair",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
        linkedin: "#",
        github: "#",
        email: "#",
      },
      {
        name: "Neha Gupta",
        role: "Vice Chair",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
        linkedin: "#",
        github: "#",
        email: "#",
      },
      {
        name: "Rohan Patel",
        role: "Secretary",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
        linkedin: "#",
        github: "#",
        email: "#",
      },
      {
        name: "Ananya Singh",
        role: "Treasurer",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop",
        linkedin: "#",
        github: "#",
        email: "#",
      },
    ],
    core: [
      {
        name: "Vikram Reddy",
        role: "Research Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
        linkedin: "#",
        github: "#",
        email: "#",
      },
      {
        name: "Priya Desai",
        role: "Technical Lead",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop",
        linkedin: "#",
        github: "#",
        email: "#",
      },
      {
        name: "Karan Verma",
        role: "Events Lead",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop",
        linkedin: "#",
        github: "#",
        email: "#",
      },
      {
        name: "Shreya Nair",
        role: "Content Lead",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop",
        linkedin: "#",
        github: "#",
        email: "#",
      },
    ],
  },
  "2023-24": {
    faculty: [
      {
        name: "Dr. Priya Sharma",
        role: "Faculty Advisor",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
        linkedin: "#",
        github: "#",
        email: "#",
      },
    ],
    leadership: [
      {
        name: "Rahul Verma",
        role: "Chapter Chair",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop",
        linkedin: "#",
        github: "#",
        email: "#",
      },
      {
        name: "Anjali Desai",
        role: "Vice Chair",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop",
        linkedin: "#",
        github: "#",
        email: "#",
      },
    ],
    core: [
      {
        name: "Sanjay Kumar",
        role: "Technical Lead",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
        linkedin: "#",
        github: "#",
        email: "#",
      },
    ],
  },
};

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    image: string;
    linkedin: string;
    github: string;
    email: string;
  };
  index: number;
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
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
        <motion.a
          href={member.github}
          className="flex-1 h-10 rounded-lg bg-secondary/10 flex items-center justify-center hover:bg-secondary transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="w-4 h-4" />
        </motion.a>
        <motion.a
          href={member.email}
          className="flex-1 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const [selectedYear, setSelectedYear] = useState("2024-25");
  const [activeTab, setActiveTab] = useState("faculty");

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

        {/* Year Selector with animations */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(teamData).map((year) => (
            <motion.button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all relative overflow-hidden ${
                selectedYear === year
                  ? "bg-primary text-white"
                  : "glass text-gray-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {selectedYear === year && (
                <motion.div
                  layoutId="yearSelector"
                  className="absolute inset-0 bg-primary"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{year}</span>
            </motion.button>
          ))}
        </div>

        {/* Team Category Tabs with enhanced animations */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 glass">
            <TabsTrigger value="faculty" className="relative data-[state=active]:text-primary">
              Faculty
            </TabsTrigger>
            <TabsTrigger value="leadership" className="relative data-[state=active]:text-primary">
              Leadership
            </TabsTrigger>
            <TabsTrigger value="core" className="relative data-[state=active]:text-primary">
              Core Team
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent value="faculty" key="faculty">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {teamData[selectedYear as keyof typeof teamData].faculty.map((member, index) => (
                  <TeamMemberCard key={member.name} member={member} index={index} />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="leadership" key="leadership">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {teamData[selectedYear as keyof typeof teamData].leadership.map((member, index) => (
                  <TeamMemberCard key={member.name} member={member} index={index} />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="core" key="core">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {teamData[selectedYear as keyof typeof teamData].core.map((member, index) => (
                  <TeamMemberCard key={member.name} member={member} index={index} />
                ))}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}