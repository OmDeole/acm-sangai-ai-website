"use client";
import { motion } from "motion/react";
import { Sparkles, Mail, MapPin, Phone, Linkedin, Github, Twitter, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Projects", href: "#projects" },
];

const resources = [
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-[#08090E] border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">ACM SIGAI</span>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering students through cutting-edge technology, innovation, and collaborative learning in AI and computing.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all group"
                >
                  <social.icon className="w-5 h-5 text-accent group-hover:text-black" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:acm.sigai@university.edu" className="text-gray-400 hover:text-accent transition-colors">
                  acm.sigai@university.edu
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-accent transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Computer Science Dept.<br />
                  University Campus
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 ACM SIGAI Student Chapter. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
    </footer>
  );
}