import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Highlights from "@/components/sections/Highlights";
import Contact from "@/components/sections/Contact";

import NetworkGraph3D from "@/components/NetworkGraph3D";

export default function Home() {
  return (
    <SmoothScroll>
      <NetworkGraph3D />
      <Navbar />
      <main className="relative z-10 min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Highlights />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
