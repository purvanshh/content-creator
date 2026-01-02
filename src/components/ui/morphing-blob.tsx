"use client";

import { motion } from "framer-motion";

interface MorphingBlobProps {
    className?: string;
    color?: string;
    size?: number;
}

export function MorphingBlob({ 
    className = "", 
    color = "rgba(168, 85, 247, 0.15)",
    size = 400 
}: MorphingBlobProps) {
    return (
        <motion.div
            className={`absolute rounded-full blur-3xl ${className}`}
            style={{
                width: size,
                height: size,
                background: color,
            }}
            animate={{
                scale: [1, 1.2, 1.1, 1],
                rotate: [0, 90, 180, 270, 360],
                borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", 
                              "70% 30% 30% 70% / 70% 70% 30% 30%",
                              "50% 50% 50% 50% / 50% 50% 50% 50%",
                              "30% 70% 70% 30% / 30% 30% 70% 70%"],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
}
