'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function SpidermanCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [rotation, setRotation] = useState(0);
  const [targetPos, setTargetPos] = useState<{ x: number, y: number } | null>(null);
  
  const lastMousePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      
      if (dx !== 0 || dy !== 0) {
        // Calculate angle of movement
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90; 
        setRotation(angle);
      }

      lastMousePos.current = { x: e.clientX, y: e.clientY };
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestLink = target.closest('a, button');
      if (closestLink) {
        const rect = closestLink.getBoundingClientRect();
        setTargetPos({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      } else {
        setTargetPos(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Canvas drawing loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let webs: { x1: number, y1: number, x2: number, y2: number, life: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw web to target if hovered
      if (targetPos) {
        ctx.beginPath();
        ctx.moveTo(mousePos.x, mousePos.y);
        ctx.lineTo(targetPos.x, targetPos.y);
        ctx.strokeStyle = 'rgba(0, 255, 136, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Web details
        ctx.beginPath();
        ctx.moveTo(mousePos.x - 10, mousePos.y - 10);
        ctx.lineTo(targetPos.x, targetPos.y);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(mousePos.x + 10, mousePos.y + 10);
        ctx.lineTo(targetPos.x, targetPos.y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos, targetPos]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[9997] pointer-events-none"
      />
      
      <motion.div
        className="fixed z-[9999] pointer-events-none drop-shadow-[0_0_15px_rgba(0,255,136,0.8)]"
        animate={{
          x: mousePos.x - 24,
          y: mousePos.y - 24,
          rotate: rotation,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        {/* 3D-styled Spiderman Emblem SVG */}
        <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#glow)">
            <path d="M50 85 C 45 70, 40 50, 45 35 L 35 25 L 45 15 C 48 10, 52 10, 55 15 L 65 25 L 55 35 C 60 50, 55 70, 50 85 Z" fill="url(#spiderGrad)" />
            {/* Legs Left */}
            <path d="M45 35 Q 20 20 10 30" stroke="url(#spiderGrad)" strokeWidth="4" strokeLinecap="round" fill="none"/>
            <path d="M42 45 Q 15 40 5 60" stroke="url(#spiderGrad)" strokeWidth="4" strokeLinecap="round" fill="none"/>
            <path d="M42 55 Q 15 65 10 85" stroke="url(#spiderGrad)" strokeWidth="4" strokeLinecap="round" fill="none"/>
            <path d="M45 65 Q 25 80 20 95" stroke="url(#spiderGrad)" strokeWidth="4" strokeLinecap="round" fill="none"/>
            {/* Legs Right */}
            <path d="M55 35 Q 80 20 90 30" stroke="url(#spiderGrad)" strokeWidth="4" strokeLinecap="round" fill="none"/>
            <path d="M58 45 Q 85 40 95 60" stroke="url(#spiderGrad)" strokeWidth="4" strokeLinecap="round" fill="none"/>
            <path d="M58 55 Q 85 65 90 85" stroke="url(#spiderGrad)" strokeWidth="4" strokeLinecap="round" fill="none"/>
            <path d="M55 65 Q 75 80 80 95" stroke="url(#spiderGrad)" strokeWidth="4" strokeLinecap="round" fill="none"/>
          </g>
          <defs>
            <linearGradient id="spiderGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="0.5" stopColor="#00ff88" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
        </svg>
      </motion.div>
    </>
  );
}
