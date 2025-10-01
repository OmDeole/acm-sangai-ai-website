"use client";
import { useState } from "react";
import { motion } from "motion/react";
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group glass rounded-xl overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-sm text-accent">{member.role}</p>
        </div>
      </div>
      
      <div className="p-4 flex gap-2">
        <a
          href={member.linkedin}
          className="flex-1 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href={member.github}
          className="flex-1 h-10 rounded-lg bg-secondary/10 flex items-center justify-center hover:bg-secondary transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={member.email}
          className="flex-1 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent transition-colors"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const [selectedYear, setSelectedYear] = useState("2024-25");

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

        {/* Year Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(teamData).map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedYear === year
                  ? "bg-primary text-white"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Team Category Tabs */}
        <Tabs defaultValue="faculty" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="leadership">Leadership</TabsTrigger>
            <TabsTrigger value="core">Core Team</TabsTrigger>
          </TabsList>

          <TabsContent value="faculty">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamData[selectedYear as keyof typeof teamData].faculty.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leadership">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData[selectedYear as keyof typeof teamData].leadership.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="core">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData[selectedYear as keyof typeof teamData].core.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}