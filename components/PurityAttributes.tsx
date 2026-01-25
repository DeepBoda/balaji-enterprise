"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileCheck, Droplets, Microscope } from "lucide-react";

const attributes = [
    {
        label: "Authenticity",
        value: "NMR Tested",
        sub: "Nuclear Magnetic Resonance verified",
        icon: FileCheck
    },
    {
        label: "Purity",
        value: "100% Raw",
        sub: "Unfiltered & Unpasteurized",
        icon: Droplets
    },
    {
        label: "Potency",
        value: "High Pollen",
        sub: "Rich in natural enzymes",
        icon: Microscope
    },
    {
        label: "Safety",
        value: "Antibiotic Free",
        sub: "Zero chemical residues",
        icon: CheckCircle2
    }
];

export default function PurityAttributes() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block"
                        >
                            Science of Nature
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-8"
                        >
                            Verified by Science. <br />
                            <span className="text-amber-500 italic">Trusted by Families.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-amber-900/60 leading-relaxed mb-12 max-w-lg"
                        >
                            We don't rely on trust alone. Every batch of Balaji honey undergoes rigorous NMR testing to ensure it meets the highest global standards of purity and potency.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {attributes.map((attr, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-amber-50/50 transition-colors border border-transparent hover:border-amber-100"
                                >
                                    <div className="p-3 bg-amber-100/50 rounded-full text-amber-700">
                                        <attr.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-950 text-lg">{attr.value}</h4>
                                        <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">{attr.label}</p>
                                        <p className="text-sm text-amber-900/60">{attr.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual Certification Hologram */}
                    <div className="relative h-[600px] bg-amber-50 rounded-[40px] overflow-hidden flex items-center justify-center p-8 group">
                        {/* Abstract "Lab" Visual */}
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(251,191,36,0.4),transparent_70%)]" />
                        <div className="absolute inset-0 texture-grain opacity-30" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 w-full max-w-sm bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-2xl"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-amber-900/50">Report ID</p>
                                    <p className="font-mono text-amber-900">#BE-2024-883</p>
                                </div>
                                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xs">A+</div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2 font-bold text-amber-900">
                                        <span>Pollen Count</span>
                                        <span>98%</span>
                                    </div>
                                    <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "98%" }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-amber-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2 font-bold text-amber-900">
                                        <span>Moisture Content</span>
                                        <span>18%</span>
                                    </div>
                                    <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "18%" }}
                                            transition={{ duration: 1, delay: 0.7 }}
                                            className="h-full bg-amber-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2 font-bold text-amber-900">
                                        <span>Enzyme Activity</span>
                                        <span>High</span>
                                    </div>
                                    <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "95%" }}
                                            transition={{ duration: 1, delay: 0.9 }}
                                            className="h-full bg-amber-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-amber-900/10 flex items-center gap-4">
                                <div className="flex-1">
                                    <p className="text-xs text-amber-900/50">Verified by</p>
                                    <p className="font-serif italic text-amber-900">Intertek Labs</p>
                                </div>
                                <div className="w-16 h-16 border-2 border-amber-500/20 rounded-full flex items-center justify-center">
                                    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6 text-amber-600" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
