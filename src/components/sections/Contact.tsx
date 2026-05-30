'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Instagram, Send, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <footer id="contact" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-24">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-accent-green font-mono tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <span className="text-gradient">legendary</span>.</h3>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {[
                { icon: Mail, label: "Email", val: "jayakrishnagude123@gmail.com", link: "mailto:jayakrishnagude123@gmail.com" },
                { icon: Phone, label: "Phone", val: "+91 74164 43109", link: "tel:+917416443109" },
                { icon: MapPin, label: "Location", val: "Andhra Pradesh, India", link: "#" }
              ].map((item, i) => (
                <a key={i} href={item.link} className="flex gap-4 items-center group glass px-6 py-4 rounded-2xl hover:border-accent-green/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-green/10 group-hover:border-accent-green/30 transition-all">
                    <item.icon className="w-5 h-5 text-white group-hover:text-accent-green transition-colors" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white/40 uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg font-medium group-hover:text-accent-green transition-colors">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-6">
              <motion.a
                href="https://www.linkedin.com/in/jayakrishnagude/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-green/20 hover:border-accent-green/50 hover:text-accent-green transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/Jayakrishnagude"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-green/20 hover:border-accent-green/50 hover:text-accent-green transition-all"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/l_jaya_krishna_?igsh=MWNqaXdvbzY1Nmg4ag=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-green/20 hover:border-accent-green/50 hover:text-accent-green transition-all"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Jayakrishna Gude. Built with passion and code.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-white/40 hover:text-accent-green transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/40 hover:text-accent-green transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-green/5 rounded-full blur-[150px] -z-10" />
    </footer>
  )
}
