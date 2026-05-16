"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Float } from "@react-three/drei";
import * as THREE from "three";

export default function Experience() {
  const scroll = useScroll();
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const offset = scroll.offset;
    // Rotate based on scroll
    if (meshRef.current) {
      meshRef.current.rotation.x = offset * 5;
      meshRef.current.rotation.y = offset * 2;
    }
    // Zoom camera on scroll
    state.camera.position.z = THREE.MathUtils.lerp(10, 2, offset);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#00f3ff" />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[2, 0]} />
          <meshStandardMaterial 
            color="#00f3ff" 
            emissive="#00f3ff" 
            emissiveIntensity={0.5} 
            wireframe 
          />
        </mesh>
      </Float>

      {/* Background Grid */}
      <gridHelper args={[100, 40, 0x222222, 0x111111]} position={[0, -3, 0]} />
    </>
  );
}
