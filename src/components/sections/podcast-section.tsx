"use client";

import { Headphones, Play, ExternalLink, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function PodcastSection() {
    const episodes = [
        {
            number: "57",
            title: "Routes on Mind",
            description: "Exploring the psychology behind successful sales strategies",
            platform: "Spotify",
            duration: "45 min",
            image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop",
        },
        {
            number: "56",
            title: "Sales Success Stories",
            description: "Real stories from the field that transformed careers",
            platform: "Apple Podcasts",
            duration: "38 min",
            image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=400&fit=crop",
        },
        {
            number: "55",
            title: "Developing Your Brand",
            description: "How to stand out in a crowded market",
            platform: "YouTube",
            duration: "42 min",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
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
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
                >
                    <div>
                        <span className="inline-block px-4 py-1.5 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4">
                            Podcast
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Latest <span className="gradient-text">Episodes</span>
                        </h2>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center gap-2 text-sm text-white/60 hover:text-cyan-400 transition-colors"
                    >
                        View all episodes
                        <ExternalLink className="w-4 h-4" />
                    </motion.button>
                </motion.div>

                {/* Episodes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {episodes.map((episode, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="group glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-cyan-500/30"
                        >
                            {/* Thumbnail */}
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={episode.image}
                                    alt={episode.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-transparent" />

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                                        <Play className="w-6 h-6 text-black ml-1" />
                                    </div>
                                </div>

                                {/* Episode Badge */}
                                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                                    EP {episode.number}
                                </div>

                                {/* Platform Badge */}
                                <div className="absolute top-3 right-3 px-2.5 py-1 bg-cyan-500/20 backdrop-blur-sm rounded-full text-xs font-medium text-cyan-400">
                                    {episode.platform}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-base font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                    {episode.title}
                                </h3>
                                <p className="text-xs text-white/50 mb-3 line-clamp-2">
                                    {episode.description}
                                </p>
                                <div className="flex items-center gap-1 text-xs text-white/40">
                                    <Clock className="w-3 h-3" />
                                    <span>{episode.duration}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
