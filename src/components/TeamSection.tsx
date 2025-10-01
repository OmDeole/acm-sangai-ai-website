"use client";
import { motion } from "motion/react";
import { Linkedin, Github, Mail } from "lucide-react";

// Faculty Advisors - Top Tier
const facultyAdvisors = [
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
    name: "Dr. Rajesh Kumar",
    role: "Faculty Co-Advisor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop",
    bio: "Professor of Computer Science, AI Ethics Specialist",
    linkedin: "#",
    github: "#",
    email: "#",
  },
];

// Leadership Team - Second Tier
const leadershipTeam = [
  {
    name: "Arjun Mehta",
    role: "Chapter Chair",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    bio: "Final Year CS, AI Researcher, 3x Hackathon Winner",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Neha Gupta",
    role: "Vice Chair",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
    bio: "ML Engineer Intern, Deep Learning Enthusiast",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Rohan Patel",
    role: "Secretary",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
    bio: "Full Stack Dev, Open Source Contributor",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Ananya Singh",
    role: "Treasurer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop",
    bio: "Event Management Expert, Community Builder",
    linkedin: "#",
    github: "#",
    email: "#",
  },
];

// Other Team Members - Third Tier
const teamMembers = [
  {
    name: "Vikram Reddy",
    role: "Research Coordinator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
    bio: "NLP Researcher, Published Author",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Priya Desai",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop",
    bio: "Web Development Expert, UI/UX Designer",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Karan Verma",
    role: "Events Coordinator",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop",
    bio: "Community Builder, Workshop Organizer",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Shreya Nair",
    role: "Content Head",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop",
    bio: "Tech Writer, Social Media Strategist",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Aditya Sharma",
    role: "Outreach Lead",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop",
    bio: "Industry Liaison, Partnership Developer",
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Divya Patel",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop",
    bio: "Graphic Designer, Brand Identity Specialist",
    linkedin: "#",
    github: "#",
    email: "#",
  },
];

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin: string;
    github: string;
    email: string;
  };
  index: number;
  featured?: boolean;
}

function TeamMemberCard({ member, index, featured = false }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className={`group relative overflow-hidden rounded-2xl ${
        featured 
          ? "bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 border-2 border-primary/30" 
          : "glass"
      }`}
    >
      {/* Glassmorphism overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-accent text-background text-xs font-bold shadow-lg">
          Faculty
        </div>
      )}
      
      {/* Image container */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        {/* Name and role overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold mb-1 text-white drop-shadow-lg">{member.name}</h3>
          <p className={`text-sm font-semibold ${featured ? "text-accent" : "text-secondary"}`}>
            {member.role}
          </p>
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-6 space-y-4">
        <p className="text-gray-400 text-sm leading-relaxed min-h-[3rem]">{member.bio}</p>
        
        {/* Social links */}
        <div className="flex gap-3 pt-2">
          <a
            href={member.linkedin}
            className="flex-1 h-11 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group/link border border-primary/20"
          >
            <Linkedin className="w-5 h-5 text-primary group-hover/link:text-white transition-colors" />
          </a>
          <a
            href={member.github}
            className="flex-1 h-11 rounded-lg bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-black transition-all duration-300 group/link border border-secondary/20"
          >
            <Github className="w-5 h-5 text-secondary group-hover/link:text-black transition-colors" />
          </a>
          <a
            href={member.email}
            className="flex-1 h-11 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300 group/link border border-accent/20"
          >
            <Mail className="w-5 h-5 text-accent group-hover/link:text-black transition-colors" />
          </a>
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
        featured ? "shadow-[0_0_40px_rgba(123,97,255,0.3)]" : "shadow-[0_0_30px_rgba(0,230,230,0.2)]"
      }`} />
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate individuals driving innovation and excellence in AI research
          </p>
        </motion.div>

        {/* Faculty Advisors Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-center"
          >
            <span className="gradient-text">Faculty Advisors</span>
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultyAdvisors.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} featured={true} />
            ))}
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-center text-secondary"
          >
            Leadership Team
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-center text-accent"
          >
            Core Team
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}