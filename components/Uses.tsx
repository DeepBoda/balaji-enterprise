"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Uses() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={container} className="py-32 bg-amber-950 overflow-hidden relative">
            {/* Background */}
            <div className="absolute inset-0 opacity-10 pattern-dots" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">
                        Daily Rituals
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-amber-50 leading-tight">
                        More Than Just <br />
                        <span className="text-amber-400">Sweetness.</span>
                    </h2>
                    <p className="text-amber-200/60 text-lg leading-relaxed max-w-md">
                        From your morning lemon water to a midnight face mask, our honey is a versatile superfood that enhances your wellness routine.
                    </p>

                    <ul className="space-y-6 pt-4">
                        {[
                            { title: "Morning Boost", desc: "Warm water + Lemon + Honey" },
                            { title: "Skincare", desc: "Natural humectant for glowing skin" },
                            { title: "Sweet Sleep", desc: "A spoonful before bed aids recovery" }
                        ].map((item, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="flex items-start gap-4 border-b border-amber-900/30 pb-4"
                            >
                                <span className="text-2xl">✨</span>
                                <div>
                                    <h4 className="text-amber-100 font-bold">{item.title}</h4>
                                    <p className="text-amber-200/40 text-sm">{item.desc}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className="relative h-[600px] hidden md:block">
                    {/* Parallax Images (Placeholders using colors as I can't generate 3 images quickly, reusing generic or colors) */}
                    <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-64 h-80 bg-stone-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-900/20 z-10">
                        <div className="w-full h-full bg-cover bg-center bg-[#FFFBF0] flex items-center justify-center">
                            <span className="text-6xl">🍵</span>
                        </div>
                    </motion.div>

                    <motion.div style={{ y: y2 }} className="absolute bottom-0 left-10 w-64 h-80 bg-amber-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-900/20 z-20">
                        <div className="w-full h-full bg-cover bg-center bg-[#FFFBF0] flex items-center justify-center">
                            <span className="text-6xl">🧖‍♀️</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
