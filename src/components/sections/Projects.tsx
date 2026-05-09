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
    tags: ["Next.js", "Tailwind", "Vercel"],
    github: "https://github.com/Jayakrishnagude/hone-webzen",
    vercel: "https://hone-webzen.vercel.app/"
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
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-accent-cyan font-mono tracking-widest uppercase text-sm mb-4">Featured Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Selected <span className="text-gradient">Creations</span></h3>
          </div>
          <button className="text-white/40 hover:text-white flex items-center gap-2 transition-colors">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden relative">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                {/* Hover Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.vercel} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-accent-cyan text-black flex items-center justify-center hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-accent-cyan text-xs font-mono mb-2 block">{project.category}</span>
                <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                <p className="text-white/50 text-sm mb-6 line-clamp-2">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Magnetic Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
