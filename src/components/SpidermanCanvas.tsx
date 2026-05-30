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
        // Calculate angle of movement. 
        // The spider image faces DOWN, so we subtract 90 degrees to align it.
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) - 90; 
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
        className="fixed z-[9999] pointer-events-none"
        animate={{
          x: mousePos.x - 32,
          y: mousePos.y - 32,
          rotate: rotation,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        {/* User's Custom 3D Spider Image */}
        <img 
          src="/spider.png" 
          alt="Spider Cursor" 
          className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(0,255,136,0.4)]"
        />
      </motion.div>
    </>
  );
}
