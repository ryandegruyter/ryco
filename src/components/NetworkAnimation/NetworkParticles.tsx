import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Points, PointMaterial } from '@react-three/drei';

export function NetworkParticles({ count = 100 }) {
  const points = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 15;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      
      pos[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(theta);
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      points.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <Points ref={points} positions={positions}>
      <PointMaterial
        transparent
        color="#4a90e2"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}