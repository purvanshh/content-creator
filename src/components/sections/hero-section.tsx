"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";
import { Marquee } from "@/components/ui/marquee";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { MorphingBlob } from "@/components/ui/morphing-blob";
import { CounterAnimation } from "@/components/ui/counter-animation";
import { StaggerText } from "@/components/ui/stagger-text";

const skills = [
    "Sales Leadership",
    "Personal Branding",
    "LinkedIn Strategy",
    "Content Creation",
    "Business Development",
    "Keynote Speaking",
    "Executive Coaching",
    "B2B Growth",
];

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    return (
        <section id="home" ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-4">
            {/* Floating particles background */}
            <FloatingParticles count={30} />
            
            {/* Morphing blobs */}
            <MorphingBlob 
                className="top-20 left-10" 
                color="rgba(168, 85, 247, 0.1)" 
                size={500} 
            />
            <MorphingBlob 
                className="bottom-20 right-10" 
                color="rgba(236, 72, 153, 0.08)" 
                size={600} 
            />
            
            <motion.div 
                style={{ y, opacity, scale }}
                className="relative z-10 w-full max-w-6xl mx-auto"
            >
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                        </span>
                        <span className="text-sm text-white/70">Available for Projects</span>
                        <Sparkles className="w-4 h-4 text-purple-400" />
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
                    {/* Left Content */}
                    <div className="lg:col-span-7 text-center lg:text-left">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-4"
                        >
                            <StaggerText delay={0.3} staggerDelay={0.05} type="chars">
                                Creator & Business Coach
                            </StaggerText>
                        </motion.p>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                            <TextReveal delay={0.3}>
                                Melissa
                            </TextReveal>
                            <br />
                            <span className="gradient-text">
                                <TextReveal delay={0.5}>
                                    Gaglione
                                </TextReveal>
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="text-lg md:text-xl text-white/50 max-w-lg mx-auto lg:mx-0 mb-8"
                        >
                            Transforming professional presence through strategic personal branding and sales excellence.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4"
                        >
                            <MagneticButton strength={0.2}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_100%] text-white rounded-full font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:bg-right"
                                >
                                    Let&apos;s Connect
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </MagneticButton>

                            <MagneticButton strength={0.2}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center gap-2 px-8 py-4 glass-card text-white rounded-full font-semibold hover:border-purple-500/30 transition-all duration-300"
                                >
                                    View Portfolio
                                </motion.button>
                            </MagneticButton>
                        </motion.div>
                    </div>

                    {/* Right - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                        className="lg:col-span-5 flex justify-center"
                    >
                        <div className="relative">
                            {/* Floating orbs */}
                            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-purple-500/20 blur-2xl animate-float-orb" />
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-pink-500/20 blur-2xl animate-float-orb animation-delay-1000" />
                            <div className="absolute top-1/2 -right-12 w-20 h-20 rounded-full bg-cyan-500/20 blur-2xl animate-float-orb animation-delay-2000" />

                            {/* Main image container */}
                            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden glass-card shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1610737234961-9fce52860989?w=900&auto=format&fit=crop&q=60"
                                    alt="Melissa Gaglione - Content Creator & Business Coach"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Name overlay */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                                        <p className="text-xs text-purple-400 uppercase tracking-wider font-medium">Creator & Coach</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats cards floating around */}
                            <motion.div
                                initial={{ opacity: 0, x: -20, rotate: -5 }}
                                animate={{ opacity: 1, x: 0, rotate: 0 }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                                className="absolute -left-16 top-1/4 glass-card rounded-xl p-3 shadow-lg cursor-pointer"
                            >
                                <p className="text-2xl font-bold gradient-text">
                                    <CounterAnimation value={15} prefix="$" suffix="M+" />
                                </p>
                                <p className="text-xs text-white/50">Revenue Generated</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20, rotate: 5 }}
                                animate={{ opacity: 1, x: 0, rotate: 0 }}
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                transition={{ delay: 1.4, duration: 0.5 }}
                                className="absolute -right-12 bottom-1/4 glass-card rounded-xl p-3 shadow-lg cursor-pointer"
                            >
                                <p className="text-2xl font-bold gradient-text">
                                    <CounterAnimation value={500} suffix="+" />
                                </p>
                                <p className="text-xs text-white/50">Clients Coached</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold">
                        <span className="gradient-text-aurora">Sell, Engage, Succeed.</span>
                    </h2>
                </motion.div>
            </motion.div>

            {/* Skills Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-0 right-0"
            >
                <Marquee speed="slow" className="py-4">
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 px-6 py-2 glass-card rounded-full mx-2"
                        >
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                            <span className="text-sm text-white/70 whitespace-nowrap">{skill}</span>
                        </div>
                    ))}
                </Marquee>
            </motion.div>
        </section>
    );
}
