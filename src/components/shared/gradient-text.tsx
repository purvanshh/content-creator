"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    variant?: "dark" | "light";
    animate?: boolean;
}

export function GradientText({
    children,
    className,
    variant = "dark",
    animate = true,
}: GradientTextProps) {
    const gradientClass =
        variant === "dark" ? "gradient-text" : "gradient-text-light";

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
