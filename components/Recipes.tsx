"use client";

import { motion } from "framer-motion";
import { Coffee, Sparkles, Sun } from "lucide-react";
import Image from "next/image";

const recipes = [
    {
        title: "Golden Milk Latte",
        desc: "An ancient Ayurvedic remedy to boost immunity and calm the mind before sleep.",
        ingredients: ["1 cup Almond Milk", "1 tsp Turmeric", "1 tbsp Balaji Honey", "Pinch of Black Pepper"],
        icon: Coffee,
        color: "bg-amber-100",
        delay: 0
    },
    {
        title: "Morning Elixir",
        desc: "Kickstart your metabolism and digestion with this simple, powerful morning ritual.",
        ingredients: ["Warm Water (not hot)", "1/2 Lemon Squeezed", "1 tbsp Balaji Honey", "Ginger Slice"],
        icon: Sun,
        color: "bg-orange-100",
        delay: 0.1
    },
    {
        title: "Radiant Face Mask",
        desc: "Nature's best moisturizer. Hydrates, heals, and gives your skin a glass-like glow.",
        ingredients: ["1 tbsp Balaji Honey", "1 tsp Yogurt", "1/2 tsp Turmeric"],
        icon: Sparkles,
        color: "bg-yellow-100",
        delay: 0.2
    }
];

export default function Recipes() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                        Unlock the Magic
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-950">
                        Rituals & Recipes
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {recipes.map((recipe, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: recipe.delay, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-amber-50 hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 ${recipe.color} rounded-2xl flex items-center justify-center mb-6 text-amber-900 group-hover:scale-110 transition-transform`}>
                                <recipe.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-amber-950 mb-3 group-hover:text-amber-600 transition-colors">
                                {recipe.title}
                            </h3>
                            <p className="text-amber-900/60 mb-6 leading-relaxed">
                                {recipe.desc}
                            </p>

                            <div className="bg-amber-50/50 rounded-xl p-4">
                                <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-3">Ingredients</h4>
                                <ul className="space-y-2">
                                    {recipe.ingredients.map((ing, i) => (
                                        <li key={i} className="text-sm text-amber-900/70 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                            {ing}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
