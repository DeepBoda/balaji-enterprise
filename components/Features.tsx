"use client";

import { Leaf, ShieldCheck, Truck, Heart } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Features() {
    return (
        <section className="py-24 bg-amber-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-4">
                        Why Choose Balaji?
                    </h2>
                    <p className="text-amber-900/70 text-lg">
                        We don't just sell honey; we deliver a promise of purity.
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
                            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group"
                        >
                            <div className="w-16 h-16 mx-auto bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-amber-950 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-amber-900/60 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
