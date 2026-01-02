"use client";

import { Play, ExternalLink, Clock, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TiltCard } from "@/components/ui/tilt-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function PodcastSection() {
    const episodes = [
        {
            number: "57",
            title: "Routes on Mind",
            description: "Exploring the psychology behind successful sales strategies",
            platform: "Spotify",
            duration: "45 min",
            image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop",
            color: "from-green-500 to-emerald-600",
        },
        {
            number: "56",
            title: "Sales Success Stories",
            description: "Real stories from the field that transformed careers",
            platform: "Apple Podcasts",
            duration: "38 min",
            image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=400&fit=crop",
            color: "from-purple-500 to-pink-600",
        },
        {
            number: "55",
            title: "Developing Your Brand",
            description: "How to stand out in a crowded market",
            platform: "YouTube",
            duration: "42 min",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
            color: "from-red-500 to-orange-600",
        },
    ];

    return (
        <section id="podcast" className="relative px-4 py-24 md:py-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
                >
                    <div>
                        <span className="inline-block px-4 py-1.5 text-xs font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20 mb-4">
                            <Headphones className="w-3 h-3 inline mr-1.5" />
                            Podcast
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            Latest <span className="gradient-text">Episodes</span>
                        </h2>
                    </div>
                    <ShimmerButton className="flex items-center gap-2 text-sm text-white/60 hover:text-purple-400 transition-colors group">
                        View all episodes
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </ShimmerButton>
                </motion.div>

                {/* Episodes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {episodes.map((episode, idx) => (
                        <ScrollReveal 
                            key={idx}
                            direction="up"
                            delay={idx * 0.15}
                        >
                            <SpotlightCard spotlightColor="rgba(168, 85, 247, 0.2)">
                                <TiltCard 
                                    className="group bento-card rounded-3xl overflow-hidden cursor-pointer h-full"
                                    tiltAmount={8}
                                >
                                    {/* Thumbnail */}
                                    <div className="relative aspect-square overflow-hidden">
                                        <Image
                                            src={episode.image}
                                            alt={episode.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />

                                        {/* Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                initial={{ scale: 0.9, opacity: 0.8 }}
                                                whileHover={{ scale: 1.1 }}
                                                className={`w-16 h-16 rounded-full bg-gradient-to-br ${episode.color} flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300`}
                                            >
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                >
                                                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                                                </motion.div>
                                            </motion.div>
                                        </div>

                                        {/* Episode Badge */}
                                        <motion.div 
                                            className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            EP {episode.number}
                                        </motion.div>

                                        {/* Platform Badge */}
                                        <motion.div 
                                            className={`absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r ${episode.color} rounded-full text-xs font-medium text-white shadow-lg`}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            {episode.platform}
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                            {episode.title}
                                        </h3>
                                        <p className="text-sm text-white/50 mb-4 line-clamp-2">
                                            {episode.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-white/40">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span>{episode.duration}</span>
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
