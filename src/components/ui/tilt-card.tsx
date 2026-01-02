"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    tiltAmount?: number;
    glareEnabled?: boolean;
}

export function TiltCard({ 
    children, 
    className = "", 
    tiltAmount = 10,
    glareEnabled = true 
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);
    
    const springConfig = { damping: 20, stiffness: 300 };
    const rotateX = useSpring(useTransform(y, [0, 1], [tiltAmount, -tiltAmount]), springConfig);
    const rotateY = useSpring(useTransform(x, [0, 1], [-tiltAmount, tiltAmount]), springConfig);
    
    const glareX = useTransform(x, [0, 1], ["-100%", "200%"]);
    const glareOpacity = useTransform(x, [0, 0.5, 1], [0, 0.15, 0]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                transformPerspective: 1000,
            }}
            className={`relative ${className}`}
        >
            {children}
            {glareEnabled && (
                <motion.div
                    className="pointer-events-none absolute inset-0 rounded-[inherit]"
                    style={{
                        background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.8) 45%, rgba(255,255,255,0.8) 50%, transparent 55%)`,
                        backgroundPositionX: glareX,
                        opacity: glareOpacity,
                    }}
                />
            )}
        </motion.div>
    );
}
