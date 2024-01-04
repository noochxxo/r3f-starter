import { useGLTF, useTexture } from '@react-three/drei'

const Character = () => {
  const { nodes, materials } = useGLTF('/models/avatars/eric/model.obj')
  console.log(nodes.eric_avatarglb)
  return (
    <group>
      <mesh

      >

      </mesh>
    </group>
  )
}

export default Character