"use client";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Name</label>
                <Input
                  placeholder="Your name"
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Subject</label>
                <Input
                  placeholder="What's this about?"
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell us more..."
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold glow group"
                size="lg"
              >
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:acm.sangai@university.edu" className="text-gray-400 hover:text-accent transition-colors">
                      acm.sangai@university.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+911234567890" className="text-gray-400 hover:text-accent transition-colors">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">
                      Computer Science Department<br />
                      University Campus, City - 123456
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex-1 py-3 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all text-center font-semibold"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="flex-1 py-3 rounded-lg bg-secondary/10 hover:bg-secondary text-secondary hover:text-black transition-all text-center font-semibold"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="flex-1 py-3 rounded-lg bg-accent/10 hover:bg-accent text-accent hover:text-black transition-all text-center font-semibold"
                >
                  Twitter
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass rounded-2xl p-2 overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}