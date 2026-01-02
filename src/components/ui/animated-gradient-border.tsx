"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedGradientBorderProps {
    children: ReactNode;
    className?: string;
    borderWidth?: number;
    duration?: number;
}

export function AnimatedGradientBorder({ 
    children, 
    className = "",
    borderWidth = 2,
    duration = 3
}: AnimatedGradientBorderProps) {
    return (
        <div className={`relative ${className}`}>
            <motion.div
                className="absolute inset-0 rounded-[inherit]"
                style={{
                    padding: `${borderWidth}px`,
                    background: "linear-gradient(90deg, #a855f7, #ec4899, #06b6d4, #10b981, #a855f7)",
                    backgroundSize: "200% 100%",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                }}
                animate={{
                    backgroundPosition: ["0% 0%", "200% 0%"],
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
