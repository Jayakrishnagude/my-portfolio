'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float, MeshWobbleMaterial, PerspectiveCamera, Stars } from '@react-three/drei'
import * as THREE from 'three'

export default function HeroModel() {
  const cubeRef = useRef<THREE.Mesh>(null!)
  const gearRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    cubeRef.current.rotation.x = t * 0.2
    cubeRef.current.rotation.y = t * 0.3
    gearRef.current.rotation.z = -t * 0.1
  })

  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#7000ff" />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <group ref={gearRef}>
          {/* Main Gear Structure */}
          <mesh>
            <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
            <MeshDistortMaterial
              color="#1a1a1a"
              speed={2}
              distort={0.3}
              radius={1}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          {/* Glowing Cubes inside the gear */}
          <mesh ref={cubeRef}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <MeshWobbleMaterial
              color="#00f2ff"
              speed={3}
              factor={0.6}
              emissive="#00f2ff"
              emissiveIntensity={2}
            />
          </mesh>
        </group>
      </Float>

      {/* Background Orbs */}
      <mesh position={[-4, 2, -5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#7000ff" emissive="#7000ff" emissiveIntensity={0.5} transparent opacity={0.3} />
      </mesh>
      <mesh position={[4, -2, -5]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={0.5} transparent opacity={0.2} />
      </mesh>
    </>
  )
}
