"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#FFFBF0]">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-200/30 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/4" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="space-y-8 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-sm font-semibold tracking-wide">
                                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                                #1 Rated Organic Honey
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-amber-950 leading-[1.1] tracking-tight">
                            Nature's Golden <br />
                            <span className="relative inline-block text-amber-600">
                                Elixir
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                            <span className="text-amber-950"> For You.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-amber-900/70 max-w-lg leading-relaxed"
                    >
                        Sourced from the wildest forests. 100% raw, unfiltered, and ethically harvested to bring you the purest taste of nature.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300">
                            Shop Now - ₹350
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 border-amber-200 hover:bg-amber-50 hover:border-amber-300 text-amber-900">
                            View Benefits
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pt-8 flex items-center gap-8 border-t border-amber-900/10"
                    >
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-green-100 rounded-lg text-green-700">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium text-amber-900">Certified Organic</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                                <Truck className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium text-amber-900">Free Shipping &gt; ₹999</span>
                        </div>
                    </motion.div>
                </div>

                {/* Visual Content */}
                <div className="relative order-1 lg:order-2 flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full max-w-[600px] aspect-square"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse" />

                        {/* Main Image Container */}
                        <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden shadow-2xl shadow-amber-900/20 border-4 border-white/50 transform rotate-2 hover:rotate-0 transition-transform duration-700">
                            <Image
                                src="/images/Gemini_Generated_Image_amxwhpamxwhpamxw.png"
                                alt="Premium Honey Jar"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Badge 1 */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-amber-100 z-20 max-w-[150px]"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-2xl">🍯</span>
                                <span className="font-bold text-amber-950">Pure</span>
                            </div>
                            <p className="text-xs text-amber-700 font-medium">No added sugar or preservatives.</p>
                        </motion.div>

                        {/* Floating Badge 2 */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-amber-100 z-20"
                        >
                            <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                4.9/5 Rating
                            </p>
                            <p className="text-xs text-amber-600 mt-0.5">from 10k+ happy customers</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
