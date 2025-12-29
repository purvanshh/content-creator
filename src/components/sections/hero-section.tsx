"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
    // Cards arranged on left and right sides - more spread out
    const leftCards = [
        {
            title: "Sales Expert",
            description: "Generated over $15M in B2B revenue through strategic relationship building and consultative selling approaches.",
            finalX: -380,
            finalY: -220,
            delay: 0.6,
            textDelay: 1.4,
        },
        {
            title: "LinkedIn Coach",
            description: "Helping 500+ professionals build authentic personal brands and become recognized thought leaders.",
            finalX: -400,
            finalY: -70,
            delay: 0.8,
            textDelay: 1.6,
        },
        {
            title: "Business Mentor",
            description: "Guiding entrepreneurs and executives to scale their businesses with proven growth strategies.",
            finalX: -400,
            finalY: 80,
            delay: 1.0,
            textDelay: 1.8,
        },
        {
            title: "Podcast Host",
            description: "Sharing insights, stories, and expert interviews with a growing global audience of professionals.",
            finalX: -380,
            finalY: 230,
            delay: 1.2,
            textDelay: 2.0,
        },
    ];

    const rightCards = [
        {
            title: "Content Creator",
            description: "Creating engaging, educational content that inspires action and drives meaningful audience connections.",
            finalX: 380,
            finalY: -220,
            delay: 0.7,
            textDelay: 1.5,
        },
        {
            title: "Keynote Speaker",
            description: "Delivering powerful presentations on sales excellence, personal branding, and business development.",
            finalX: 400,
            finalY: -70,
            delay: 0.9,
            textDelay: 1.7,
        },
        {
            title: "Personal Branding",
            description: "Transforming professionals into industry voices with authentic, impactful online presence strategies.",
            finalX: 400,
            finalY: 80,
            delay: 1.1,
            textDelay: 1.9,
        },
        {
            title: "Strategy Expert",
            description: "Developing growth-focused solutions that align personal goals with business objectives.",
            finalX: 380,
            finalY: 230,
            delay: 1.3,
            textDelay: 2.1,
        },
    ];

    const allCards = [...leftCards, ...rightCards];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-12 px-4">
            <div className="relative z-10 w-full max-w-[1400px] mx-auto">

                {/* Central Container with dispersion */}
                <div className="relative flex items-center justify-center min-h-[650px] md:min-h-[700px]">

                    {/* Cards - start from center, disperse to sides */}
                    {allCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                scale: 0.5,
                                x: 0,
                                y: 0,
                                rotate: index < 4 ? -20 : 20,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: card.finalX,
                                y: card.finalY,
                                rotate: 0,
                            }}
                            transition={{
                                delay: card.delay,
                                type: "spring" as const,
                                stiffness: 50,
                                damping: 12,
                                mass: 1,
                            }}
                            className="absolute w-72 md:w-80 will-change-transform"
                            style={{
                                transform: "translateZ(0)",
                                backfaceVisibility: "hidden",
                                zIndex: 10 - index
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, x: index < 4 ? 10 : -10 }}
                                transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                                className="glass-card rounded-xl p-4 cursor-pointer shadow-lg"
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: card.textDelay, duration: 0.5 }}
                                >
                                    <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full mb-2" />
                                    <h3 className="text-sm font-bold text-white mb-1.5">{card.title}</h3>
                                    <p className="text-xs text-white/60 leading-relaxed">{card.description}</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}

                    {/* Center Image - appears first */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative z-20"
                    >
                        <div className="relative w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 rounded-3xl overflow-hidden glass-card shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1610737234961-9fce52860989?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHww"
                                alt="Melissa Gaglione - Content Creator & Business Coach"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Name overlay */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="absolute bottom-4 left-4 right-4"
                            >
                                <p className="text-xl md:text-2xl font-bold text-white">Melissa</p>
                                <p className="text-sm text-white/70">Gaglione</p>
                                <div className="flex items-center gap-2 mt-1.5">
                                    <div className="w-6 h-0.5 bg-cyan-400 rounded-full" />
                                    <p className="text-[10px] text-cyan-400 uppercase tracking-wider">Creator & Coach</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 -z-10 blur-3xl bg-cyan-500/15 rounded-full scale-150" />
                    </motion.div>

                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.4, duration: 0.7 }}
                    className="text-center mt-4"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        <span className="gradient-text">Sell, Engage, Succeed.</span>
                    </h2>
                    <p className="text-white/50 text-sm mb-5 max-w-md mx-auto">
                        Transforming professional presence through strategic personal branding and sales excellence.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black rounded-full font-semibold text-sm shadow-lg shadow-cyan-500/25"
                        >
                            Let&apos;s Connect
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                            className="flex items-center gap-2 px-6 py-3 glass-card text-white rounded-full font-semibold text-sm"
                        >
                            View Portfolio
                        </motion.button>
                    </div>

                    {/* Available Badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.7, duration: 0.4 }}
                        className="flex justify-center mt-5"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                            </span>
                            <span className="text-xs text-white/60">Available for Projects</span>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
