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
            <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply filter contrast-120 brightness-110">
                <svg className="w-full h-full">
                    <filter id="staticGrain">
                        <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#staticGrain)" />
                </svg>
            </div>

            {/* 2. Floating Ambient Orbs (The "Honey Mist") */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-amber-300/10 rounded-full blur-[120px]"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-orange-300/10 rounded-full blur-[100px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
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
