"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    staggerChildren?: number;
}

export function TextReveal({ 
    children, 
    className = "", 
    delay = 0,
    staggerChildren = 0.03 
}: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    const words = children.split(" ");

    return (
        <motion.span
            ref={ref}
            className={`inline-block ${className}`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                visible: {
                    transition: {
                        staggerChildren,
                        delayChildren: delay,
                    },
                },
            }}
        >
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                    <motion.span
                        className="inline-block"
                        variants={{
                            hidden: { 
                                y: "100%",
                                rotateX: -90,
                                opacity: 0,
                            },
                            visible: { 
                                y: 0,
                                rotateX: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    damping: 12,
                                    stiffness: 100,
                                },
                            },
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.span>
    );
}

export function CharacterReveal({ 
    children, 
    className = "", 
    delay = 0 
}: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    
    const characters = children.split("");

    return (
        <motion.span
            ref={ref}
            className={`inline-block ${className}`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.02,
                        delayChildren: delay,
                    },
                },
            }}
        >
            {characters.map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                        hidden: { 
                            opacity: 0,
                            y: 20,
                            filter: "blur(10px)",
                        },
                        visible: { 
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            transition: {
                                type: "spring",
                                damping: 12,
                                stiffness: 200,
                            },
                        },
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}
