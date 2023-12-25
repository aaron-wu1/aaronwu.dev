import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

import skyScene from '../assets/3d/sky.glb';
import { Mesh } from 'three';

function Sky({ isRotating }) {
  const sky = useGLTF(skyScene);
  const skyRef = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
}

export default Sky;
