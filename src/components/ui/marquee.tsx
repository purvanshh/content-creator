"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
    children: ReactNode;
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    speed?: "slow" | "normal" | "fast";
}

export function Marquee({ 
    children, 
    className = "", 
    reverse = false,
    pauseOnHover = true,
    speed = "normal"
}: MarqueeProps) {
    const speedMap = {
        slow: "40s",
        normal: "25s",
        fast: "15s",
    };

    return (
        <div 
            className={cn(
                "group flex overflow-hidden [--gap:1rem] gap-[--gap]",
                pauseOnHover && "[&:hover_.marquee-content]:pause",
                className
            )}
        >
            {[...Array(2)].map((_, i) => (
                <div
                    key={i}
                    className="marquee-content flex shrink-0 gap-[--gap] animate-marquee"
                    style={{
                        animationDuration: speedMap[speed],
                        animationDirection: reverse ? "reverse" : "normal",
                    }}
                >
                    {children}
                </div>
            ))}
        </div>
    );
}
