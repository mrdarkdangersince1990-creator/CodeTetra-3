"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, ScrollControls } from "@react-three/drei";
import Experience from "./Experience";

export default function Scene() {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
      <color attach="background" args={["#000000"]} />
      
      <ScrollControls pages={4} damping={0.1}>
        <Experience />
      </ScrollControls>

      <Environment preset="night" />
    </Canvas>
  );
}
