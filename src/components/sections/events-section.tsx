"use client";

import { Calendar, MapPin, ExternalLink, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function EventsSection() {
    const events = [
        {
            month: "JUN",
            day: "12",
            title: "Intro to B2B Personal Brand on LinkedIn",
            platform: "Zoom",
            time: "2:00 PM EST",
            type: "Workshop",
        },
        {
            month: "JUL",
            day: "08",
            title: "Sales Success Masterclass",
            platform: "LinkedIn Live",
            time: "11:00 AM EST",
            type: "Webinar",
        },
        {
            month: "AUG",
            day: "15",
            title: "Content Creation for Professionals",
            platform: "Zoom",
            time: "3:00 PM EST",
            type: "Workshop",
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
                        Events
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Upcoming <span className="gradient-text">Sessions</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto">
                        Join live workshops and webinars to accelerate your growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Events List */}
                    <div className="lg:col-span-2 space-y-3">
                        {events.map((event, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                whileHover={{ x: 5 }}
                                className="group glass-card rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:border-cyan-500/30"
                            >
                                <div className="flex items-center gap-4">
                                    {/* Date */}
                                    <div className="flex-shrink-0 w-16 text-center p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl border border-cyan-500/20">
                                        <div className="text-[10px] font-bold text-cyan-400 uppercase">{event.month}</div>
                                        <div className="text-2xl font-bold text-white">{event.day}</div>
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="px-2 py-0.5 text-[10px] font-medium text-cyan-400 bg-cyan-500/20 rounded-full">
                                                {event.type}
                                            </span>
                                        </div>
                                        <h3 className="text-base font-semibold text-white truncate group-hover:text-cyan-400 transition-colors">
                                            {event.title}
                                        </h3>
                                        <div className="flex items-center gap-3 text-xs text-white/40 mt-1">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                {event.platform}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {event.time}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                                </div>
                            </motion.div>
                        ))}

                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="w-full py-3 px-4 glass-card rounded-xl font-medium text-sm text-white/70 hover:text-cyan-400 hover:border-cyan-500/30 flex items-center justify-center gap-2 transition-all"
                        >
                            View All Events
                            <ExternalLink className="w-4 h-4" />
                        </motion.button>
                    </div>

                    {/* LinkedIn Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-[#0077b5] flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Stay Connected</h3>
                        <p className="text-sm text-white/50 mb-4">Get the latest insights and updates</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-5 py-2 bg-[#0077b5] text-white rounded-full text-sm font-medium hover:bg-[#005582] transition-colors"
                        >
                            Follow on LinkedIn
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
