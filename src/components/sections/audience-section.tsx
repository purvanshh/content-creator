"use client";

import { Users, Target, Rocket, Building2, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TiltCard } from "@/components/ui/tilt-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FloatingParticles } from "@/components/ui/floating-particles";

export function AudienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const audienceTypes = [
        {
            icon: <Building2 className="w-6 h-6" />,
            title: "Sales Professionals",
            description: "B2B salespeople leveraging LinkedIn for lead generation and relationship building.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
            gradient: "from-purple-500/20 to-pink-500/10",
            accent: "purple",
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Entrepreneurs",
            description: "Business owners establishing thought leadership and growing their brands.",
            image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
            gradient: "from-cyan-500/20 to-blue-500/10",
            accent: "cyan",
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Career Changers",
            description: "Professionals transitioning to new industries and reinventing themselves.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
            gradient: "from-emerald-500/20 to-teal-500/10",
            accent: "emerald",
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Teams & Organizations",
            description: "Companies empowering their workforce with social selling skills.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
            gradient: "from-orange-500/20 to-amber-500/10",
            accent: "orange",
        },
    ];

    const accentColors: Record<string, string> = {
        purple: "text-purple-400 group-hover:text-purple-300",
        cyan: "text-cyan-400 group-hover:text-cyan-300",
        emerald: "text-emerald-400 group-hover:text-emerald-300",
        orange: "text-orange-400 group-hover:text-orange-300",
    };

    return (
        <section id="audience" ref={containerRef} className="relative px-4 py-24 md:py-32 overflow-hidden">
            {/* Floating particles */}
            <FloatingParticles count={20} />
            
            {/* Floating background elements */}
            <motion.div 
                style={{ x: x1 }}
                className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl"
            />
            <motion.div 
                style={{ x: x2 }}
                className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-pink-500/5 blur-3xl"
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 text-xs font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20 mb-4">
                        Who I Help
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Built for <span className="gradient-text">Ambitious Minds</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto text-lg">
                        Whether you&apos;re mastering social selling or building a personal brand,
                        my methodologies deliver results.
                    </p>
                </motion.div>

                {/* Audience Cards - Staggered Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {audienceTypes.map((item, idx) => (
                        <ScrollReveal
                            key={idx}
                            direction={idx % 2 === 0 ? "left" : "right"}
                            delay={idx * 0.1}
                            className={idx % 2 === 1 ? "md:translate-y-8" : ""}
                        >
                            <SpotlightCard>
                                <TiltCard 
                                    className="group bento-card rounded-3xl overflow-hidden cursor-pointer h-full"
                                    tiltAmount={5}
                                >
                                    <div className="flex flex-col h-full">
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
                                            
                                            {/* Icon badge */}
                                            <motion.div 
                                                className={`absolute top-4 left-4 p-3 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-white/10`}
                                                whileHover={{ scale: 1.1, rotate: 10 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <span className={accentColors[item.accent]}>{item.icon}</span>
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className={`text-xl font-semibold text-white mb-2 ${accentColors[item.accent]} transition-colors`}>
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-white/50 leading-relaxed flex-1">
                                                {item.description}
                                            </p>
                                            <motion.div 
                                                className={`mt-4 flex items-center text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ${accentColors[item.accent]}`}
                                                whileHover={{ x: 5 }}
                                            >
                                                <span>Learn more</span>
                                                <ArrowUpRight className="w-4 h-4 ml-1" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </SpotlightCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
