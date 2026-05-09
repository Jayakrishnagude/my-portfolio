'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Instagram, Send, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <footer id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-accent-cyan font-mono tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <span className="text-gradient">legendary</span>.</h3>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", val: "jayakrishnagude123@gmail.com" },
                { icon: Phone, label: "Phone", val: "+91 74164 43109" },
                { icon: MapPin, label: "Location", val: "Andhra Pradesh, India" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30 transition-all">
                    <item.icon className="w-6 h-6 text-white group-hover:text-accent-cyan transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{item.label}</p>
                    <p className="text-xl font-medium">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-16">
              <motion.a
                href="https://www.linkedin.com/in/jayakrishnagude/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com/Jayakrishnagude"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/l_jaya_krishna_?igsh=MWNqaXdvbzY1Nmg4ag=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Glass Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-8 md:p-12 rounded-[40px]"
          >
            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const message = formData.get('message');
                window.location.href = `mailto:jayakrishnagude123@gmail.com?subject=Contact from ${name}&body=${message}`;
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-2">Name</label>
                  <input name="name" type="text" placeholder="John Doe" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-cyan transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-2">Email</label>
                  <input name="email" type="email" placeholder="john@example.com" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-cyan transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-2">Message</label>
                <textarea name="message" rows={4} placeholder="Your message here..." required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-cyan transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full py-5 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-2xl font-bold text-black flex items-center justify-center gap-3 hover:opacity-90 transition-opacity">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Jayakrishna Gude. Built with passion and code.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-white/40 hover:text-accent-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/40 hover:text-accent-cyan transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[150px] -z-10" />
    </footer>
  )
}
