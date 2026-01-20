import { useLayoutEffect, useMemo, useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, useProgress, Html } from '@react-three/drei'
import * as THREE from 'three'

function FlowerModel({ url, scale = 1, positionOffset = [0, 0, 0] }) {
  const meshRef = useRef()
  const { scene } = useGLTF(url)

  // Clone so we can safely mutate transforms without affecting cache/other instances
  const model = useMemo(() => scene.clone(true), [scene])
  
  // Center the model at the origin so it stays perfectly centered in view
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(model)
    const center = box.getCenter(new THREE.Vector3())
    model.position.sub(center)
    // Apply any custom offset after centering
    model.position.add(new THREE.Vector3(...positionOffset))
  }, [model, positionOffset])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <primitive 
      ref={meshRef}
      object={model} 
      scale={scale}
      position={[0, 0, 0]}
    />
  )
}

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="loader-container">
        <div className="loader-spinner"></div>
        <p>janrei is delivering your flower, Please wait!</p>
        <p className="loading-progress">{Math.round(progress)}%</p>
      </div>
    </Html>
  )
}

export default function FlowerViewer({ flowerUrl, title, viewerConfig = {} }) {
  const {
    scale = 0.1,
    cameraPosition = [0, 0, 5],
    positionOffset = [0, 0, 0],
    target = [0, 0, 0],
  } = viewerConfig || {}

  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="flower-viewer">
      <h3 className="flower-title">{title}</h3>
      <div className="canvas-container">
        <Canvas 
          camera={{ position: cameraPosition, fov: 50 }}
          onCreated={() => setIsLoading(false)}
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} />
            <FlowerModel url={flowerUrl} scale={scale} positionOffset={positionOffset} />
            <OrbitControls 
              target={target}
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={3}
              maxDistance={14}
            />
          </Suspense>
        </Canvas>
        {isLoading && (
          <div className="canvas-loader">
            <div className="loader-spinner"></div>
            <p>janrei is preparing your flower...</p>
          </div>
        )}
      </div>
    </div>
  )
}
