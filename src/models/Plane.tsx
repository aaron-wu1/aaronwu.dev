import { useRef, useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

import planeScene from '../assets/3d/plane.glb';
import { Mesh } from 'three';

function Plane({ isRotating, ...props }) {
  const planeRef = useRef<Mesh>(null!);
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    if (isRotating) {
      actions['Take 001']?.play();
    } else {
      actions['Take 001']?.stop();
    }
  });

  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Plane;
