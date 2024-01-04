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
      className='w-full max-w-full h-full'
    >

    </Canvas>
  )
}

export default SceneCanvas