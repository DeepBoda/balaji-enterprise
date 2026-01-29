"use client";

import { Button } from "@/components/ui/button";
import TiltCard from "@/components/ui/TiltCard";
import { motion } from "framer-motion";
import { ShoppingBag, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/Toast";
import { scrollReveal, hoverVariants } from "@/lib/motion";
import { useState } from "react";

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
    const { addToCart } = useCart();
    const [addingToCart, setAddingToCart] = useState<number | null>(null);

    const handleAddToCart = async (product: typeof products[0], e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigation
        e.stopPropagation();

        setAddingToCart(product.id);

        addToCart({
            id: product.id,
            name: product.name,
            price: parseInt(product.price.replace("₹", "")),
            image: product.image,
        });

        // Show success toast
        toast.success(`${product.name} added to cart!`, 2000);

        // Reset animation state
        setTimeout(() => setAddingToCart(null), 600);
    };

    return (
        <section id="our-honey" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-40" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16"
                    {...scrollReveal.default}
                >
                    <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                        Fresh Stocks
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-8">
                        Nature&apos;s Sweetest <span className="relative inline-block text-amber-500 italic">
                            Gift
                            <svg className="absolute w-[120%] h-auto -bottom-4 left-0 -z-10 text-amber-500/30" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00025 15.0002C30.5002 5.50024 50.0002 -3.49976 82.0002 9.00024C122 24.6252 165.5 13.5 198 2.00024" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-amber-900/60 text-lg">
                        Straight from the hive, packed with purity.
                    </p>
                </motion.div>

                {/* Product Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            variants={{
                                initial: { opacity: 0, y: 40 },
                                animate: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <TiltCard className="h-full">
                                <Link href={`/product/${product.id}`} className="block h-full">
                                    <motion.div
                                        initial="rest"
                                        whileHover="hover"
                                        animate="rest"
                                        className="group relative bg-white rounded-3xl p-3 shadow-lg shadow-amber-900/5 border border-amber-100 cursor-pointer h-full flex flex-col"
                                    >
                                        <motion.div
                                            variants={hoverVariants.cardHover}
                                            className="relative flex-1 flex flex-col"
                                        >
                                            {/* Image Area */}
                                            <div className="aspect-square bg-amber-50 rounded-2xl mb-3 relative overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={product.image}
                                                    alt={`${product.name} - Pure Organic Honey`}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />

                                                {product.badge && (
                                                    <motion.span
                                                        className="absolute top-3 left-3 bg-white/95 backdrop-blur text-amber-950 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1 z-10"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: idx * 0.1 + 0.3 }}
                                                    >
                                                        {product.badge === 'Trending' && <TrendingUp className="w-3 h-3 text-amber-600" />}
                                                        {product.badge}
                                                    </motion.span>
                                                )}

                                                {/* Quick Add Overlay */}
                                                <motion.div
                                                    className="absolute inset-x-3 bottom-3"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileHover={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <Button
                                                        onClick={(e) => handleAddToCart(product, e)}
                                                        size="sm"
                                                        aria-label={`Add ${product.name} to cart`}
                                                        className="w-full bg-white/90 backdrop-blur text-amber-950 hover:bg-amber-500 hover:text-white shadow-lg text-xs font-bold h-9 relative overflow-hidden group/btn"
                                                        disabled={addingToCart === product.id}
                                                    >
                                                        {addingToCart === product.id ? (
                                                            <motion.span
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                className="flex items-center gap-2"
                                                            >
                                                                <motion.div
                                                                    animate={{ rotate: 360 }}
                                                                    transition={{ duration: 0.6, ease: "linear" }}
                                                                >
                                                                    ✓
                                                                </motion.div>
                                                                Added!
                                                            </motion.span>
                                                        ) : (
                                                            "Add to Cart"
                                                        )}
                                                    </Button>
                                                </motion.div>
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
                                                    <motion.div
                                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Button
                                                            onClick={(e) => handleAddToCart(product, e)}
                                                            size="icon"
                                                            variant="ghost"
                                                            aria-label={`Quick add ${product.name}`}
                                                            className="rounded-full w-8 h-8 text-amber-400 hover:text-amber-600 hover:bg-amber-50"
                                                        >
                                                            <ShoppingBag className="w-4 h-4" />
                                                        </Button>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </Link>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    className="mt-16 text-center"
                    {...scrollReveal.fast}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-amber-200 text-amber-900 hover:bg-amber-50 px-8 rounded-full group"
                        >
                            View All Products
                            <motion.span
                                className="inline-block ml-2"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
