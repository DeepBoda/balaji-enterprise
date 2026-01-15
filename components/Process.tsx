"use client";

import { motion } from "framer-motion";
import { Flower, Droplets, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: Flower,
        title: "Nectar Collection",
        desc: "Bees gather nectar from wild, pesticide-free blooms.",
        color: "bg-pink-100 text-pink-600",
    },
    {
        icon: Droplets,
        title: "Cold Extraction",
        desc: "Honey is extracted without heat to preserve enzymes.",
        color: "bg-amber-100 text-amber-600",
    },
    {
        icon: CheckCircle,
        title: "Quality Testing",
        desc: "Every batch is rigorously tested for purity.",
        color: "bg-green-100 text-green-600",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute inset-0 bg-honey-100 rounded-full blur-3xl opacity-50" />
                        <div className="relative bg-honey-50 rounded-[3rem] p-8 md:p-12 border border-honey-100">
                            <h3 className="text-3xl font-serif font-bold text-honey-950 mb-8">Our Promise</h3>
                            <div className="space-y-8">
                                {steps.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.2 }}
                                        viewport={{ once: true }}
                                        className="flex gap-4"
                                    >
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${step.color}`}>
                                            <step.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-honey-900 text-lg">{step.title}</h4>
                                            <p className="text-honey-900/60 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <span className="text-honey-600 font-medium tracking-wider uppercase text-sm">
                            From Hive to Jar
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-honey-950 mt-3 mb-6">
                            Pure. Ethical. <br />Sustainable.
                        </h2>
                        <p className="text-lg text-honey-900/70 mb-8 leading-relaxed">
                            We believe nature knows best. That's why we intervene as little as possible.
                            Our beekeepers follow traditional methods that prioritize the health of the hive
                            over mass production.
                        </p>
                        <div className="flex gap-12">
                            <div>
                                <p className="text-4xl font-serif font-bold text-honey-500">100%</p>
                                <p className="text-honey-900/60 mt-1 uppercase text-sm tracking-wide">Raw</p>
                            </div>
                            <div>
                                <p className="text-4xl font-serif font-bold text-honey-500">0%</p>
                                <p className="text-honey-900/60 mt-1 uppercase text-sm tracking-wide">Additives</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
