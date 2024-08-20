import { useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export default function Model() {
    const glb = useLoader(GLTFLoader, '/models/profile-icon.glb')
    const mesh = useRef()

    window.addEventListener('mousemove', (event) => {
      mesh.current.rotation.y = (event.clientX / window.innerWidth) - 0.5;
      mesh.current.rotation.x = (event.clientY / window.innerHeight) - 0.5;
    
      mesh.current.position.x = ((event.clientX / window.innerWidth) - 0.5);
      mesh.current.position.y = ((event.clientY / window.innerHeight) - 0.5);
    });

    console.log(glb)
  return (
    <mesh ref={mesh} scale={0.1}>
      <primitive  object={glb.scene} />
    </mesh>
  )
}
