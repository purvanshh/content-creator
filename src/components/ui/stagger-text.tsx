"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerTextProps {
    children: string;
    className?: string;
    delay?: number;
    staggerDelay?: number;
    type?: "words" | "chars";
}

export function StaggerText({ 
    children, 
    className = "",
    delay = 0,
    staggerDelay = 0.03,
    type = "words"
}: StaggerTextProps) {
    const items = type === "words" ? children.split(" ") : children.split("");
    const separator = type === "words" ? " " : "";

    return (
        <span className={className}>
            {items.map((item, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * staggerDelay,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="inline-block"
                >
                    {item}
                    {i < items.length - 1 && separator}
                </motion.span>
            ))}
        </span>
    );
}
