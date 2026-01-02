"use client";

import { Award, Briefcase, TrendingUp, Mic, Video, Users, Zap, Target } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/tilt-card";
import { ScrollReveal, ScrollScale } from "@/components/ui/scroll-reveal";
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border";
import { CounterAnimation } from "@/components/ui/counter-animation";
import { FloatingParticles } from "@/components/ui/floating-particles";

export function ExpertiseSection() {
    const expertiseCards = [
        {
            icon: Award,
            title: "Sales Leadership",
            description: "Strategic B2B relationships driving revenue growth",
            stat: "15M+",
            prefix: "$",
            gradient: "from-purple-500/20 to-pink-500/10",
            iconColor: "text-purple-400",
            delay: 0.1,
        },
        {
            icon: Briefcase,
            title: "Business Development",
            description: "Expert in developing new markets and partnerships",
            stat: "500+",
            prefix: "",
            gradient: "from-cyan-500/20 to-emerald-500/10",
            iconColor: "text-cyan-400",
            delay: 0.2,
        },
        {
            icon: TrendingUp,
            title: "Personal Branding",
            description: "Building impactful LinkedIn presence",
            stat: "5+",
            prefix: "",
            gradient: "from-pink-500/20 to-purple-500/10",
            iconColor: "text-pink-400",
            delay: 0.3,
        },
        {
            icon: Mic,
            title: "Podcast Host",
            description: "Sharing insights with global audience",
            stat: "50+",
            prefix: "",
            gradient: "from-emerald-500/20 to-cyan-500/10",
            iconColor: "text-emerald-400",
            delay: 0.4,
        },
        {
            icon: Video,
            title: "Content Creator",
            description: "Educational content that inspires action",
            stat: "Daily",
            prefix: "",
            gradient: "from-orange-500/20 to-red-500/10",
            iconColor: "text-orange-400",
            delay: 0.5,
        },
        {
            icon: Target,
            title: "Strategy Expert",
            description: "Growth-focused solutions for businesses",
            stat: "100%",
            prefix: "",
            gradient: "from-blue-500/20 to-indigo-500/10",
            iconColor: "text-blue-400",
            delay: 0.6,
        },
    ];

    return (
        <section id="expertise" className="relative px-4 py-24 md:py-32 overflow-hidden">
            {/* Floating particles */}
            <FloatingParticles count={15} />
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <ScrollReveal direction="up">
                    <div className="text-center mb-16">
                        <motion.span 
                            className="inline-block px-4 py-1.5 text-xs font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20 mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            Expertise
                        </motion.span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            What I <span className="gradient-text">Bring to the Table</span>
                        </h2>
                        <p className="text-white/50 max-w-xl mx-auto text-lg">
                            Years of experience helping professionals and businesses achieve sustainable growth.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Main Profile Card */}
                <ScrollScale delay={0.2}>
                    <div className="mb-12">
                        <AnimatedGradientBorder className="rounded-3xl" borderWidth={1} duration={4}>
                            <TiltCard className="bento-card rounded-3xl overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                                    {/* Image Side */}
                                    <div className="relative">
                                        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                                            <Image
                                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop"
                                                alt="Professional Business Environment"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        {/* Floating badge */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 }}
                                            className="absolute -bottom-4 -right-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-2xl"
                                        >
                                            <p className="text-sm text-white font-semibold">Trusted by 500+ Clients</p>
                                        </motion.div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex flex-col justify-center">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                                Experience & Expertise
                                            </h3>
                                            <p className="text-white/60 leading-relaxed mb-6">
                                                Seasoned professional with extensive experience in sales leadership,
                                                business development, and personal branding. Track record of generating
                                                over $15M in revenue and transforming careers.
                                            </p>
                                            <div className="flex flex-wrap gap-3">
                                                {["B2B Sales", "LinkedIn", "Coaching", "Speaking", "Strategy", "Growth"].map((tag, i) => (
                                                    <motion.span
                                                        key={tag}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.4 + i * 0.05 }}
                                                        whileHover={{ scale: 1.1, y: -2 }}
                                                        className="px-3 py-1.5 text-xs font-medium text-white/70 bg-white/5 rounded-full border border-white/10 hover:border-purple-500/30 hover:text-purple-400 transition-all cursor-pointer"
                                                    >
                                                        {tag}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </TiltCard>
                        </AnimatedGradientBorder>
                    </div>
                </ScrollScale>

                {/* Expertise Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expertiseCards.map((card, idx) => (
                        <ScrollReveal 
                            key={idx}
                            direction={idx % 2 === 0 ? "left" : "right"}
                            delay={card.delay}
                        >
                            <TiltCard className="h-full bento-card rounded-3xl p-6 group cursor-pointer relative overflow-hidden">
                                {/* Gradient overlay on hover */}
                                <motion.div 
                                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                    initial={false}
                                />
                                
                                <div className="relative z-10">
                                    {/* Icon and Stat */}
                                    <div className="flex items-start justify-between mb-4">
                                        <motion.div 
                                            className={`p-3 rounded-2xl bg-gradient-to-br ${card.gradient} ${card.iconColor}`}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <card.icon className="w-6 h-6" />
                                        </motion.div>
                                        <motion.span 
                                            className="text-2xl font-bold gradient-text"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: card.delay + 0.2, type: "spring" }}
                                        >
                                            {card.stat === "Daily" || card.stat === "100%" ? (
                                                card.stat
                                            ) : (
                                                <CounterAnimation 
                                                    value={parseInt(card.stat)} 
                                                    prefix={card.prefix}
                                                    suffix="+"
                                                />
                                            )}
                                        </motion.span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-white/50 leading-relaxed">
                                        {card.description}
                                    </p>

                                    {/* Hover indicator */}
                                    <motion.div
                                        className="mt-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "30%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: card.delay + 0.3, duration: 0.6 }}
                                    />
                                </div>
                            </TiltCard>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom CTA */}
                <ScrollScale delay={0.8}>
                    <div className="mt-12 text-center">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_100%] text-white rounded-full font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:bg-right"
                        >
                            Explore My Work
                        </motion.button>
                    </div>
                </ScrollScale>
            </div>
        </section>
    );
}
