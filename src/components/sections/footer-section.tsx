"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Heart, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function FooterSection() {
    return (
        <section className="relative px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto">
                {/* Main CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bento-card rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden"
                >
                    {/* Background decorations */}
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl translate-y-1/2" />
                    <div className="absolute top-1/2 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -translate-x-1/2" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/20 mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium text-purple-400">Let&apos;s Work Together</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Ready to{" "}
                            <span className="gradient-text">Transform</span>
                            <br />
                            Your Career?
                        </h2>

                        <p className="text-lg text-white/50 max-w-lg mx-auto mb-10">
                            Join hundreds of professionals who have elevated their personal brand
                            and achieved breakthrough results.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <MagneticButton strength={0.15}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_100%] text-white rounded-full font-semibold shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:bg-right"
                                >
                                    <Mail className="w-5 h-5" />
                                    Get In Touch
                                </motion.button>
                            </MagneticButton>

                            <MagneticButton strength={0.15}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all"
                                >
                                    Subscribe
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </MagneticButton>
                        </div>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-16 pt-8 border-t border-white/5"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
                        <div className="text-white/40">
                            © 2026 Melissa Gaglione. All rights reserved.
                        </div>

                        <div className="flex items-center gap-8">
                            {["Privacy", "Terms", "Contact"].map((link) => (
                                <motion.a
                                    key={link}
                                    href="#"
                                    whileHover={{ y: -2 }}
                                    className="text-white/40 hover:text-purple-400 transition-colors"
                                >
                                    {link}
                                </motion.a>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-white/40">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-pink-500 fill-current animate-pulse" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
