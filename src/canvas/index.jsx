import { Canvas } from '@react-three/fiber'

const SceneCanvas = () => {
  return (
    <Canvas
      camera={{
        position: [0,0,0],
        fov: 60
      }}
      gl={{
        preserveDrawingBuffer: true
      }}
    >

    </Canvas>
  )
}

export default SceneCanvas