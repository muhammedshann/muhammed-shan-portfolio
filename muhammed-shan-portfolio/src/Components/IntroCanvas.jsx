import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, Center, Float, MeshTransmissionMaterial, Stars } from '@react-three/drei'
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'
import * as THREE from 'three'

const ExpensiveText = () => {
  const mesh = useRef()
  useFrame((state) => {
    const { x, y } = state.mouse
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, x * 0.3, 0.05)
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, -y * 0.3, 0.05)
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Center>
        <Text3D
          ref={mesh}
          font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
          size={1}
          height={0.25}
          bevelEnabled
          bevelSize={0.02}
        >
          SHAN
          <MeshTransmissionMaterial
            backside
            samples={15}
            thickness={0.1}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.1}
            color="#00ffcc"
          />
        </Text3D>
      </Center>
    </Float>
  )
}

export default function PortfolioIntro() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#020202' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['#020202']} />
        <Stars radius={50} count={3000} factor={4} fade speed={2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        
        <ExpensiveText />

        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} luminanceThreshold={1} />
          <Noise opacity={0.05} /> {/* Adds a 'film' texture */}
        </EffectComposer>
      </Canvas>
    </div>
  )
}