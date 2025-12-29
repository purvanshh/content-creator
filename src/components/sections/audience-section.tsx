"use client";

import { Users, Target, Rocket, Building2, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AudienceSection() {
    const audienceTypes = [
        {
            icon: <Building2 className="w-5 h-5" />,
            title: "Sales Professionals",
            description: "B2B salespeople leveraging LinkedIn for lead generation and relationship building.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
            color: "cyan",
        },
        {
            icon: <Rocket className="w-5 h-5" />,
            title: "Entrepreneurs",
            description: "Business owners establishing thought leadership and growing their brands.",
            image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
            color: "purple",
        },
        {
            icon: <Target className="w-5 h-5" />,
            title: "Career Changers",
            description: "Professionals transitioning to new industries and reinventing themselves.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
            color: "emerald",
        },
        {
            icon: <Users className="w-5 h-5" />,
            title: "Teams & Organizations",
            description: "Companies empowering their workforce with social selling skills.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
            color: "orange",
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
                        Who I Help
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Built for <span className="gradient-text">Ambitious Minds</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto">
                        Whether you&apos;re mastering social selling or building a personal brand,
                        my methodologies deliver results.
                    </p>
                </motion.div>

                {/* Audience Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {audienceTypes.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="group glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-cyan-500/30"
                        >
                            <div className="flex flex-col sm:flex-row">
                                {/* Image */}
                                <div className="relative w-full sm:w-40 h-32 sm:h-auto flex-shrink-0 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0908] sm:bg-gradient-to-l" />
                                </div>

                                {/* Content */}
                                <div className="p-5 flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-white/50 leading-relaxed mb-3">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span>Explore</span>
                                        <ArrowUpRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
