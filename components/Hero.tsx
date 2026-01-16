"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-[#FFFBF0]">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wide uppercase">
                                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                                #1 Rated Organic Honey
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-amber-950 leading-[1.1] tracking-tight">
                            Nature's Golden <br />
                            <span className="text-amber-600 italic relative">
                                Elixir
                            </span>
                            <span className="text-amber-950"> For You.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg text-amber-900/70 max-w-lg leading-relaxed font-light"
                    >
                        Sourced from the wildest forests. 100% raw, unfiltered, and ethically harvested to bring you the purest taste of nature.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-4 pt-2"
                    >
                        <Magnetic>
                            <Button size="lg" className="h-12 px-8 text-sm font-bold rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 bg-amber-900 hover:bg-amber-800 text-white">
                                Shop Now - ₹350
                            </Button>
                        </Magnetic>
                        <Magnetic>
                            <Button variant="outline" size="lg" className="h-12 px-8 text-sm font-bold rounded-full border-2 border-amber-200 hover:bg-amber-50 hover:border-amber-300 text-amber-900">
                                View Benefits
                            </Button>
                        </Magnetic>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pt-8 flex items-center gap-8 border-t border-amber-900/10"
                    >
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-amber-100 rounded-lg text-amber-700">
                                <ShieldCheck className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold text-amber-900 uppercase tracking-wide">Certified Organic</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-stone-100 rounded-lg text-stone-700">
                                <Truck className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold text-amber-900 uppercase tracking-wide">Free Shipping &gt; ₹999</span>
                        </div>
                    </motion.div>
                </div>

                {/* Visual Content - Reduced Size */}
                <div className="relative flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full max-w-[420px] aspect-square"
                    >
                        {/* Main Image Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            animate={{ opacity: 1, scale: 1, rotate: [2, 0, 2], y: [0, -20, 0] }}
                            transition={{
                                opacity: { duration: 0.8 },
                                scale: { duration: 0.8 },
                                rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-amber-900/10 border-4 border-white"
                        >
                            <Image
                                src="/images/hero_branded.png"
                                alt="Premium Nature Honey Jar"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>

                        {/* Floating Badge 1 - Repositioned */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-amber-50 z-20"
                        >
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="p-1 bg-amber-50 rounded-full text-amber-600">
                                    <ShieldCheck size={16} />
                                </span>
                                <span className="font-bold text-amber-950 text-sm">Pure</span>
                            </div>
                        </motion.div>

                        {/* Floating Badge 2 - Repositioned */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-2 bg-white/95 backdrop-blur p-3 rounded-xl shadow-lg border border-amber-50 z-20"
                        >
                            <p className="text-sm font-bold text-amber-950 flex items-center gap-1.5">
                                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                4.9 Rating
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
