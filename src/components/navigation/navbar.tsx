"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Expertise", href: "#expertise" },
    { name: "Audience", href: "#audience" },
    { name: "Events", href: "#events" },
    { name: "Podcast", href: "#podcast" },
    { name: "Videos", href: "#videos" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { scrollY } = useScroll();

    // Transform values for scroll effects
    const navbarBackground = useTransform(
        scrollY,
        [0, 100],
        ["rgba(10, 9, 8, 0.0)", "rgba(10, 9, 8, 0.8)"]
    );

    const navbarBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(20px)"]
    );

    const navbarBorder = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0)", "rgba(168, 85, 247, 0.2)"]
    );

    const navbarPadding = useTransform(
        scrollY,
        [0, 100],
        ["1.5rem", "1rem"]
    );

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.replace("#", ""));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        const element = document.getElementById(href.replace("#", ""));
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <motion.nav
                style={{
                    backgroundColor: navbarBackground,
                    backdropFilter: navbarBlur,
                    WebkitBackdropFilter: navbarBlur,
                    borderColor: navbarBorder,
                    paddingTop: navbarPadding,
                    paddingBottom: navbarPadding,
                }}
                className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-2"
                        >
                            <Link href="#home" onClick={() => handleNavClick("#home")}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 cursor-pointer"
                                >
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
                                            <Sparkles className="w-5 h-5 text-white" />
                                        </div>
                                        <motion.div
                                            className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 blur-md opacity-50"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.5, 0.3, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    </div>
                                    <div className="hidden sm:block">
                                        <h1 className="text-lg font-bold text-white">Melissa</h1>
                                        <p className="text-xs text-white/50 -mt-1">Gaglione</p>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item, index) => {
                                const isActive = activeSection === item.href.replace("#", "");
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <MagneticButton strength={0.15}>
                                            <button
                                                onClick={() => handleNavClick(item.href)}
                                                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                                    isActive
                                                        ? "text-white"
                                                        : "text-white/60 hover:text-white"
                                                }`}
                                            >
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="activeSection"
                                                        className="absolute inset-0 bg-white/10 rounded-lg border border-purple-500/30"
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 380,
                                                            damping: 30,
                                                        }}
                                                    />
                                                )}
                                                <span className="relative z-10">{item.name}</span>
                                            </button>
                                        </MagneticButton>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="hidden lg:block"
                        >
                            <MagneticButton strength={0.2}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
                                >
                                    Get In Touch
                                </motion.button>
                            </MagneticButton>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6 text-white" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : -20,
                    pointerEvents: isOpen ? "auto" : "none",
                }}
                transition={{ duration: 0.3 }}
                className="fixed top-[73px] left-0 right-0 z-40 lg:hidden"
            >
                <div className="mx-4 mt-2 p-4 bg-[#0a0908]/95 backdrop-blur-2xl rounded-2xl border border-purple-500/20 shadow-2xl">
                    <div className="flex flex-col gap-2">
                        {navItems.map((item, index) => {
                            const isActive = activeSection === item.href.replace("#", "");
                            return (
                                <motion.button
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{
                                        opacity: isOpen ? 1 : 0,
                                        x: isOpen ? 0 : -20,
                                    }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`relative px-4 py-3 rounded-lg text-left font-medium transition-all ${
                                        isActive
                                            ? "bg-white/10 text-white border border-purple-500/30"
                                            : "text-white/60 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    {item.name}
                                </motion.button>
                            );
                        })}
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: isOpen ? 1 : 0,
                                x: isOpen ? 0 : -20,
                            }}
                            transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                            className="mt-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg shadow-purple-500/25"
                        >
                            Get In Touch
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
                />
            )}
        </>
    );
}
