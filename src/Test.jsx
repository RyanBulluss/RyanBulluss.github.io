import {
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Test() {
  return (
    <div className=" md:block absolute w-[90%] h-[100%] mt-[140px] md:h-[100%] z-10">
      <Canvas>
        <OrbitControls autoRotate={true} enableZoom={false} />
        <ambientLight intensity={1.5} />
        <directionalLight intensity={1} position={[5, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={1.9}>
          <MeshDistortMaterial
            color="#905"
            attach="material"
            distort={0.5}
            speed={0.3}
          />
        </Sphere>
      </Canvas>
    </div>
  );
}
