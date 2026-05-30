'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Global mouse tracker for bulletproof background tracking
const globalMouse = { x: 0, y: 0 };
if (typeof window !== 'undefined') {
  window.addEventListener('pointermove', (e) => {
    globalMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    globalMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });
}

// --- Procedural Crawling Spider ---
const Spider3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const [targetPos] = useState(() => new THREE.Vector3());
  const [currentPos] = useState(() => new THREE.Vector3());
  
  // Create 8 legs (each with 3 joints for organic movement)
  const legsRef = useRef<THREE.Group[]>([]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Convert normalized mouse to world space
    targetPos.set((globalMouse.x * viewport.width) / 2, (globalMouse.y * viewport.height) / 2, 0);

    // Calculate movement for walking animation
    const dx = targetPos.x - currentPos.x;
    const dy = targetPos.y - currentPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Smoothly move spider to cursor
    currentPos.lerp(targetPos, 0.1);
    groupRef.current.position.copy(currentPos);

    // Rotate spider to face direction of movement
    if (distance > 0.05) {
      const targetRotation = Math.atan2(dy, dx) - Math.PI / 2;
      // Smooth rotation
      let diff = targetRotation - groupRef.current.rotation.z;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      groupRef.current.rotation.z += diff * 0.15;
    }

    // Animate legs (Walking cycle based on movement and time)
    const time = state.clock.elapsedTime;
    const walkSpeed = distance > 0.05 ? 18 : 2; // Fast when moving, slow idle breathing
    const amplitude = distance > 0.05 ? 0.4 : 0.05;

    legsRef.current.forEach((leg, index) => {
      if (!leg) return;
      const offset = (index * Math.PI) / 4; // Stagger leg movements
      const isLeft = index < 4;
      
      // Organic sine wave crawling
      leg.position.z = Math.sin(time * walkSpeed + offset) * amplitude;
      leg.rotation.x = Math.cos(time * walkSpeed + offset) * amplitude * (isLeft ? 1 : -1);
      leg.rotation.y = Math.sin(time * walkSpeed * 0.5 + offset) * (amplitude * 0.5);
    });
  });

  return (
    <group ref={groupRef} scale={[0.6, 0.6, 0.6]}>
      {/* Abdomen */}
      <mesh position={[0, -0.4, 0.2]} castShadow>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#010a05" roughness={0.1} metalness={0.9} />
      </mesh>
      {/* Cephalothorax (Head) */}
      <mesh position={[0, 0.4, 0.1]} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#00ff88" roughness={0.1} metalness={1} emissive="#00ff88" emissiveIntensity={0.4} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.1, 0.7, 0.2]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.1, 0.7, 0.2]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      
      {/* Legs */}
      {[...Array(8)].map((_, i) => {
        const isLeft = i < 4;
        const angle = isLeft ? (i * 0.4 + 0.5) : (-i * 0.4 - 0.5);
        return (
          <group 
            key={i} 
            ref={(el) => { if (el) legsRef.current[i] = el; }} 
            position={[isLeft ? -0.2 : 0.2, 0.2, 0]} 
            rotation={[0, 0, angle]}
          >
            <mesh position={[0, 0.8, 0]}>
              <cylinderGeometry args={[0.03, 0.01, 1.8, 8]} />
              <meshStandardMaterial color="#00ff88" roughness={0.2} metalness={0.8} emissive="#00ff88" emissiveIntensity={0.1} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

// --- Organic Elastic Web ---
const OrganicWeb = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport } = useThree();

  const gridSize = 25; // More complex grid
  const particleCount = gridSize * gridSize;
  const spacing = 1.0; // Tighter spacing

  // Generate web nodes
  const { basePositions, positions } = useMemo(() => {
    const basePositions = new Float32Array(particleCount * 3);
    const positions = new Float32Array(particleCount * 3);
    
    let i = 0;
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        const px = (x - gridSize / 2) * spacing;
        const py = (y - gridSize / 2) * spacing;
        const pz = (Math.random() - 0.5) * 2.0;
        
        basePositions[i] = px;
        basePositions[i + 1] = py;
        basePositions[i + 2] = pz;
        
        positions[i] = px;
        positions[i + 1] = py;
        positions[i + 2] = pz;
        i += 3;
      }
    }
    return { basePositions, positions };
  }, []);

  const linePositions = useMemo(() => new Float32Array(particleCount * 4 * 3), []); // Max 4 connections per node

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;
    
    const time = state.clock.elapsedTime;
    const mouseX = (globalMouse.x * viewport.width) / 2;
    const mouseY = (globalMouse.y * viewport.height) / 2;

    const posAttr = pointsRef.current.geometry.attributes.position;
    let lineIdx = 0;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Base positions with organic breathing
      let bx = basePositions[i3] + Math.sin(time * 0.5 + basePositions[i3+1]) * 0.3;
      let by = basePositions[i3+1] + Math.cos(time * 0.6 + basePositions[i3]) * 0.3;
      let bz = basePositions[i3+2] + Math.sin(time * 0.4 + i) * 0.2;

      // Elastic pull towards cursor
      const dx = mouseX - bx;
      const dy = mouseY - by;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 5) {
        const pull = Math.max(0, 1 - dist / 5);
        bx += dx * pull * 0.5; // Stronger pull effect
        by += dy * pull * 0.5;
        bz += pull * 2.5; // Bulge outwards towards camera
      }

      // Smooth interpolation for lifeform elasticity
      const currentX = posAttr.getX(i);
      const currentY = posAttr.getY(i);
      const currentZ = posAttr.getZ(i);

      posAttr.setXYZ(
        i,
        currentX + (bx - currentX) * 0.15,
        currentY + (by - currentY) * 0.15,
        currentZ + (bz - currentZ) * 0.15
      );

      // Connect adjacent nodes (grid logic)
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;

      const connectNode = (j: number) => {
        linePositions[lineIdx++] = posAttr.getX(i);
        linePositions[lineIdx++] = posAttr.getY(i);
        linePositions[lineIdx++] = posAttr.getZ(i);
        linePositions[lineIdx++] = posAttr.getX(j);
        linePositions[lineIdx++] = posAttr.getY(j);
        linePositions[lineIdx++] = posAttr.getZ(j);
      };

      if (col < gridSize - 1) connectNode(i + 1); // Right
      if (row < gridSize - 1) connectNode(i + gridSize); // Down
    }

    posAttr.needsUpdate = true;
    linesRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(linePositions.subarray(0, lineIdx), 3));
  });

  return (
    <group position={[0, 0, -2]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#00ff88" transparent opacity={0.8} />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#00ff88" transparent opacity={0.25} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
};

export default function NetworkGraph3D() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#010302]">
      <Canvas camera={{ position: [0, 0, 14], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 10]} intensity={3} color="#00ff88" />
        <pointLight position={[5, -5, 5]} intensity={1} color="#005533" />
        <fog attach="fog" args={['#010302', 10, 25]} />
        
        <OrganicWeb />
        <Spider3D />
      </Canvas>
    </div>
  );
}
