'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    title: "B.Tech Mechanical Engineering",
    institution: "Bapatla College of Engineering",
    period: "Current",
    desc: "Focusing on engineering principles while mastering digital technologies."
  },
  {
    title: "Intermediate",
    institution: "Sri Chaitanya Jr College",
    period: "Previous",
    desc: "MPC stream with strong academic foundation."
  },
  {
    title: "SSC",
    institution: "Vikas Public High School",
    period: "Schooling",
    desc: "Foundation of my academic journey."
  }
]

export default function Experience() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center">
          
          {/* Education Timeline */}
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-3">
              <GraduationCap className="text-accent-cyan" /> Education
            </h2>
            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
              {education.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="pl-12 relative"
                >
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-background border-2 border-accent-cyan flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                  </div>
                  <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors group">
                    <span className="text-accent-cyan text-xs font-mono mb-2 block">{edu.period}</span>
                    <h4 className="text-xl font-bold mb-1">{edu.title}</h4>
                    <p className="text-white/60 text-sm mb-4">{edu.institution}</p>
                    <p className="text-white/40 text-sm">{edu.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
