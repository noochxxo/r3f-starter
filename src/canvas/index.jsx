import { Center, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Character from '../components/characters/Character'

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
      <ambientLight intensity={0.5} />
      <Environment preset='city' />

      <Center>
        <Character />
      </Center>

    </Canvas>
  )
}

export default SceneCanvas