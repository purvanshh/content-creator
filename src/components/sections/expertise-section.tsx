"use client";

import { AnimatedCard } from "@/components/shared/animated-card";
import { Award, CheckCircle, Briefcase, TrendingUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function ExpertiseSection() {
    const expertiseItems = [
        {
            icon: <Award className="w-6 h-6" />,
            title: "Sales Leadership",
            description: "Over $15M in sales revenue through strategic B2B relationships",
            stat: "$15M+",
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Business Development",
            description: "Expert in developing new markets and building partnerships",
            stat: "500+",
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Personal Branding",
            description: "Helping professionals build impactful LinkedIn presence",
            stat: "5+",
        },
    ];

    return (
        <section className="relative px-4 py-20 md:py-28">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4">
                        Expertise
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        What I <span className="gradient-text">Bring to the Table</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto">
                        Years of experience helping professionals and businesses achieve sustainable growth.
                    </p>
                </motion.div>

                {/* Main Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card rounded-3xl p-6 md:p-8 mb-8 overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                        <div className="relative">
                            <div className="aspect-square max-w-xs mx-auto rounded-2xl overflow-hidden border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop"
                                    alt="Professional Business Environment"
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Experience & Expertise
                            </h3>
                            <p className="text-white/60 leading-relaxed mb-6">
                                Seasoned professional with extensive experience in sales leadership,
                                business development, and personal branding. Track record of generating
                                over $15M in revenue and transforming careers.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["B2B Sales", "LinkedIn", "Coaching", "Speaking"].map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 text-xs font-medium text-white/70 bg-white/5 rounded-full border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Expertise Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {expertiseItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-cyan-500/30"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 text-cyan-400 group-hover:from-cyan-500/30 group-hover:to-cyan-600/20 transition-colors">
                                    {item.icon}
                                </div>
                                <span className="text-2xl font-bold gradient-text">{item.stat}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                            <div className="mt-4 flex items-center text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>Learn more</span>
                                <ArrowUpRight className="w-4 h-4 ml-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
