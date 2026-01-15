"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Priya Sharma",
        role: "Home Baker",
        content: "The best honey I've used for my cakes. The flavor is distinct and clearly pure. Highly recommended!",
        avatar: "PS",
    },
    {
        name: "Rahul Verma",
        role: "Fitness Enthusiast",
        content: "I take a spoon every morning. It's a game changer for my energy levels. Genuine product.",
        avatar: "RV",
    },
    {
        name: "Anita Desai",
        role: "Mother of two",
        content: "My kids love it on their toast. I'm happy knowing it's 100% organic and safe for them.",
        avatar: "AD",
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">
                        Community Love
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mt-3">
                        What Our Customers Say
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-amber-50/50 p-8 rounded-3xl border border-amber-100 relative"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-amber-900/80 text-lg mb-8 italic leading-relaxed">
                                "{review.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-800">
                                    {review.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-amber-950">{review.name}</h4>
                                    <p className="text-sm text-amber-700">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
