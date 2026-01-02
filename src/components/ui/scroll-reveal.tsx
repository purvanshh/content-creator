"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    duration?: number;
}

export function ScrollReveal({ 
    children, 
    className = "", 
    direction = "up",
    delay = 0,
    duration = 0.6
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const directions = {
        up: { y: 60, x: 0 },
        down: { y: -60, x: 0 },
        left: { y: 0, x: 60 },
        right: { y: 0, x: -60 },
    };

    return (
        <motion.div
            ref={ref}
            initial={{ 
                opacity: 0, 
                ...directions[direction],
                filter: "blur(10px)",
            }}
            animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                x: 0,
                filter: "blur(0px)",
            } : {}}
            transition={{ 
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function ScrollScale({ 
    children, 
    className = "",
    delay = 0 
}: { children: ReactNode; className?: string; delay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ 
                opacity: 0, 
                scale: 0.8,
                filter: "blur(10px)",
            }}
            animate={isInView ? { 
                opacity: 1, 
                scale: 1,
                filter: "blur(0px)",
            } : {}}
            transition={{ 
                duration: 0.8,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function ParallaxScroll({ 
    children, 
    className = "",
    speed = 50 
}: { children: ReactNode; className?: string; speed?: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, speed]);

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
