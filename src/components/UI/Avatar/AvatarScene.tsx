import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./MyAvatar";

export default function Home() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width:1080px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  let size = matches ? 700 : 400;
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 15 }}
      style={{
        position: "absolute",
        left: 0,
        width: size,
        height: size,
      }}
    >
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
