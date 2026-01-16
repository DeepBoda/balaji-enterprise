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
        <section ref={container} className="py-32 bg-[#FFFBF0] overflow-hidden relative">
            {/* Background */}
            <div className="absolute inset-0 opacity-10 pattern-dots" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">
                        Daily Rituals
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-amber-950 leading-tight">
                        More Than Just <br />
                        <span className="relative inline-block text-amber-500 italic">
                            Sweetness.
                            <svg className="absolute w-[120%] h-auto -bottom-4 left-0 -z-10 text-amber-500/30" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00025 15.0002C30.5002 5.50024 50.0002 -3.49976 82.0002 9.00024C122 24.6252 165.5 13.5 198 2.00024" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-amber-900/70 text-lg leading-relaxed max-w-md">
                        From your morning lemon water to a midnight face mask, our honey is a versatile superfood that enhances your wellness routine.
                    </p>

                    <ul className="space-y-8 pt-8">
                        {[
                            { title: "Morning Boost", desc: "Warm water + Lemon + Honey", img: "/images/tea.png" },
                            { title: "Skincare", desc: "Natural humectant for glowing skin", img: "/images/mask.png" },
                            { title: "Sweet Sleep", desc: "A spoonful before bed aids recovery", img: "/images/spoon.png" }
                        ].map((item, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="flex items-center gap-6 border-b border-amber-900/10 pb-6 last:border-0"
                            >
                                <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border border-amber-900/10">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-amber-900 font-bold text-lg">{item.title}</h4>
                                    <p className="text-amber-700/60 text-sm font-medium">{item.desc}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className="relative h-[600px] hidden md:block">
                    {/* Parallax Images */}
                    <motion.div style={{ y: y1 }} className="absolute top-10 right-10 w-72 h-96 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 z-10 rotate-3">
                        <Image
                            src="/images/tea.png"
                            alt="Morning Ritual"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </motion.div>

                    <motion.div style={{ y: y2 }} className="absolute bottom-10 left-10 w-64 h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 z-20 -rotate-3">
                        <Image
                            src="/images/mask.png"
                            alt="Skincare Ritual"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
