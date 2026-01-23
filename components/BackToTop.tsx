"use client";

import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsVisible(latest > 400);
        });
    }, [scrollY]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="fixed bottom-8 right-8 z-[60] group focus:outline-none"
                >
                    {/* 
            MASTERPIECE COMPONENT: "The Golden Bee"
            A minimalist crystal glass hexagon containing molten liquid gold
            that fills up on hover, with a tiny "firefly" bee orbiting.
          */}

                    {/* Main Container: 88px Hexagon with Floating Physics */}
                    <div className="relative w-28 h-28 flex items-center justify-center filter drop-shadow-[0_15px_35px_rgba(251,191,36,0.25)]">

                        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                            <defs>
                                {/* 1. Crystal Edge Gradient (Prismatic) */}
                                <linearGradient id="crystalEdge" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                                    <stop offset="20%" stopColor="rgba(255,255,255,0.4)" />
                                    <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
                                    <stop offset="80%" stopColor="rgba(255,255,255,0.4)" />
                                    <stop offset="100%" stopColor="rgba(255,255,255,0.8)" />
                                </linearGradient>

                                {/* 2. HD Molten Gold (Metallic/Reflective) */}
                                <linearGradient id="moltenGoldHD" x1="0.3" y1="0" x2="0.7" y2="1">
                                    <stop offset="0%" stopColor="#fffbeb" stopOpacity="1" />      {/* Highlight */}
                                    <stop offset="15%" stopColor="#fbbf24" />    {/* Gold */}
                                    <stop offset="50%" stopColor="#d97706" />    {/* Amber */}
                                    <stop offset="100%" stopColor="#78350f" />   {/* Deep details */}
                                </linearGradient>

                                {/* 3. Surface Specular Reflection */}
                                <linearGradient id="surfaceShine" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                                </linearGradient>

                                {/* Hexagon Clip Path */}
                                <clipPath id="hexClip">
                                    <path d="M50 12 L83 31 V69 L50 88 L17 69 V31 Z" />
                                </clipPath>
                            </defs>

                            {/* --- 1. The Crystal Shell (Double Border for depth) --- */}
                            <g className="transition-all duration-500 ease-out">
                                {/* Outer Prism Rim */}
                                <path
                                    d="M50 8 L87 29 V71 L50 92 L13 71 V29 Z"
                                    fill="rgba(255, 255, 255, 0.03)"
                                    className="backdrop-blur-[2px]"
                                    stroke="url(#crystalEdge)"
                                    strokeWidth="1"
                                    strokeOpacity="0.8"
                                />
                                {/* Inner Glass Rim */}
                                <path
                                    d="M50 12 L83 31 V69 L50 88 L17 69 V31 Z"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="0.5"
                                />
                            </g>

                            {/* --- 2. The Molten Core (Masked) --- */}
                            <g clipPath="url(#hexClip)">
                                {/* Dark Empty Glass State */}
                                <rect x="0" y="0" width="100" height="100" fill="rgba(20, 10, 5, 0.3)" />

                                {/* The Liquid Gold */}
                                <motion.rect
                                    x="0"
                                    y="100"
                                    width="100"
                                    height="120"
                                    fill="url(#moltenGoldHD)"
                                    initial={{ y: 92 }}
                                    animate={{ y: isHovered ? 0 : 92 }}
                                    transition={{
                                        duration: 1.4,
                                        ease: [0.19, 1, 0.22, 1] // Luxurious ultra-smooth easing
                                    }}
                                />

                                {/* Surface Gloss Line (The shimmer on top of the liquid) */}
                                <motion.ellipse
                                    cx="50" cy="50" rx="40" ry="15"
                                    fill="url(#surfaceShine)"
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{
                                        y: isHovered ? -50 : 50,
                                        opacity: isHovered ? [0, 1, 0] : 0
                                    }}
                                    transition={{ duration: 1.4, ease: "easeOut" }}
                                />
                            </g>

                            {/* --- 3. The Chevron (Carved into the Gold) --- */}
                            <foreignObject x="30" y="30" width="40" height="40" className="pointer-events-none">
                                <div className="w-full h-full flex items-center justify-center">
                                    <ChevronUp
                                        size={36}
                                        strokeWidth={3}
                                        className={`transition-all duration-700 ${isHovered ? "text-amber-950 -translate-y-1 scale-110" : "text-white/80 translate-y-0"}`}
                                        style={{ filter: isHovered ? "drop-shadow(0 1px 0 rgba(255,255,255,0.4))" : "" }}
                                    />
                                </div>
                            </foreignObject>
                        </svg>

                        {/* --- 4. The 'Firefly' Bee (Orbiting Particle) --- */}
                        {isHovered && (
                            <motion.div
                                className="absolute inset-0 z-10 pointer-events-none"
                                initial={{ rotate: 90 }}
                                animate={{ rotate: 450 }}
                                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                            >
                                <motion.div
                                    className="absolute -top-2 left-1/2 w-4 h-4 bg-white rounded-full blur-[1px]"
                                    style={{ boxShadow: "0 0 15px 2px rgba(251, 191, 36, 0.8)" }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                />
                            </motion.div>
                        )}

                        {/* Ambient Light Reflection (Bottom) */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-amber-400/30 blur-md rounded-full" />

                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
