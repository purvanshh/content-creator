"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function WebGLShader() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const sceneRef = useRef<{
        scene: THREE.Scene | null
        camera: THREE.OrthographicCamera | null
        renderer: THREE.WebGLRenderer | null
        mesh: THREE.Mesh | null
        uniforms: {
            resolution: { value: number[] }
            time: { value: number }
        } | null
        animationId: number | null
    }>({
        scene: null,
        camera: null,
        renderer: null,
        mesh: null,
        uniforms: null,
        animationId: null,
    })

    useEffect(() => {
        if (!canvasRef.current) return

        const canvas = canvasRef.current
        const { current: refs } = sceneRef

        const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

        // Modern aurora/mesh gradient shader - 2026 style
        const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      // Simplex noise functions
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i);
        vec4 p = permute(permute(permute(
          i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        float aspect = resolution.x / resolution.y;
        uv.x *= aspect;
        
        float t = time * 0.15;
        
        // Create flowing noise layers
        float n1 = snoise(vec3(uv * 1.5, t * 0.5)) * 0.5 + 0.5;
        float n2 = snoise(vec3(uv * 2.0 + 100.0, t * 0.3)) * 0.5 + 0.5;
        float n3 = snoise(vec3(uv * 3.0 + 200.0, t * 0.4)) * 0.5 + 0.5;
        
        // Color palette - purple, pink, cyan, emerald
        vec3 purple = vec3(0.659, 0.333, 0.969);  // #a855f7
        vec3 pink = vec3(0.925, 0.282, 0.596);    // #ec4899
        vec3 cyan = vec3(0.024, 0.714, 0.831);    // #06b6d4
        vec3 emerald = vec3(0.063, 0.725, 0.506); // #10b981
        vec3 dark = vec3(0.02, 0.02, 0.02);
        
        // Mix colors based on noise
        vec3 color = dark;
        color = mix(color, purple * 0.4, n1 * 0.3 * smoothstep(0.3, 0.7, uv.y));
        color = mix(color, pink * 0.35, n2 * 0.25 * smoothstep(0.2, 0.8, 1.0 - uv.x / aspect));
        color = mix(color, cyan * 0.3, n3 * 0.2 * smoothstep(0.4, 0.9, uv.x / aspect));
        color = mix(color, emerald * 0.25, n1 * n2 * 0.15);
        
        // Add subtle vignette
        float vignette = 1.0 - length((gl_FragCoord.xy / resolution.xy - 0.5) * 1.2);
        vignette = smoothstep(0.0, 0.7, vignette);
        color *= vignette * 0.8 + 0.2;
        
        // Add subtle grain
        float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
        color += (grain - 0.5) * 0.015;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `

        const initScene = () => {
            refs.scene = new THREE.Scene()
            refs.renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
            refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            refs.renderer.setClearColor(new THREE.Color(0x050505))

            refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)

            refs.uniforms = {
                resolution: { value: [window.innerWidth, window.innerHeight] },
                time: { value: 0.0 },
            }

            const position = [
                -1.0, -1.0, 0.0,
                1.0, -1.0, 0.0,
                -1.0, 1.0, 0.0,
                1.0, -1.0, 0.0,
                -1.0, 1.0, 0.0,
                1.0, 1.0, 0.0,
            ]

            const positions = new THREE.BufferAttribute(new Float32Array(position), 3)
            const geometry = new THREE.BufferGeometry()
            geometry.setAttribute("position", positions)

            const material = new THREE.RawShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms: refs.uniforms,
                side: THREE.DoubleSide,
            })

            refs.mesh = new THREE.Mesh(geometry, material)
            refs.scene.add(refs.mesh)

            handleResize()
        }

        const animate = () => {
            if (refs.uniforms) refs.uniforms.time.value += 0.016
            if (refs.renderer && refs.scene && refs.camera) {
                refs.renderer.render(refs.scene, refs.camera)
            }
            refs.animationId = requestAnimationFrame(animate)
        }

        const handleResize = () => {
            if (!refs.renderer || !refs.uniforms) return
            const width = window.innerWidth
            const height = window.innerHeight
            refs.renderer.setSize(width, height, false)
            refs.uniforms.resolution.value = [width, height]
        }

        initScene()
        animate()
        window.addEventListener("resize", handleResize)

        return () => {
            if (refs.animationId) cancelAnimationFrame(refs.animationId)
            window.removeEventListener("resize", handleResize)
            if (refs.mesh) {
                refs.scene?.remove(refs.mesh)
                refs.mesh.geometry.dispose()
                if (refs.mesh.material instanceof THREE.Material) {
                    refs.mesh.material.dispose()
                }
            }
            refs.renderer?.dispose()
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full block -z-10"
        />
    )
}
