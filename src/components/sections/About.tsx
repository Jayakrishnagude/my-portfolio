'use client'

import { motion } from 'framer-motion'
import { User, Cpu, BookOpen, Award } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-8 md:p-16 overflow-hidden relative group">
          {/* Internal Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,136,0.15),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            {/* Left: Content */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-accent-green font-mono tracking-[0.2em] uppercase text-xs mb-4 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-accent-green"></span> <User className="w-4 h-4" /> About Me
                </h2>
                <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[1.1]">
                  Crafting the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-white">Future</span> of Web.
                </h3>
                <p className="text-lg text-white/50 leading-relaxed mb-10 font-light">
                  I am <strong className="text-white font-medium">Jayakrishna Gude</strong>, a Mechanical Engineering student passionate about web development, UI/UX, and futuristic digital experiences. I approach coding with a structured engineering mindset while maintaining a relentless focus on aesthetic excellence.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: BookOpen, title: "Constant Learner", desc: "Exploring new tech & design." },
                    { icon: Award, title: "Ambitious", desc: "Building global standard sites." }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -5 }}
                      className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-green/30 transition-all group/card"
                    >
                      <item.icon className="w-6 h-6 text-accent-green mb-4 group-hover/card:scale-110 transition-transform" />
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Interactive Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative w-full aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-accent-green/10 rounded-full blur-[80px] animate-pulse" />
              <div className="bg-black/50 backdrop-blur-md border border-white/10 h-full w-full rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-8 right-8">
                  <Cpu className="w-8 h-8 text-accent-green/50" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/5 p-6 rounded-3xl">
                    <p className="text-accent-green font-black text-4xl mb-1">1<span className="text-xl">+</span></p>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-mono">Years Exp</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-6 rounded-3xl">
                    <p className="text-white font-black text-4xl mb-1">3<span className="text-xl text-accent-green">+</span></p>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-mono">Projects</p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-white/10 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-white/20 relative">
                      <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-50" />
                    </div>
                    <span className="text-sm font-medium tracking-wide">Mechanical Engineering Student</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-accent-green relative">
                      <div className="absolute inset-0 bg-accent-green rounded-full animate-ping opacity-50" />
                    </div>
                    <span className="text-sm font-medium tracking-wide">Frontend/Web Developer</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
