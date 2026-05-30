'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: "Hone Webzen",
    category: "Web Development",
    desc: "A premium modern web experience built with high performance and interactive design.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    tags: ["Next.js", "Tailwind", "Render"],
    github: "https://github.com/jayakrishnagude2/hone-webzen",
    vercel: "https://hone-webzen.onrender.com/"
  },
  {
    title: "Styles Men",
    category: "E-commerce / Frontend",
    desc: "A stylish e-commerce platform for men's fashion with a focus on UX and clean aesthetics.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    tags: ["React", "CSS", "Design"],
    github: "https://github.com/Jayakrishnagude/styles-men",
    vercel: "https://styles-men.vercel.app/"
  },
  {
    title: "Hangout Coffee Shop",
    category: "Premium Web Design",
    desc: "A high-end coffee shop experience featuring sleek aesthetics and smooth ordering flow.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    tags: ["React", "UI/UX", "Tailwind"],
    github: "https://github.com/Jayakrishnagude/hangout-coffee-shop",
    vercel: "https://hangout-coffee-shop.vercel.app/"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-accent-green font-mono tracking-widest uppercase text-sm mb-4">Featured Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Selected <span className="text-gradient">Creations</span></h3>
          </div>
          <button className="text-white/40 hover:text-white flex items-center gap-2 transition-colors">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-black/40 backdrop-blur-3xl border border-white/5 hover:border-accent-green/30 transition-all duration-500 ${
                i === 0 ? 'md:col-span-4 min-h-[500px]' : 
                i === 1 ? 'md:col-span-2 min-h-[500px]' : 
                'md:col-span-2 min-h-[400px]'
              }`}
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60 grayscale-[0.8] group-hover:grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020503] via-[#020503]/80 to-transparent" />
              </div>

              {/* Spotlight Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,255,136,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <span className="text-accent-green text-xs font-mono mb-3 block uppercase tracking-[0.2em]">{project.category}</span>
                <h4 className={`font-black mb-4 tracking-tighter ${i === 0 ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>{project.title}</h4>
                <p className="text-white/60 text-sm md:text-base mb-8 max-w-md line-clamp-2 leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] uppercase tracking-widest px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-xl flex items-center justify-center transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.vercel} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-accent-green/20 hover:bg-accent-green text-accent-green hover:text-black backdrop-blur-xl flex items-center justify-center transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Arrow Top Right */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 bg-black/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-10">
                <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-accent-green transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
