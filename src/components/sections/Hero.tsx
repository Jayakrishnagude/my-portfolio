'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import HeroModel from '../canvas/HeroModel'
import { motion } from 'framer-motion'
import { ChevronDown, Download, ExternalLink, Mail } from 'lucide-react'

const roles = [
  "Mechanical Engineering Student",
  "Frontend Developer",
  "Web Developer",
  "UI/UX Designer",
  "AI Web Creator"
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows gl={{ antialias: true }}>
          <Suspense fallback={null}>
            <HeroModel />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-accent-cyan font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Building Future Digital Experiences
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            Jayakrishna <span className="text-gradient">Gude</span>
          </h1>
          
          <div className="h-12 mb-8">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xl md:text-3xl text-white/70 font-light"
            >
              {roles[roleIndex]}
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#projects" className="glass-dark px-8 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all group">
              View Projects <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/resume.docx" download className="glass px-8 py-3 rounded-full flex items-center gap-2 hover:bg-accent-cyan/20 border-accent-cyan/20 text-accent-cyan transition-all group">
              Download Resume <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a href="#contact" className="glass-dark px-8 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all group">
              Contact Me <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-4">
        {[
          { label: "Frontend", val: "Developer" },
          { label: "UI/UX", val: "Designer" },
          { label: "AI Web", val: "Creator" }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="glass p-4 rounded-xl border-l-4 border-l-accent-cyan"
          >
            <p className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</p>
            <p className="text-lg font-bold">{stat.val}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
    </section>
  )
}
