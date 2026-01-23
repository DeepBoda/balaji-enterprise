"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FluidBackground() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#FFFBF0]">
            {/* 1. Global Noise Overlay (Static Grain) */}
            {/* 1. Global Noise Overlay (Static CSS Grain) */}
            <div
                className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                    transform: 'translateZ(0)' // GPU Hint
                }}
            />

            {/* 2. Floating Ambient Orbs (The "Honey Mist") - Optimized Blur */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-amber-300/10 rounded-full blur-[60px]"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-orange-300/10 rounded-full blur-[50px]"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            {/* 3. Golden Flecks (Subtle Sparkle) */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-amber-400 rounded-full blur-[1px] animate-pulse" />
                <div className="absolute top-[60%] right-[25%] w-1.5 h-1.5 bg-yellow-500 rounded-full blur-[1px] animate-pulse delay-1000" />
                <div className="absolute bottom-[20%] left-[40%] w-1 h-1 bg-orange-400 rounded-full blur-[1px] animate-pulse delay-500" />
            </div>
        </div>
    );
}
