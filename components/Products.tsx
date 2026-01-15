"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingBag, Star, TrendingUp } from "lucide-react";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Wildflower Raw Honey",
        price: "₹350",
        rating: 5,
        image: "/images/product_branded.png",
        badge: "Bestseller",
        featured: true,
    },
    {
        id: 2,
        name: "Himalayan Forest Honey",
        price: "₹350",
        rating: 5,
        image: "/images/product_branded.png",
        badge: "Trending",
    },
    {
        id: 3,
        name: "Spiced Honey Infusion",
        price: "₹350",
        rating: 4,
        image: "/images/product_branded.png",
        badge: "Limited Edition",
    },
    {
        id: 4,
        name: "Pure Honeycomb Jar",
        price: "₹450",
        rating: 5,
        image: "/images/product_branded.png",
        badge: "Premium",
    },
];

export default function Products() {
    return (
        <section id="our-honey" className="py-16 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />


            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-amber-600 font-bold tracking-wider uppercase text-xs border border-amber-200 px-3 py-1 rounded-full bg-amber-50">
                        Fresh Stocks
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mt-4 mb-4">
                        Nature's Sweetest Gift
                    </h2>
                    <p className="text-amber-900/60 text-lg">
                        Straight from the hive, packed with purity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-3xl p-3 shadow-lg shadow-amber-900/5 hover:shadow-xl hover:shadow-amber-900/10 transition-all duration-500 border border-amber-100"
                        >
                            {/* Image Area - Compact Square */}
                            <div
                                className="aspect-square bg-amber-50 rounded-2xl mb-3 relative overflow-hidden group-hover:scale-[0.98] transition-transform duration-500"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {product.badge && (
                                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur text-amber-950 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                                        {product.badge === 'Trending' && <TrendingUp className="w-3 h-3 text-amber-600" />}
                                        {product.badge}
                                    </span>
                                )}

                                {/* Quick Add Overlay */}
                                <div className="absolute inset-x-3 bottom-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <Button size="sm" className="w-full bg-white/90 backdrop-blur text-amber-950 hover:bg-amber-500 hover:text-white shadow-lg text-xs font-bold h-9">
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-2 pb-2">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">500g Jar</span>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                        <span className="text-xs font-medium text-amber-900">{product.rating}.0</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-amber-950 mb-1 leading-tight group-hover:text-amber-600 transition-colors">
                                    {product.name}
                                </h3>

                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-xl font-serif font-bold text-amber-900">
                                        {product.price}
                                    </span>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="rounded-full w-8 h-8 text-amber-400 hover:text-amber-600 hover:bg-amber-50"
                                    >
                                        <ShoppingBag className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg" className="border-amber-200 text-amber-900 hover:bg-amber-50 px-8 rounded-full">
                        View All Products
                    </Button>
                </div>
            </div>
        </section>
    );
}
