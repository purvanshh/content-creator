"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShimmerButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export function ShimmerButton({ children, className = "", onClick }: ShimmerButtonProps) {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative overflow-hidden ${className}`}
        >
            <motion.div
                className="absolute inset-0 -translate-x-full"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                }}
                animate={{
                    translateX: ["100%", "-100%"],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}
