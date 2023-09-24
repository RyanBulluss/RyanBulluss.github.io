import { MeshDistortMaterial, OrbitControls, PerspectiveCamera, RenderTexture, Sphere, Text } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

export default function Test() {


    return (
        <div className="h-[50vh] w-full fixed">
            <Canvas>
                <OrbitControls autoRotate={true}  />
                <ambientLight intensity={1.5} />
                <directionalLight position={[5,2,1]} />
                <Sphere args={[1.5, 100, 200]} scale={1}>
                    <MeshDistortMaterial color="#bbd" attach="material" distort={0.5} speed={2} />
                </Sphere>
            </Canvas>
        </div>
    )
}