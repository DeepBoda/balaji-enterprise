"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function HeroParallax() {
    const { scrollY } = useScroll();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse physics
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse coordinates (-1 to 1)
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth) * 2 - 1;
            const y = (e.clientY / innerHeight) * 2 - 1;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Transform layers based on mouse + scroll
    const layer1X = useTransform(smoothMouseX, [-1, 1], [-20, 20]);
    const layer1Y = useTransform(smoothMouseY, [-1, 1], [-20, 20]);
    const layer2X = useTransform(smoothMouseX, [-1, 1], [30, -30]);
    const layer2Y = useTransform(smoothMouseY, [-1, 1], [30, -30]);
    const scrollRotate = useTransform(scrollY, [0, 500], [0, 45]);

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Layer 1: Blurred Honeycombs (Background) */}
            <motion.div
                style={{ x: layer1X, y: layer1Y }}
                className="absolute top-[10%] left-[5%] w-32 h-32 opacity-20 blur-[2px]"
            >
                <Hexagon size={120} color="#fbbf24" rotate={15} />
            </motion.div>

            <motion.div
                style={{ x: layer1X, y: layer1Y }}
                className="absolute bottom-[20%] right-[10%] w-24 h-24 opacity-10 blur-[3px]"
            >
                <Hexagon size={90} color="#d97706" rotate={-10} />
            </motion.div>

            {/* Layer 2: Sharp Particles (Foreground) */}
            <motion.div
                style={{ x: layer2X, y: layer2Y, rotate: scrollRotate }}
                className="absolute top-[40%] left-[45%] w-16 h-16 opacity-30 mix-blend-overlay"
            >
                <Hexagon size={60} color="#fff" rotate={0} />
            </motion.div>

            <motion.div
                style={{ x: layer2X, y: layer2Y }}
                className="absolute top-[15%] right-[25%] w-8 h-8 opacity-40"
            >
                <div className="w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.6)] animate-pulse" />
            </motion.div>
        </div>
    );
}

function Hexagon({ size, color, rotate }: { size: number; color: string, rotate: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <path
                d="M50 10 L85 30 V70 L50 90 L15 70 V30 Z"
                fill="none"
                stroke={color}
                strokeWidth="2"
            />
        </svg>
    );
}
