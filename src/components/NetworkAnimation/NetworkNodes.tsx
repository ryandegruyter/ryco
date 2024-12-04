import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ConnectionLines } from './ConnectionLines';
import { Node } from './Node';

export function NetworkNodes() {
  const groupRef = useRef();
  
  const nodes = useMemo(() => {
    const positions = [];
    const radius = 8;
    const count = 8;
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (Math.random() - 0.5) * 5;
      positions.push(new THREE.Vector3(x, y, z));
    }
    
    // Add center node
    positions.push(new THREE.Vector3(0, 0, 0));
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      nodes.forEach((node, i) => {
        if (i < nodes.length - 1) { // Don't move the center node
          node.y += Math.sin(time * 0.5 + i) * 0.02;
          node.x += Math.cos(time * 0.5 + i) * 0.02;
        }
      });
      groupRef.current.rotation.z = Math.sin(time * 0.1) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <ConnectionLines nodes={nodes} />
      {nodes.map((pos, i) => (
        <Node 
          key={i} 
          position={pos} 
          scale={i === nodes.length - 1 ? 1.5 : 1} 
          color={i === nodes.length - 1 ? "#6366f1" : "#4a90e2"}
        />
      ))}
    </group>
  );
}