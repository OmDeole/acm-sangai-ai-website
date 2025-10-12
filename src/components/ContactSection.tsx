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
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group glow-button"
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
                    <a href="mailto:pccoeacmsigai@pccoepune.org" className="text-gray-400 hover:text-accent transition-colors">
                      pccoeacmsigai@pccoepune.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+917218599251" className="text-gray-400 hover:text-accent transition-colors">
                      +91 72185 99251
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
                      Computer Engineering (Regional Language) Department<br />
                      PCCOE Sector no.- 26, Nigdi, Pune, Maharashtra 411044.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map section with actual Google Map */}
            <div className="glass rounded-2xl p-2 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d2673.0779439005664!2d73.76180091421031!3d18.650390702126035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m4!1s0x3bc2b9846e3e2685%3A0xe125bd81a1bfae64!3m2!1d18.650994999999998!2d73.7623629!4m5!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2zTVEzNytNM0MsIOCkqOCkv-Ckl-CkoeClgCDgpK7gpL7gpLDgpY3gpJcsIG5lYXIgQWt1cmRpIFJhaWx3YXkgU3RhdGlvbiBSb2FkLCBTZWN0b3IgTm8uIDI2LCBQcmFkaGlrYXJhbiwgTmlnZGksIFBpbXByaS1DaGluY2h3YWQsIE1haGFyYXNodHJhIDQxMTA0NA!3m2!1d18.6517288!2d73.7616398!5e0!3m2!1sen!2sin!4v1760261662130!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PCCOE Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}