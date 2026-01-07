"use client";

import { Calendar, MapPin, ExternalLink, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/tilt-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function EventsSection() {
    const events = [
        {
            month: "JUN",
            day: "12",
            title: "Intro to B2B Personal Brand on LinkedIn",
            platform: "Zoom",
            time: "2:00 PM EST",
            type: "Workshop",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            month: "JUL",
            day: "08",
            title: "Sales Success Masterclass",
            platform: "LinkedIn Live",
            time: "11:00 AM EST",
            type: "Webinar",
            gradient: "from-cyan-500 to-blue-500",
        },
        {
            month: "AUG",
            day: "15",
            title: "Content Creation for Professionals",
            platform: "Zoom",
            time: "3:00 PM EST",
            type: "Workshop",
            gradient: "from-emerald-500 to-teal-500",
        },
    ];

    return (
        <section id="events" className="relative px-4 py-24 md:py-32">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 text-xs font-medium text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20 mb-4">
                        Events
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Upcoming <span className="gradient-text">Sessions</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto text-lg">
                        Join live workshops and webinars to accelerate your growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Events List */}
                    <div className="lg:col-span-8 space-y-4">
                        {events.map((event, idx) => (
                            <ScrollReveal
                                key={idx}
                                direction="left"
                                delay={idx * 0.1}
                            >
                                <SpotlightCard>
                                    <TiltCard
                                        className="group bento-card rounded-2xl p-5 cursor-pointer"
                                        tiltAmount={3}
                                        glareEnabled={false}
                                    >
                                        <div className="flex items-center gap-5">
                                            {/* Date */}
                                            <motion.div
                                                className={`flex-shrink-0 w-20 text-center p-4 rounded-2xl bg-gradient-to-br ${event.gradient} bg-opacity-10`}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <div className="text-xs font-bold text-white/80 uppercase tracking-wider">{event.month}</div>
                                                <div className="text-3xl font-bold text-white">{event.day}</div>
                                            </motion.div>

                                            {/* Details */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <motion.span
                                                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${event.gradient} text-white`}
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {event.type}
                                                    </motion.span>
                                                </div>
                                                <h3 className="text-lg font-semibold text-white truncate group-hover:text-purple-400 transition-colors">
                                                    {event.title}
                                                </h3>
                                                <div className="flex items-center gap-4 text-sm text-white/40 mt-2">
                                                    <span className="flex items-center gap-1.5">
                                                        <MapPin className="w-3.5 h-3.5" />
                                                        {event.platform}
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        {event.time}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Arrow */}
                                            <motion.div
                                                className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors"
                                                whileHover={{ scale: 1.1, rotate: 45 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-purple-400 transition-all" />
                                            </motion.div>
                                        </div>
                                    </TiltCard>
                                </SpotlightCard>
                            </ScrollReveal>
                        ))}

                        <ShimmerButton className="w-full py-4 px-6 bento-card rounded-2xl font-medium text-white/60 hover:text-purple-400 flex items-center justify-center gap-2 transition-all group">
                            View All Events
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </ShimmerButton>
                    </div>

                    {/* LinkedIn Card */}
                    <ScrollReveal direction="right" delay={0.3} className="lg:col-span-4 w-full">
                        <SpotlightCard spotlightColor="rgba(0, 119, 181, 0.2)" className="w-full">
                            <TiltCard className="w-full h-full bento-card rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                                <motion.div
                                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0077b5] to-[#00a0dc] flex items-center justify-center mb-6 shadow-lg shadow-[#0077b5]/20"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-2">Stay Connected</h3>
                                <p className="text-sm text-white/50 mb-6">Get the latest insights, tips, and updates directly in your feed</p>
                                <ShimmerButton className="px-6 py-3 bg-gradient-to-r from-[#0077b5] to-[#00a0dc] text-white rounded-full text-sm font-semibold shadow-lg shadow-[#0077b5]/25 hover:shadow-[#0077b5]/40 transition-all">
                                    Follow on LinkedIn
                                </ShimmerButton>
                            </TiltCard>
                        </SpotlightCard>
                    </ScrollReveal>
                </div>
            </div >
        </section >
    );
}
