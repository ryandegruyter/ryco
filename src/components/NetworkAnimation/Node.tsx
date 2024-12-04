import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { extend } from '@react-three/fiber';
import { NodeMaterial } from './NodeMaterial';

extend({ NodeMaterial });

export function Node({ position, scale = 1, color }) {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.time = clock.getElapsedTime();
    }
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <nodeMaterial ref={materialRef} color={color} />
      <mesh scale={1.2}>
        <ringGeometry args={[0.35, 0.4, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} />
      </mesh>
    </mesh>
  );
}