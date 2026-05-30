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
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Hyper-Complex Hero Content */}
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1400px] flex flex-col justify-center h-full pt-20 pointer-events-none">
        
        {/* Floating Data Nodes */}
        <div className="absolute top-1/4 right-[10%] hidden lg:flex flex-col gap-2 text-[10px] font-mono text-accent-green/50">
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>[SYS.CORE.ACTIVE]</motion.div>
          <div className="flex gap-4 border-t border-accent-green/20 pt-2 mt-2">
            <span>X: 24.582</span>
            <span>Y: 91.024</span>
          </div>
          <div className="w-24 h-[1px] bg-gradient-to-r from-accent-green to-transparent mt-2"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto relative w-full max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          {/* Complex Header Badge */}
          <div className="flex items-center gap-4 mb-12 opacity-70 justify-center">
            <div className="relative w-12 h-12 flex items-center justify-center border border-accent-green/30 rounded-full animate-[spin_10s_linear_infinite]">
              <div className="w-2 h-2 bg-accent-green rounded-full"></div>
              <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-accent-green font-mono tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold">
                Digital Architect
              </h2>
              <span className="text-white/40 text-[9px] font-mono tracking-widest">VERSION_3.0 // ACTIVE</span>
            </div>
          </div>
          
          {/* Lowercase, Smaller Name */}
          <div className="relative group w-fit mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-2 text-white/90 lowercase relative z-10 text-center">
              jayakrishna
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-accent-green via-white to-accent-darkgreen mb-12 lowercase relative z-10 text-center">
              gude.
            </h1>
            {/* Glitch Shadow Effect */}
            <h1 className="absolute top-1 left-1 w-full text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-accent-green/30 blur-sm lowercase -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 text-center">
              jayakrishna gude.
            </h1>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-10 mt-12 relative w-full">
            {/* Complex Geometric Divider */}
            <div className="absolute -top-6 left-0 w-full h-[1px] bg-white/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-accent-green to-transparent"></div>
              <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-[7px] h-[7px] border border-accent-green rotate-45"></div>
            </div>

            <div className="max-w-2xl relative mx-auto mt-4">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-2xl text-white/50 font-light tracking-wide leading-relaxed text-center"
              >
                Specializing as a <strong className="text-white">{" " + roles[roleIndex]}</strong>, engineering highly complex, organic, and futuristic digital experiences.
              </motion.p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 relative z-20 mt-4">
              <a href="#projects" className="relative px-8 py-4 bg-black/40 backdrop-blur-xl border border-white/10 hover:border-accent-green/50 text-xs font-bold uppercase tracking-[0.2em] transition-all group overflow-hidden flex items-center gap-3 justify-center">
                <span className="absolute inset-0 bg-accent-green/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10">Explore Matrix</span> 
                <ExternalLink className="w-4 h-4 relative z-10 group-hover:rotate-45 transition-transform" />
              </a>
            </div>
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
            className="glass p-4 rounded-xl border-l-4 border-l-accent-green"
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
