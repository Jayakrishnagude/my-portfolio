'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SpiderWeb = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Generate Spider Web Geometry
  const { radialPoints, spiralPoints } = useMemo(() => {
    const radPoints = [];
    const spirPoints = [];
    
    const numRadials = 16;
    const numSpirals = 20;
    const maxRadius = 15;

    // Radial lines
    for (let i = 0; i < numRadials; i++) {
      const angle = (i / numRadials) * Math.PI * 2;
      radPoints.push(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.cos(angle) * maxRadius, Math.sin(angle) * maxRadius, 0)
      );
    }

    // Spiral/Concentric lines
    for (let s = 1; s <= numSpirals; s++) {
      const radius = (s / numSpirals) * maxRadius;
      // Add slight sag/droop to make it look realistic
      for (let i = 0; i < numRadials; i++) {
        const angle1 = (i / numRadials) * Math.PI * 2;
        const angle2 = ((i + 1) / numRadials) * Math.PI * 2;
        
        // Sag effect
        const midAngle = (angle1 + angle2) / 2;
        const sagRadius = radius * 0.95; // dips slightly in the middle

        spirPoints.push(
          new THREE.Vector3(Math.cos(angle1) * radius, Math.sin(angle1) * radius, 0),
          new THREE.Vector3(Math.cos(midAngle) * sagRadius, Math.sin(midAngle) * sagRadius, 0),
          new THREE.Vector3(Math.cos(midAngle) * sagRadius, Math.sin(midAngle) * sagRadius, 0),
          new THREE.Vector3(Math.cos(angle2) * radius, Math.sin(angle2) * radius, 0)
        );
      }
    }

    return { 
      radialPoints: new THREE.BufferGeometry().setFromPoints(radPoints),
      spiralPoints: new THREE.BufferGeometry().setFromPoints(spirPoints)
    };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating rotation
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      groupRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.15) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]} scale={[1.5, 1.5, 1.5]}>
      <lineSegments geometry={radialPoints}>
        <lineBasicMaterial color="#00ff88" transparent opacity={0.15} />
      </lineSegments>
      <lineSegments geometry={spiralPoints}>
        <lineBasicMaterial color="#00ff88" transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
};

export default function NetworkGraph3D() {
  return (
    <div className="fixed inset-0 z-[-1] bg-background">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <fog attach="fog" args={['#050505', 5, 25]} />
        <SpiderWeb />
      </Canvas>
    </div>
  );
}
