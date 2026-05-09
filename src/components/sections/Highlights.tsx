'use client'

import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Clock, Heart, Award, Code, Smartphone } from 'lucide-react'

const strengths = [
  { title: "Leadership", icon: Zap, color: "text-orange-400" },
  { title: "Quick Learning", icon: ShieldCheck, color: "text-green-400" },
  { title: "Time Management", icon: Clock, color: "text-blue-400" },
  { title: "Positive Thinking", icon: Heart, color: "text-red-400" }
]

const certifications = [
  {
    title: "RTIH Certification",
    org: "Ratan Tata Innovation Hub",
    desc: "Certification for outstanding performance in innovation and technical excellence.",
    icon: Award,
    color: "border-l-accent-cyan"
  },
  {
    title: "Codeverse Certification",
    org: "Codeverse",
    desc: "1st year certification in advanced coding principles and logic.",
    icon: Code,
    color: "border-l-accent-purple"
  },
  {
    title: "Aikyam App Development",
    org: "Aikyam",
    desc: "1st year certification for modern application development and architecture.",
    icon: Smartphone,
    color: "border-l-green-400"
  }
]

export default function Highlights() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Strengths */}
          <div>
            <h2 className="text-3xl font-bold mb-12">Personal <span className="text-gradient">Strengths</span></h2>
            <div className="grid grid-cols-2 gap-6">
              {strengths.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-3xl flex flex-col items-center text-center group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h4 className="font-bold text-sm uppercase tracking-widest">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-12">Certifications</h2>
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className={`glass p-6 rounded-3xl border-l-8 ${cert.color} relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <cert.icon className="w-16 h-16" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <cert.icon className="w-5 h-5 text-white/80" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{cert.title}</h4>
                      <p className="text-xs text-white/40 uppercase tracking-widest">{cert.org}</p>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm">
                    {cert.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
