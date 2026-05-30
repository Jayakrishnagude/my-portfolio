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
      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1400px] flex flex-col justify-center h-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8 opacity-70">
            <span className="w-12 h-[2px] bg-accent-green block"></span>
            <h2 className="text-accent-green font-mono tracking-[0.4em] uppercase text-xs md:text-sm font-bold">
              Digital Architect & Creator
            </h2>
          </div>
          
          <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter mb-4 text-white/90">
            JAYAKRISHNA
          </h1>
          <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-accent-green via-white to-accent-darkgreen mb-12">
            GUDE.
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-16 border-t border-white/10 pt-8">
            <div className="max-w-md">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-white/50 font-light tracking-wide leading-relaxed"
              >
                Specializing as a <strong className="text-white">{" " + roles[roleIndex]}</strong>, building premium organic interfaces.
              </motion.p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="glass-dark px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white/10 transition-all group border border-white/5 hover:border-accent-green/30 text-sm font-bold uppercase tracking-wider">
                Explore Work <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-accent-green" />
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
