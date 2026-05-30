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
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-accent-green font-mono tracking-widest uppercase text-sm mb-4">Tech Stack</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Skills & <span className="text-gradient">Tools</span></h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 0.95 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/5 hover:border-accent-green/30 transition-all duration-500 p-6 flex flex-col justify-between min-h-[160px] ${
                i === 0 ? 'col-span-2 md:col-span-2 row-span-2 min-h-[340px]' : 
                i === 1 || i === 2 ? 'col-span-2 md:col-span-1' :
                'col-span-1'
              }`}
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`w-12 h-12 rounded-2xl ${skill.bg} flex items-center justify-center mb-auto group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                <skill.icon className={`w-6 h-6 ${skill.color}`} />
              </div>
              
              <div className="relative z-10 mt-6">
                <h4 className={`font-bold transition-colors duration-300 ${i === 0 ? 'text-2xl mb-2' : 'text-sm md:text-base'}`}>{skill.name}</h4>
                {i === 0 && <p className="text-white/40 text-sm mt-2">Core expertise & primary focus.</p>}
              </div>

              {/* Spotlight cursor effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,255,136,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
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
            className="absolute w-1 h-1 bg-accent-green rounded-full"
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
