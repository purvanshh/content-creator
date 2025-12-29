"use client";

import { Video, Play, ArrowUpRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function VideosSection() {
    const videos = [
        {
            title: "Building Your Personal Brand",
            description: "Master the art of authentic personal branding on LinkedIn",
            views: "5.2K",
            duration: "12:34",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
        },
        {
            title: "Video Tips for Standout",
            description: "Create compelling video content that drives engagement",
            views: "3.8K",
            duration: "08:45",
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=450&fit=crop",
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
                            Videos
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Watch & <span className="gradient-text">Learn</span>
                        </h2>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-black rounded-full font-medium text-sm hover:bg-cyan-400 transition-colors"
                    >
                        View All
                        <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                </motion.div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {videos.map((video, idx) => (
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
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={video.image}
                                    alt={video.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300"
                                    >
                                        <Play className="w-7 h-7 text-white ml-1 group-hover:text-black transition-colors" />
                                    </motion.div>
                                </div>

                                {/* Duration */}
                                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white font-medium">
                                    {video.duration}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {video.title}
                                </h3>
                                <p className="text-sm text-white/50 mb-4">{video.description}</p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1.5 text-white/40 text-xs">
                                        <Eye className="w-4 h-4" />
                                        <span>{video.views} views</span>
                                    </div>
                                    <span className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                        Watch now <ArrowUpRight className="w-3 h-3" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
