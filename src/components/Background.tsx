import { Suspense, useMemo, useRef } from 'react';

import { Canvas, Props, useFrame } from '@react-three/fiber';

import { PointMaterial } from '@react-three/drei';
import { BufferAttribute, Points, PointsMaterial, TextureLoader } from 'three';
import star from '../assets/star.svg';

import Loader from './Loader';

function BufferStars({ count = 3000 }) {
  const pointsRef = useRef<Points>(null!);
  const pointMatRef = useRef<PointsMaterial>(null!);

  useFrame((_, delta) => {
    pointsRef.current.rotation.y += 0.01 * delta;
    pointsRef.current.rotation.x += 0.05 * delta;
  });

  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    // const p = new Array(count).fill(0).map((_) => (0.5 - Math.random()) * 20);
    const distance = 30;

    for (let i = 0; i < count; i++) {
      let x = distance * (Math.random() - 0.5);
      let y = distance * (Math.random() - 0.5);
      let z = distance * (Math.random() - 0.5);
      positions.set([x, y, z], i * 3);
    }

    return new BufferAttribute(new Float32Array(positions), 3);
  }, [count]);

  const sprite = new TextureLoader().load(star);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach={'attributes-position'} {...points} />
      </bufferGeometry>
      <PointMaterial
        ref={pointMatRef}
        size={0.01}
        threshold={0.1}
        map={sprite}
        color={0xdddddd}
        sizeAttenuation={true}
      />
    </points>
  );
}

function Background({ children, ...props }: Props) {
  return (
    <div className='h-full w-full'>
      <div className='h-full w-full absolute z-0'>
        <Canvas camera={{ fov: 1000, near: 0.1, far: 1000 }}>
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
            <BufferStars />
            {/* <OrbitControls /> */}
          </Suspense>
        </Canvas>
      </div>
      <div className='w-full h-full relative z-10'>
        <div {...props}>{children}</div>
      </div>
    </div>
  );
}
export default Background;
