'use client'

import { motion } from 'framer-motion'
import { User, Cpu, BookOpen, Award } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Interactive Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-accent-cyan/20 rounded-3xl blur-3xl" />
              <div className="glass h-full w-full rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <Cpu className="w-8 h-8 text-accent-cyan animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Innovation Mindset</h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  "I combine technical thinking with creative design to build immersive modern websites."
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-dark p-4 rounded-xl">
                    <p className="text-accent-cyan font-bold text-2xl">1 year+</p>
                    <p className="text-xs text-white/40 uppercase">Years Exp</p>
                  </div>
                  <div className="glass-dark p-4 rounded-xl">
                    <p className="text-accent-purple font-bold text-2xl">3+</p>
                    <p className="text-xs text-white/40 uppercase">Projects</p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                    <span className="text-sm">Mechanical Engineering Student</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-purple" />
                    <span className="text-sm">Frontend/Web Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-accent-cyan font-medium tracking-widest uppercase text-sm mb-2 flex items-center gap-2">
                <User className="w-4 h-4" /> About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">
                Crafting the <span className="text-gradient">Future</span> of Web.
              </h3>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                I am <span className="text-white font-semibold">Jayakrishna Gude</span>, a Mechanical Engineering student passionate about web development, UI/UX, and futuristic digital experiences. My unique background allows me to approach coding with a structured engineering mindset while maintaining a keen eye for aesthetic excellence.
              </p>

              <div className="space-y-6">
                {[
                  { icon: BookOpen, title: "Constant Learner", desc: "Always exploring new technologies and design trends." },
                  { icon: Award, title: "Award-Winning Ambition", desc: "Striving to create sites that stand out on global platforms." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-white/40 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-accent-purple/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-accent-cyan/10 rounded-full blur-[100px]" />
    </section>
  )
}
