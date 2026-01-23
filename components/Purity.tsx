"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function Purity() {
    return (
        <section className="py-24 bg-amber-50 relative overflow-hidden">
            {/* Honey Texture */}
            <div className="absolute inset-0 opacity-10 pattern-grid-lg" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-amber-100 relative overflow-hidden">
                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                                Did you know?
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-6">
                                If it crystallizes, <br />
                                <span className="text-amber-600">it's real.</span>
                            </h2>
                            <p className="text-amber-900/70 leading-relaxed mb-6">
                                Many people mistake crystallized honey for "spoiled" or "sugared" honey. In reality, <strong className="text-amber-800">crystallization is the ultimate sign of purity.</strong>
                            </p>
                            <p className="text-amber-900/70 leading-relaxed">
                                Processed honey is heated and filtered to remain liquid forever, stripping away pollen and enzymes. Our honey is raw, so it naturally solidifies over time. To liquefy, simply place the jar in warm water.
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {[
                                "Contains natural pollen and wax",
                                "Never heated above hive temperature",
                                "Free from antibiotics and syrups",
                                "Packed with natural enzymes"
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-4 bg-amber-50 p-4 rounded-xl border border-amber-100"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                                    <span className="text-amber-900 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
