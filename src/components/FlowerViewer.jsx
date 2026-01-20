import { useLayoutEffect, useMemo, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function FlowerModel({ url, scale = 1, positionOffset = [0, 0, 0] }) {
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

  return (
    <primitive 
      object={model} 
      scale={scale}
      position={[0, 0, 0]}
    />
  )
}

export default function FlowerViewer({ flowerUrl, title, viewerConfig = {} }) {
  const {
    scale = 0.1,
    cameraPosition = [0, 0, 5],
    positionOffset = [0, 0, 0],
    target = [0, 0, 0],
  } = viewerConfig || {}

  return (
    <div className="flower-viewer">
      <h3 className="flower-title">{title}</h3>
      <div className="canvas-container">
        <Canvas camera={{ position: cameraPosition, fov: 50 }}>
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
        </Canvas>
      </div>
    </div>
  )
}
