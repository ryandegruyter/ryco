import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { NetworkNodes } from './NetworkNodes';
import { NetworkParticles } from './NetworkParticles';

export function NetworkAnimation() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        <NetworkNodes />
        <NetworkParticles count={200} />
      </Canvas>
    </div>
  );
}