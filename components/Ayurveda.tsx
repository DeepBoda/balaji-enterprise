"use client";

import { motion } from "framer-motion";
import { Shield, Zap, HeartPulse } from "lucide-react";

const benefits = [
    {
        title: "Immunity Shield",
        desc: "Rich in antioxidants and antibacterial properties, raw honey is your first line of defense against seasonal bugs.",
        icon: Shield
    },
    {
        title: "Instant Energy",
        desc: "A natural source of carbohydrates provides strength and energy to our bodies, perfect for pre-workout boosts.",
        icon: Zap
    },
    {
        title: "Heart Health",
        desc: "Studies suggest honey may improve cholesterol levels and lower triglycerides, supporting a healthy heart.",
        icon: HeartPulse
    }
];

export default function Ayurveda() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-100/30 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-amber-950 mb-6 leading-tight">
                            Ancient Wisdom, <br />
                            <span className="text-amber-600">Modern Science.</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-amber-900/70 leading-relaxed">
                            For centuries, Ayurveda has revered honey ("Madhu") as a yogavahi—a bio-enhancer that penetrates deep tissues. Today, modern science backs these claims with proven nutritional data.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {benefits.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white shadow-sm flex flex-col items-center text-center hover:bg-white transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-amber-500/30">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-amber-950 mb-3">{item.title}</h3>
                            <p className="text-amber-900/60 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
