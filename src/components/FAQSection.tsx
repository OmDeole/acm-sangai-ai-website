"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is ACM SIGAI Student Chapter?",
    answer: "ACM SIGAI Student Chapter is a community of students passionate about Artificial Intelligence and Machine Learning. We organize workshops, hackathons, research sessions, and collaborative projects to help students learn and grow in the field of AI."
  },
  {
    question: "What kind of events does ACM SIGAI organize?",
    answer: "We organize a variety of events including technical workshops, guest lectures from industry experts, hackathons, research paper discussions, project showcases, and networking sessions. Check our Events section for upcoming activities."
  },
  {
    question: "Can I contribute to research projects through ACM SIGAI?",
    answer: "Absolutely! We encourage members to participate in research projects and provide guidance from faculty advisors and senior members. We also collaborate with other institutions and industry partners on cutting-edge AI research."
  },
  {
    question: "How can I stay updated with ACM SIGAI activities?",
    answer: "Follow us on our social media channels, join our mailing list, and check our website regularly for updates. We also have a dedicated communication channel where we share announcements, resources, and opportunities."
  }
];

interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
}

function FAQItem({ faq, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-xl overflow-hidden border border-white/5"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-primary" />
          ) : (
            <Plus className="w-4 h-4 text-primary" />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-400 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about ACM SIGAI
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}