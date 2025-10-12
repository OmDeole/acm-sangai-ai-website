"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is PCCOE ACM SIGAI?",
    answer: "APCCOE ACM SIGAI is the Special Interest Group on Artificial Intelligence at our college, affiliated with ACM. We bring together students, researchers, and professionals passionate about AI to learn, collaborate, and innovate."
  },
  {
    question: "Who can join PCCOE ACM SIGAI?",
    answer: "Any student or researcher interested in AI, Machine Learning, and related technologies can join our chapter."
  },
  {
    question: "What activities and competitions does the chapter organize?",
    answer: "Workshops, hackathons, quizzes, AI/ML learning series, and technical competitions — plus chances to participate in ICPC and AI summer/winter schools."
  },
  {
    question: "How can I stay updated about upcoming events?",
    answer: "You can follow our website, social media pages, and mailing list for announcements about events, workshops, and competitions."
  },
  {
    question: "Who can I contact for more information?",
    answer:"You can reach out via the contact form on our website or connect with our chapter coordinators listed on the team page.",
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