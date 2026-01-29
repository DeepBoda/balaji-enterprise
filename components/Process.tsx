"use client";

import { motion } from "framer-motion";
import { Droplets, Flower, ShieldCheck } from "lucide-react";
import { variants, duration, easing } from "@/lib/motion";
import { cn } from "@/lib/utils";

const steps = [
    {
        icon: Flower,
        title: "Ethical Harvesting",
        desc: "Sourced from deep forests where bees forage on medicinal wildflowers.",
        color: "bg-amber-100 text-amber-700",
        delay: 0
    },
    {
        icon: Droplets,
        title: "Cold Extraction",
        desc: "Never heated or pasteurized. We preserve every enzyme and nutrient.",
        color: "bg-amber-200 text-amber-800",
        delay: 0.2
    },
    {
        icon: ShieldCheck,
        title: "Purity Tested",
        desc: "Every batch is lab-tested to ensure zero adulteration or antibiotics.",
        color: "bg-amber-300 text-amber-900",
        delay: 0.4
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            animate: { opacity: 1, y: 0, transition: { duration: duration.normal, ease: easing.smoothIn } }
                        }}
                    >
                        <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                            Our Method
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-8">
                            From <span className="relative inline-block text-amber-500 italic">
                                Hive
                                <motion.svg
                                    className="absolute w-[120%] h-auto -bottom-4 left-0 -z-10 text-amber-500/30"
                                    viewBox="0 0 200 20"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                                >
                                    <path d="M2.00025 15.0002C30.5002 5.50024 50.0002 -3.49976 82.0002 9.00024C122 24.6252 165.5 13.5 198 2.00024" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                </motion.svg>
                            </span> to Home
                        </h2>
                        <p className="text-amber-900/60 text-lg leading-relaxed">
                            No spam, ever. Just nature&apos;s purity. We simply steward it from nature to you,
                            ensuring nothing is added and nothing is taken away.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    {/* Self-Drawing Animated Wave Line */}
                    <svg className="hidden md:block absolute top-[2rem] left-0 w-full h-24 overflow-visible -z-10" viewBox="0 0 1200 100" preserveAspectRatio="none">
                        <motion.path
                            d="M0,50 C200,50 300,20 400,20 S500,50 600,50 S700,80 800,80 S1000,50 1200,50"
                            fill="none"
                            stroke="#fcd34d" // amber-300
                            strokeWidth="2"
                            strokeDasharray="10 10"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                        />
                        {/* Moving Particle on Path */}
                        <motion.circle
                            r="4"
                            fill="#d97706" // amber-600
                            initial={{ offsetDistance: "0%" }}
                            animate={{ offsetDistance: "100%" }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                offsetPath: 'path("M0,50 C200,50 300,20 400,20 S500,50 600,50 S700,80 800,80 S1000,50 1200,50")',
                                display: "block"
                            }}
                            className="motion-safe:block motion-reduce:hidden"
                        />
                    </svg>

                    <div className="grid md:grid-cols-3 gap-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    initial: { opacity: 0, y: 40 },
                                    animate: { opacity: 1, y: 0, transition: { duration: duration.normal, delay: step.delay, ease: easing.smoothIn } }
                                }}
                                className="relative group"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                                        transition={{ duration: 0.4 }}
                                        className={cn(
                                            "w-20 h-20 rounded-full flex items-center justify-center mb-8 relative z-10 ring-8 ring-white shadow-lg transition-colors duration-300",
                                            step.color
                                        )}
                                    >
                                        <step.icon className="w-8 h-8" />
                                    </motion.div>
                                    <h3 className="text-2xl font-serif font-bold text-amber-950 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-amber-900/60 leading-relaxed px-4">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Additional Classic Touch - Signature/Seal area */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-24 text-center"
                >
                    <div className="inline-block p-1 border-t border-b border-amber-900/10">
                        <p className="font-serif italic text-2xl text-amber-900/80 px-8 py-4 relative inline-block">
                            &quot;Pureness you can taste in every drop.&quot;
                            <motion.svg
                                className="absolute w-[80%] h-auto -bottom-2 left-1/2 -translate-x-1/2 -z-10 text-amber-500/20"
                                viewBox="0 0 200 20"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 1 }}
                            >
                                <path d="M2.00025 15.0002C30.5002 5.50024 50.0002 -3.49976 82.0002 9.00024C122 24.6252 165.5 13.5 198 2.00024" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </motion.svg>
                        </p>
                    </div>
                </motion.div>

            </div>
        </section >
    );
}
