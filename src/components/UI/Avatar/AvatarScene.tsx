import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./MyAvatar";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 15 }}>
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Model position={[0.025, -1.5, 0]} />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
