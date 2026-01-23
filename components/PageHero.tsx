"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface PageHeroProps {
    title: string;
    subtitle: string;
    image: string; // URL of the background image
    overlayOpacity?: number;
}

export default function PageHero({ title, subtitle, image, overlayOpacity = 0.4 }: PageHeroProps) {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={ref} className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <div className="relative w-full h-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>
            </motion.div>

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-amber-950 z-10"
                style={{ opacity: overlayOpacity }}
            />
            {/* Grain Texture */}
            <div className="absolute inset-0 opacity-20 z-10 pointer-events-none texture-grain mix-blend-overlay" />


            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 container mx-auto px-4 md:px-6 text-center text-white"
            >
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="inline-block py-1 px-3 border border-white/20 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase mb-6">
                        Balaji Enterprise
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 tracking-tight"
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    {subtitle}
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-50" />
            </motion.div>
        </section>
    );
}
