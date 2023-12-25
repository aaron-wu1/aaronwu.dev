import { Suspense, useMemo, useRef } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';

import { OrbitControls, PointMaterial } from '@react-three/drei';
import { BufferAttribute, Points } from 'three';

import Loader from './Loader';

function BufferStars({ count = 10000 }) {
  const pointsRef = useRef<Points>(null!);

  useFrame((_, delta) => {
    pointsRef.current.rotation.y += 0.25 * delta;
    pointsRef.current.rotation.x += 0.15 * delta;
  });

  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 20);
    return new BufferAttribute(new Float32Array(p), 3);
  }, [count]);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach={'attributes-position'} {...points} />
      </bufferGeometry>
      <PointMaterial
        size={0.01}
        threshold={0.1}
        color={0xffffff}
        sizeAttenuation={true}
      />
    </points>
  );
}

function Background({ children }) {
  return (
    <>
      <Canvas className='static z-0'>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <BufferStars />
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
      <div className='w-full  absolute z-10'>
        <div className='flex flex-col self-center gap-10'>{children}</div>
      </div>
    </>
  );
}
export default Background;
