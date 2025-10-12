"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

// Team data organized by year - merged leadership into core team
const teamData = {
  "2024-25": {
    faculty: [
      {
        name: "Dr. Rachana Patil",
        role: "Head of Department",
        image: "/Images/Rachana patil ma'am.jpg",
        linkedin: "https://linkedin.com/in/dr-rachana-patil-0b657b129"
      },
      {
        name: "Prof. Ganesh Deshmukh",
        role: "Faculty Sponsor",
        image: "/Images/GDSIR3.jpg",
        linkedin: "https://linkedin.com/in/ganesh-deshmukh-45a96372",
      },
    ],
    core: [
      {
        name: "Advait Nathe",
        role: "Chapter Chair",
        image: "/Images/advaitcrop.jpg",
        linkedin: "https://linkedin.com/in/advaitnathe",
      },
      {
        name: "Om Kawad",
        role: "Chapter Vice Chair",
        image: "/Images/omcrop.JPG",
        linkedin: "https://www.linkedin.com/in/om-kawad-a0a52227a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Adhya Bhagat",
        role: "Secretary",
        image: "/Images/adhyacrop.jpg",
        linkedin: " https://www.linkedin.com/in/adhya-bhagat-a459ba2ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Pratik Ghavate",
        role: "Treasurer",
        image: "/Images/pratikcrop.jpg",
        linkedin: " https://www.linkedin.com/in/pratik-ghavate-2b27082bb ",
      },
       {
        name: "Ishwar Sonawane",
        role: "WebMaster",
        image: "/Images/ishwarcrop.jpg",
        linkedin: " https://linkedin.com/in/ishwar-s-sonawane",
      },
      {
        name: "Siddhesh Sarphale",
        role: "Membership Chair",
        image: "/Images/siddheshcrop.jpg",
        linkedin: " https://www.linkedin.com/in/siddhesh-sarphale-1411292ba",
      },
      {
        name: "Sanskruti Soitkar",
        role: "Co-Secretary",
        image: "/Images/sanskruticrop.jpg",
        linkedin: "https://www.linkedin.com/in/sanskruti-a-soitkar-bb140934a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
       {
        name: "Venu More",
        role: "Co-Treasurer",
        image: "/Images/venucrop.jpg",
        linkedin: "https://www.linkedin.com/in/venumore2230",
      },
      {
        name: "Onkar Chand",
        role: "Management Executive",
        image: "/Images/onkarcrop.jpg",
        linkedin: "https://www.linkedin.com/in/onkar-chand-00a153294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Suhani Thakare",
        role: "Management Executive",
        image: "/Images/suhanicrop.jpg",
        linkedin: " https://www.linkedin.com/in/suhani-thakare-76727a330/",
      },
      {
        name: "Tejas Parkar",
        role: "Tech Head",
        image: "Images/tejascrop.jpg",
        linkedin: "https://www.linkedin.com/in/tejas-parkar-105a9827b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Sakshi Patil",
        role: "Design Head",
        image: "Images/sakshicrop.jpg",
        linkedin: " https://www.linkedin.com/in/sakshi-patil-864494299",
      },
      {
        name: "Prem Chaudhari",
        role: "PR & Social Media Head",
        image: "/Images/premcrop.jpg",
        linkedin: "https://www.linkedin.com/in/prem-chaudhari-185372373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
          {
        name: "Esha Bhamare",
        role: "Co-PR & Social Media Head",
        image: "/Images/ishacrop.jpg",
        linkedin: "https://www.linkedin.com/in/isha-bhamare-7878a8367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Shagun Chaudhari",
        role: "Marketing Head",
        image: "/Images/shaguncrop.jpg",
        linkedin: "https://www.linkedin.com/in/shagun-chaudhari-002738313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Nihar Salvi",
        role: "Associate Member",
        image: "/Images/niharcrop.jpg",
        linkedin: "https://www.linkedin.com/in/nihar-salvi-997b04311/",
      },
        {
        name: "Sushant Didwagh",
        role: "Associate Member",
        image: "/Images/sushantcrop.jpg",
        linkedin: " https://www.linkedin.com/in/sushant-didwagh-9bb1952b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
        {
        name: "Yadnesh Patil",
        role: "Associate Member",
        image: "/Images/yadneshcrop.jpg",
        linkedin: "https://www.linkedin.com/in/yadnesh-patil-799a9b29a/",
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
          target="_blank"
          rel="noopener noreferrer"
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
          target="_blank"
          rel="noopener noreferrer"
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

  const coreMembers = teamData["2024-25"].core;
const chair = coreMembers.find(m => m.role === "Chapter Chair");
const viceChair = coreMembers.find(m => m.role === "Chapter Vice Chair");
const rest = coreMembers.filter(
  m => m.role !== "Chapter Chair" && m.role !== "Chapter Vice Chair"
);

// Arrange: [empty, Chair, Vice Chair, empty, ...rest]
const core = [
  null, // empty slot 1
  chair,
  viceChair,
  null, // empty slot 4
  ...rest,
];

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
            {core.map((member, index) =>
              member ? (
                <CoreMemberCard key={member.name} member={member} index={index} />
              ) : (
                // Render an empty div for empty slots
                <div key={`empty-${index}`} />
              )
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}