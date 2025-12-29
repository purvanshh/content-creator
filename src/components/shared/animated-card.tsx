"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    hoverScale?: number;
    index?: number;
}

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.95,
        rotateX: -5,
    },
    visible: (custom: { delay: number; index: number }) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.5,
            delay: custom.delay + custom.index * 0.1,
        },
    }),
    hover: {
        y: -8,
        scale: 1.02,
        rotateX: 2,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
        },
    },
};

export function AnimatedCard({
    children,
    className,
    delay = 0,
    hoverScale = 1.02,
    index = 0,
}: AnimatedCardProps) {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            custom={{ delay, index }}
            className={cn(
                "glass-card rounded-2xl p-6 shadow-xl transform-style-3d gpu-accelerate",
                "backdrop-blur-xl border border-white/30",
                "hover:border-white/50 transition-all duration-300",
                className
            )}
            style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
            }}
        >
            <div className="transform-style-3d">{children}</div>
        </motion.div>
    );
}
