"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Heart } from "lucide-react";

export function FooterSection() {
    return (
        <section className="relative px-4 py-20 md:py-28">
            <div className="max-w-4xl mx-auto">
                {/* Main CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                >
                    {/* Background glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2" />

                    <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6">
                            Let&apos;s Work Together
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Ready to <span className="gradient-text">Transform</span>
                            <br />Your Career?
                        </h2>

                        <p className="text-white/50 max-w-lg mx-auto mb-8">
                            Join hundreds of professionals who have elevated their personal brand
                            and achieved breakthrough results.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black rounded-full font-semibold shadow-lg shadow-cyan-500/25"
                            >
                                <Mail className="w-4 h-4" />
                                Get In Touch
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-2 px-6 py-3 glass-card text-white rounded-full font-medium border-white/10"
                            >
                                Subscribe
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-12 pt-8 border-t border-white/5"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                        <div className="text-white/40">
                            © 2025 Melissa Gaglione. All rights reserved.
                        </div>

                        <div className="flex items-center gap-6">
                            {["Privacy", "Terms", "Contact"].map((link) => (
                                <motion.a
                                    key={link}
                                    href="#"
                                    whileHover={{ y: -2 }}
                                    className="text-white/40 hover:text-cyan-400 transition-colors"
                                >
                                    {link}
                                </motion.a>
                            ))}
                        </div>

                        <div className="flex items-center gap-1.5 text-white/40">
                            <span>Made with</span>
                            <Heart className="w-3.5 h-3.5 text-cyan-400 fill-current" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
