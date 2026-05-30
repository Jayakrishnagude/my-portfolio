'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 120;
  const maxDistance = 3.5;
  const bounds = 15;

  // Initialize particles
  const { particles, positions } = useMemo(() => {
    const particles = [];
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05
        ),
      });
      positions[i * 3] = (Math.random() - 0.5) * bounds;
      positions[i * 3 + 1] = (Math.random() - 0.5) * bounds;
      positions[i * 3 + 2] = (Math.random() - 0.5) * bounds;
    }

    return { particles, positions };
  }, []);

  const linePositions = useMemo(() => new Float32Array(particleCount * particleCount * 3), []);
  const lineColors = useMemo(() => new Float32Array(particleCount * particleCount * 3), []);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;

    const posAttr = pointsRef.current.geometry.attributes.position;
    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;

    // Update positions
    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      let x = posAttr.getX(i) + p.velocity.x;
      let y = posAttr.getY(i) + p.velocity.y;
      let z = posAttr.getZ(i) + p.velocity.z;

      // Bounce off walls
      if (Math.abs(x) > bounds / 2) p.velocity.x *= -1;
      if (Math.abs(y) > bounds / 2) p.velocity.y *= -1;
      if (Math.abs(z) > bounds / 2) p.velocity.z *= -1;

      posAttr.setXYZ(i, x, y, z);

      // Connect lines
      for (let j = i + 1; j < particleCount; j++) {
        const dx = posAttr.getX(j) - x;
        const dy = posAttr.getY(j) - y;
        const dz = posAttr.getZ(j) - z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          const alpha = 1.0 - dist / maxDistance;
          // Green color interpolation: #00ff88 (0, 255, 136) -> scaled
          const r = 0.0;
          const g = 1.0;
          const b = 0.53;

          linePositions[vertexpos++] = x;
          linePositions[vertexpos++] = y;
          linePositions[vertexpos++] = z;
          
          linePositions[vertexpos++] = posAttr.getX(j);
          linePositions[vertexpos++] = posAttr.getY(j);
          linePositions[vertexpos++] = posAttr.getZ(j);

          lineColors[colorpos++] = r;
          lineColors[colorpos++] = g;
          lineColors[colorpos++] = b;

          lineColors[colorpos++] = r;
          lineColors[colorpos++] = g;
          lineColors[colorpos++] = b;

          numConnected++;
        }
      }
    }

    posAttr.needsUpdate = true;
    
    linesRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(linePositions.subarray(0, vertexpos), 3));
    linesRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(lineColors.subarray(0, colorpos), 3));
    
    // Slow rotation
    pointsRef.current.rotation.y += 0.001;
    linesRef.current.rotation.y += 0.001;
    pointsRef.current.rotation.x += 0.0005;
    linesRef.current.rotation.x += 0.0005;
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#00ff88" transparent opacity={0.8} />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial vertexColors transparent opacity={0.3} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </>
  );
};

export default function NetworkGraph3D() {
  return (
    <div className="fixed inset-0 z-[-1] bg-background">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <fog attach="fog" args={['#050505', 5, 25]} />
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
