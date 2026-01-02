"use client";

import { Play, ArrowUpRight, Eye, Video } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TiltCard } from "@/components/ui/tilt-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";

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
        <section id="videos" className="relative px-4 py-24 md:py-32">
            <div className="max-w-6xl mx-auto">
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
                            <Video className="w-3 h-3 inline mr-1.5" />
                            Videos
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            Watch & <span className="gradient-text">Learn</span>
                        </h2>
                    </div>
                    <ShimmerButton className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all group">
                        View All
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </ShimmerButton>
                </motion.div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videos.map((video, idx) => (
                        <ScrollReveal 
                            key={idx}
                            direction={idx % 2 === 0 ? "left" : "right"}
                            delay={idx * 0.15}
                        >
                            <SpotlightCard spotlightColor="rgba(236, 72, 153, 0.2)">
                                <TiltCard 
                                    className="group bento-card rounded-3xl overflow-hidden cursor-pointer"
                                    tiltAmount={5}
                                >
                                    {/* Thumbnail */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={video.image}
                                            alt={video.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

                                        {/* Play Button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 group-hover:border-transparent transition-all duration-300 shadow-2xl"
                                            >
                                                <motion.div
                                                    animate={{ 
                                                        scale: [1, 1.1, 1],
                                                    }}
                                                    transition={{ 
                                                        duration: 2, 
                                                        repeat: Infinity,
                                                        repeatType: "reverse"
                                                    }}
                                                >
                                                    <Play className="w-8 h-8 text-white ml-1" fill="white" fillOpacity={0.9} />
                                                </motion.div>
                                            </motion.div>
                                        </div>

                                        {/* Duration */}
                                        <motion.div 
                                            className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg text-xs text-white font-medium"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {video.duration}
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                            {video.title}
                                        </h3>
                                        <p className="text-sm text-white/50 mb-4">{video.description}</p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-white/40 text-sm">
                                                <Eye className="w-4 h-4" />
                                                <span>{video.views} views</span>
                                            </div>
                                            <motion.span 
                                                className="text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                                                whileHover={{ x: 5 }}
                                            >
                                                Watch now 
                                                <ArrowUpRight className="w-3.5 h-3.5" />
                                            </motion.span>
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
