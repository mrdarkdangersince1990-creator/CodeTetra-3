"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { GPUModel } from "./GPUModel";

export default function Experience() {
  const scroll = useScroll();
  const sceneRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    // Defines ranges for different sections (0 to 1)
    const r1 = scroll.range(0, 0.33); // Hero to Info
    const r2 = scroll.range(0.33, 0.33); // Interaction zone
    const r3 = scroll.range(0.66, 0.33); // Pricing zone

    // Move camera deeper into the "Server Rack" as user scrolls
    state.camera.position.z = THREE.MathUtils.lerp(12, 3, r1);
    state.camera.position.y = THREE.MathUtils.lerp(0, -1, r2);
    
    // Subtle rotation to show depth
    if (sceneRef.current) {
      sceneRef.current.rotation.y = THREE.MathUtils.lerp(0, Math.PI / 4, r1);
    }
  });

  return (
    <group ref={sceneRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <GPUModel />
      </Float>

      {/* Decorative Grid/Data Center Atmosphere */}
      <gridHelper args={[100, 50, 0x222222, 0x111111]} position={[0, -5, 0]} />
      
      <mesh position={[0, -4.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#000" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}
