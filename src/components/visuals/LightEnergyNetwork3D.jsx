import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Line } from '@react-three/drei'
import * as THREE from 'three'

// Nœuds représentant des hubs énergétiques africains (positions relatives inspirées de la géographie)
const NODES = [
  { id: 0, pos: [0, 0, 0], size: 0.18, color: '#0A2A5E', label: 'Hub Central' },
  { id: 1, pos: [-1.8, 1.2, -0.5], size: 0.13, color: '#1A7A4A', label: 'Afrique Ouest' },
  { id: 2, pos: [1.6, 1.0, -0.3], size: 0.13, color: '#1A7A4A', label: 'Afrique Est' },
  { id: 3, pos: [-0.8, -1.8, 0.4], size: 0.11, color: '#0A2A5E', label: 'Afrique Sud' },
  { id: 4, pos: [0.9, -1.5, 0.6], size: 0.11, color: '#1A7A4A', label: 'Afrique Centre' },
  { id: 5, pos: [-2.4, -0.4, -0.2], size: 0.09, color: '#2A9D8F', label: 'Nœud Ouest' },
  { id: 6, pos: [2.2, -0.3, 0.1], size: 0.09, color: '#2A9D8F', label: 'Nœud Est' },
  { id: 7, pos: [0.2, 2.3, 0.3], size: 0.09, color: '#E76F1A', label: 'Nœud Nord' },
  { id: 8, pos: [-1.1, 0.5, 1.2], size: 0.08, color: '#2A9D8F', label: 'Satellite 1' },
  { id: 9, pos: [1.3, -0.7, 1.0], size: 0.08, color: '#0A2A5E', label: 'Satellite 2' },
  { id: 10, pos: [-0.3, -0.9, -1.4], size: 0.07, color: '#1A7A4A', label: 'Satellite 3' },
  { id: 11, pos: [0.7, 1.1, -1.2], size: 0.07, color: '#E76F1A', label: 'Satellite 4' },
]

// Connexions entre nœuds
const CONNECTIONS = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 8], [0, 9],
  [1, 5], [1, 7], [1, 8],
  [2, 6], [2, 7], [2, 11],
  [3, 5], [3, 10],
  [4, 6], [4, 9], [4, 10],
  [8, 11], [9, 10],
]

function EnergyLine({ start, end, opacity = 0.25 }) {
  const points = useMemo(() => [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end),
  ], [start, end])

  return (
    <Line
      points={points}
      color="#1A7A4A"
      lineWidth={0.8}
      transparent
      opacity={opacity}
    />
  )
}

function EnergyNode({ position, size, color }) {
  const meshRef = useRef()
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.4 + offset) * 0.06
    }
  })

  return (
    <Sphere ref={meshRef} position={position} args={[size, 16, 16]}>
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.4}
        transparent
        opacity={0.85}
      />
    </Sphere>
  )
}

function PulseRing({ position, color }) {
  const ringRef = useRef()
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const t = (clock.elapsedTime * 0.5 + offset) % 1
      ringRef.current.scale.setScalar(0.8 + t * 1.2)
      ringRef.current.material.opacity = (1 - t) * 0.15
    }
  })

  return (
    <mesh ref={ringRef} position={position}>
      <ringGeometry args={[0.18, 0.22, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.15} side={THREE.DoubleSide} />
    </mesh>
  )
}

function NetworkScene() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.06
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.03) * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      {CONNECTIONS.map(([a, b], i) => (
        <EnergyLine key={i} start={NODES[a].pos} end={NODES[b].pos} />
      ))}
      {NODES.map((node) => (
        <React.Fragment key={node.id}>
          <EnergyNode position={node.pos} size={node.size} color={node.color} />
          {node.id < 5 && <PulseRing position={node.pos} color={node.color} />}
        </React.Fragment>
      ))}
    </group>
  )
}

export default function LightEnergyNetwork3D({ height = 520 }) {
  return (
    <div style={{ width: '100%', height, borderRadius: 20, overflow: 'hidden', background: 'transparent' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-4, 3, 2]} intensity={0.5} color="#1A7A4A" />
        <pointLight position={[4, -2, 2]} intensity={0.3} color="#0A2A5E" />
        <NetworkScene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI * 0.65}
          minPolarAngle={Math.PI * 0.35}
        />
      </Canvas>
    </div>
  )
}
