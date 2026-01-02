"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    variant?: "default" | "light" | "cyan" | "aurora";
    animate?: boolean;
}

export function GradientText({
    children,
    className,
    variant = "default",
    animate = true,
}: GradientTextProps) {
    const variantClasses = {
        default: "gradient-text",
        light: "gradient-text-light",
        cyan: "gradient-text-cyan",
        aurora: "gradient-text-aurora",
    };

    const gradientClass = variantClasses[variant];

    if (animate) {
        return (
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={cn(gradientClass, className)}
            >
                {children}
            </motion.span>
        );
    }

    return <span className={cn(gradientClass, className)}>{children}</span>;
}
