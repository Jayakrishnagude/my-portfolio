'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Terminal, Layout, Cpu, Boxes } from 'lucide-react'

const skills = [
  { name: "Web Development", icon: Code2, color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "Frontend Development", icon: Layout, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { name: "UI/UX Design", icon: Palette, color: "text-purple-400", bg: "bg-purple-400/10" },
  { name: "C Programming", icon: Terminal, color: "text-green-400", bg: "bg-green-400/10" },
  { name: "AI Web Development", icon: Cpu, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { name: "React", icon: Boxes, color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { name: "JavaScript", icon: Code2, color: "text-yellow-300", bg: "bg-yellow-300/10" },
  { name: "Responsive Design", icon: Layout, color: "text-orange-400", bg: "bg-orange-400/10" }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-accent-cyan font-mono tracking-widest uppercase text-sm mb-4">Tech Stack</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Skills & <span className="text-gradient">Tools</span></h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 242, 255, 0.1)" 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                delay: i * 0.05 
              }}
              className="glass p-8 rounded-3xl group cursor-default"
            >
              <div className={`w-16 h-16 rounded-2xl ${skill.bg} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
              </div>
              <h4 className="font-bold text-lg group-hover:text-accent-cyan transition-colors">{skill.name}</h4>
              
              {/* Progress bar simulation */}
              <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  className={`h-full bg-gradient-to-r from-transparent to-accent-cyan`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating particles background effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-accent-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </section>
  )
}
