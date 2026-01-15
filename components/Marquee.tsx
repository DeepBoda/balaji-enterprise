"use client";

import { motion } from "framer-motion";

const MarqueeContent = () => (
    <div className="flex items-center gap-12 px-6">
        <span className="text-4xl md:text-6xl font-serif font-bold text-amber-950/20 uppercase tracking-widest whitespace-nowrap">
            100% Organic
        </span>
        <span className="text-2xl">🍯</span>
        <span className="text-4xl md:text-6xl font-serif font-bold text-amber-950/20 uppercase tracking-widest whitespace-nowrap">
            Raw & Unfiltered
        </span>
        <span className="text-2xl">🐝</span>
        <span className="text-4xl md:text-6xl font-serif font-bold text-amber-950/20 uppercase tracking-widest whitespace-nowrap">
            Ethically Sourced
        </span>
        <span className="text-2xl">🌿</span>
        <span className="text-4xl md:text-6xl font-serif font-bold text-amber-950/20 uppercase tracking-widest whitespace-nowrap">
            Pure Nature
        </span>
        <span className="text-2xl">✨</span>
    </div>
);

export default function Marquee() {
    return (
        <section className="py-12 bg-[#FFFBF0] overflow-hidden border-y border-amber-900/5">
            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex"
                >
                    <MarqueeContent />
                    <MarqueeContent />
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex"
                >
                    <MarqueeContent />
                    <MarqueeContent />
                </motion.div>
            </div>
        </section>
    );
}
