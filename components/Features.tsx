"use client";

import { Leaf, ShieldCheck, Truck, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { SpotlightBorder } from "@/components/ui/SpotlightBorder";

const features = [
    {
        icon: Leaf,
        title: "100% Pure & Organic",
        desc: "Sourced directly from deep forests, untouched by chemicals.",
    },
    {
        icon: ShieldCheck,
        title: "Lab Tested Quality",
        desc: "Every batch is tested for purity and authenticity.",
    },
    {
        icon: Heart,
        title: "Cruelty Free",
        desc: "Ethical harvesting that prioritizes the health of the bees.",
    },
    {
        icon: Truck,
        title: "Fast & Safe Delivery",
        desc: "Secure packaging ensuring your liquid gold arrives safely.",
    },
];

import HoneyDrip from "@/components/ui/HoneyDrip";

export default function Features() {
    return (
        <section className="relative bg-amber-50 overflow-hidden">
            <HoneyDrip className="absolute top-0 left-0 w-full z-10 text-white fill-white" />

            <div className="py-24 container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                        Our Promise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-8">
                        Why Choose <span className="relative inline-block text-amber-500 italic">
                            Balaji
                            <svg className="absolute w-[120%] h-auto -bottom-4 left-0 -z-10 text-amber-500/30" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00025 15.0002C30.5002 5.50024 50.0002 -3.49976 82.0002 9.00024C122 24.6252 165.5 13.5 198 2.00024" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>?
                    </h2>
                    <p className="text-amber-900/70 text-lg">
                        We don&apos;t just sell honey; we deliver a promise of purity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <SpotlightBorder className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group border border-amber-100/50 h-full">
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                    <feature.icon className="w-8 h-8 text-amber-600 drop-shadow-sm" />
                                </div>
                                <h3 className="text-xl font-bold text-amber-950 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-amber-900/60 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </SpotlightBorder>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
