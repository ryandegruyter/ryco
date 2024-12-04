import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const NodeMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.2, 0.5, 1),
  },
  // vertex shader
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vec2 center = vec2(0.5);
      float dist = length(vUv - center);
      
      // Create a pulsing effect
      float pulse = sin(time * 2.0) * 0.5 + 0.5;
      
      // Create a gradient from center
      float alpha = smoothstep(0.5, 0.2, dist);
      
      // Add some noise pattern
      float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
      
      // Combine effects
      vec3 finalColor = mix(color, color * 1.5, noise * 0.2);
      float finalAlpha = alpha * (0.7 + 0.3 * pulse);
      
      gl_FragColor = vec4(finalColor, finalAlpha);
    }
  `
);