"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { variants, duration, easing } from "@/lib/motion";
import { SpotlightBorder } from "@/components/ui/SpotlightBorder";

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
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0, transition: { duration: duration.normal, ease: easing.smoothIn } }
                        }}
                    >
                        <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                            Community Love
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-8">
                            What Our <span className="relative inline-block text-amber-500 italic">
                                Customers
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
                            </span> Say
                        </h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                initial: { opacity: 0, y: 40, scale: 0.95 },
                                animate: { opacity: 1, y: 0, scale: 1, transition: { duration: duration.normal, delay: idx * 0.1, ease: easing.smoothIn } }
                            }}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            className="h-full will-change-transform"
                        >
                            <SpotlightBorder className="bg-amber-50/50 p-8 rounded-3xl border border-amber-100 relative shadow-sm hover:shadow-xl hover:shadow-amber-900/5 transition-shadow duration-300 h-full">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="text-amber-900/80 text-lg mb-8 italic leading-relaxed">
                                    &quot;{review.content}&quot;
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
                            </SpotlightBorder>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
