import "./ThreeScene.scss"
import React, { useRef, Suspense } from "react"
import { Canvas, extend, useThree, useFrame } from "react-three-fiber"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import useDracoLoader from "hooks/useDracoLoader"

extend({ OrbitControls })

const SpaceShip = () => {
  const [spaceModel] = useDracoLoader("Space")

  return spaceModel ? <primitive object={spaceModel.scene} /> : null
}

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  useFrame(() => {
    orbitRef.current.update()
  })

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

function ThreeScene() {
  const isBrowser = typeof window !== "undefined"
  if (!isBrowser) return null

  return (
    <Canvas
      className="three-canvas"
      camera={{ position: [0, 0, 15] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
      <fog attach="fog" args={["black", 10, 25]} />
      <Controls />
      <Suspense fallback={null}>
        <SpaceShip />
      </Suspense>
    </Canvas>
  )
}

export default ThreeScene
