"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Soft physics for the tilt
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    // Holographic shine gradient position
    const shineX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const shineY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseXWithIn = e.clientX - rect.left;
        const mouseYWithIn = e.clientY - rect.top;

        const xPct = mouseXWithIn / width - 0.5;
        const yPct = mouseYWithIn / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
                willChange: "transform", // Hint browser for calc
            }}
className = {`relative transform-gpu transition-all duration-200 ease-out ${className}`}
        >
    <div
        style={{ transform: "translateZ(50px)" }}
        className="relative z-10"
    >
        {children}
    </div>

{/* Holographic Shine Layer */ }
<motion.div
    className="absolute inset-0 z-20 pointer-events-none rounded-xl"
    style={{
        background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.4), transparent 50%)`,
        mixBlendMode: "overlay",
    }}
/>
        </motion.div >
    );
}
