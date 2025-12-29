"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  uniform float time;
  uniform float intensity;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    
    vec3 pos = position;
    pos.y += sin(pos.x * 4.0 + time * 0.5) * 0.03 * intensity;
    pos.x += cos(pos.y * 3.0 + time * 0.4) * 0.02 * intensity;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform vec3 color3;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vec2 uv = vUv;
    
    // Subtle animated noise
    float noise = sin(uv.x * 10.0 + time * 0.3) * cos(uv.y * 8.0 + time * 0.2);
    noise += sin(uv.x * 20.0 - time * 0.4) * cos(uv.y * 15.0 + time * 0.3) * 0.2;
    
    // Elegant gradient mix
    vec3 gradient = mix(color1, color2, uv.y * 0.7);
    gradient = mix(gradient, color3, uv.x * 0.4 + noise * 0.05);
    
    // Add subtle shimmer
    vec3 color = gradient + vec3(noise * 0.02 * intensity);
    
    // Soft radial fade
    float alpha = 0.25 - length(uv - 0.5) * 0.4;
    alpha = clamp(alpha, 0.0, 0.25);
    
    gl_FragColor = vec4(color, alpha * intensity);
  }
`;

function ShaderPlane() {
    const mesh = useRef<THREE.Mesh>(null);
    const material = useRef<THREE.ShaderMaterial>(null);

    const uniforms = useMemo(
        () => ({
            time: { value: 0 },
            intensity: { value: 0.8 },
            color1: { value: new THREE.Color("#0a0908") },
            color2: { value: new THREE.Color("#1a1816") },
            color3: { value: new THREE.Color("#22d3ee") },
        }),
        []
    );

    useFrame((state) => {
        if (material.current) {
            material.current.uniforms.time.value = state.clock.elapsedTime * 0.3;
            material.current.uniforms.intensity.value =
                0.8 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <mesh ref={mesh} rotation={[0, 0, 0]}>
            <planeGeometry args={[5, 5, 64, 64]} />
            <shaderMaterial
                ref={material}
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent
                side={THREE.DoubleSide}
                depthWrite={false}
            />
        </mesh>
    );
}

function FloatingOrbs() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.x =
                Math.sin(state.clock.elapsedTime * 0.15) * 0.05;
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    const orbPositions = useMemo(() => {
        return [...Array(12)].map((_, i) => ({
            position: [
                Math.sin((i / 12) * Math.PI * 2) * 3.5,
                Math.cos((i / 12) * Math.PI * 2) * 3.5,
                -3 + Math.sin(i * 0.8) * 0.8,
            ] as [number, number, number],
            size: 0.03 + Math.random() * 0.04,
            color: i % 4 === 0 ? "#22d3ee" : i % 4 === 1 ? "#06b6d4" : i % 4 === 2 ? "#67e8f9" : "#0891b2",
        }));
    }, []);

    return (
        <group ref={groupRef}>
            {orbPositions.map((orb, i) => (
                <mesh key={i} position={orb.position}>
                    <sphereGeometry args={[orb.size, 12, 12]} />
                    <meshBasicMaterial color={orb.color} transparent opacity={0.6} />
                </mesh>
            ))}
        </group>
    );
}

export function AnimatedShaderBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                className="gpu-accelerate"
                gl={{
                    alpha: true,
                    antialias: true,
                    powerPreference: "high-performance",
                }}
                style={{
                    background: "linear-gradient(135deg, #0a0908 0%, #1a1816 40%, #0a0908 100%)",
                }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.3} />
                    <ShaderPlane />
                    <FloatingOrbs />
                </Suspense>
            </Canvas>

            {/* Gold ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22d3ee]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#06b6d4]/5 rounded-full blur-3xl" />
            </div>
        </div>
    );
}
