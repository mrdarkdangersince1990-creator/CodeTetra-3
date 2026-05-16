"use client";
import React, { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function GPUModel() {
  const scroll = useScroll();
  const topPlate = useRef<THREE.Mesh>(null);
  const bottomPlate = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Group>(null);

  useFrame(() => {
    // The "Explosion" happens between 30% and 60% scroll
    const expansion = scroll.range(0.3, 0.3);
    
    if (topPlate.current && bottomPlate.current && core.current) {
      topPlate.current.position.y = expansion * 2.5;
      bottomPlate.current.position.y = -expansion * 2.5;
      core.current.rotation.y += 0.01; // Constant slow spin
    }
  });

  return (
    <group>
      {/* Top Shroud */}
      <mesh ref={topPlate}>
        <boxGeometry args={[4, 0.2, 2.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.2} />
      </mesh>

      {/* Internal "Intelligence" Core */}
      <group ref={core}>
        <mesh>
          <boxGeometry args={[2, 0.8, 1.5]} />
          <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} transparent opacity={0.8} />
        </mesh>
        <pointLight color="#00f3ff" intensity={5} distance={10} />
      </group>

      {/* Bottom Shroud */}
      <mesh ref={bottomPlate}>
        <boxGeometry args={[4, 0.2, 2.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}
