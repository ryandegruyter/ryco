import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ConnectionLines({ nodes }) {
  const linesRef = useRef();
  
  const { positions, geometry, material } = useMemo(() => {
    const positions = [];
    // Connect each node to its closest neighbors and the center node
    const centerNode = nodes[nodes.length - 1];
    
    for (let i = 0; i < nodes.length - 1; i++) {
      // Connect to center
      positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
      positions.push(centerNode.x, centerNode.y, centerNode.z);
      
      // Connect to closest neighbors
      const next = (i + 1) % (nodes.length - 1);
      positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
      positions.push(nodes[next].x, nodes[next].y, nodes[next].z);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    
    const material = new THREE.LineBasicMaterial({
      color: 0x4a90e2,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });

    return { positions, geometry, material };
  }, [nodes]);

  useFrame(({ clock }) => {
    if (linesRef.current) {
      const time = clock.getElapsedTime();
      linesRef.current.material.opacity = 0.2 + Math.sin(time * 2) * 0.1;
      
      const positions = geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 6) {
        positions[i + 1] += Math.sin(time + i) * 0.002;
        positions[i + 4] += Math.sin(time + i + 2) * 0.002;
      }
      geometry.attributes.position.needsUpdate = true;
    }
  });

  return <lineSegments ref={linesRef} geometry={geometry} material={material} />;
}