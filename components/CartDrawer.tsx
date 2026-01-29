"use client";

import { useCart } from "@/context/CartContext";
import { AnimatePresence, motion, useSpring, useTransform } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { variants } from "@/lib/motion";
import { useEffect } from "react";

function AnimatedNumber({ value }: { value: number }) {
    const spring = useSpring(value, { damping: 25, stiffness: 200 });
    const display = useTransform(spring, (latest) => Math.round(latest).toLocaleString());

    useEffect(() => {
        spring.set(value);
    }, [spring, value]);

    return <motion.span>{display}</motion.span>;
}

export default function CartDrawer() {
    const { isOpen, toggleCart, items, removeFromCart, updateQuantity, total, count } = useCart();

    // Lock body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        {...variants.backdropFade}
                        onClick={toggleCart}
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        {...variants.slideInRight}
                        className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#FFFBF0] shadow-2xl border-l border-amber-900/10 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-amber-900/10">
                            <motion.h2
                                className="text-2xl font-serif font-bold text-amber-950 flex items-center gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <ShoppingBag className="w-6 h-6 text-amber-600" />
                                Your Cart
                                {count > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="text-sm bg-amber-500 text-white px-2 py-0.5 rounded-full"
                                    >
                                        {count}
                                    </motion.span>
                                )}
                            </motion.h2>
                            <motion.button
                                onClick={toggleCart}
                                className="p-2 rounded-full hover:bg-amber-100/50 text-amber-900/60 hover:text-amber-900 transition-colors"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X size={24} />
                            </motion.button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <motion.div
                                    className="h-full flex flex-col items-center justify-center text-center space-y-4"
                                    {...variants.fadeInUp}
                                >
                                    <motion.div
                                        className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <ShoppingBag className="w-10 h-10 text-amber-200" />
                                    </motion.div>
                                    <div>
                                        <p className="text-lg font-bold text-amber-950">Your cart is empty</p>
                                        <p className="text-amber-900/60">Looks like you haven&apos;t added any honey yet.</p>
                                    </div>
                                    <Button onClick={toggleCart} variant="outline" className="border-amber-200 text-amber-900 hover:bg-amber-50">
                                        Start Shopping
                                    </Button>
                                </motion.div>
                            ) : (
                                <ul className="space-y-6">
                                    <AnimatePresence mode="popLayout">
                                        {items.map((item) => (
                                            <motion.li
                                                key={item.id}
                                                layout
                                                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border border-amber-100"
                                            >
                                                {/* Image */}
                                                <motion.div
                                                    className="relative w-20 h-20 rounded-xl overflow-hidden bg-amber-50 flex-shrink-0"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                                </motion.div>

                                                {/* Details */}
                                                <div className="flex-1 flex flex-col justify-between">
                                                    <div>
                                                        <h3 className="font-bold text-amber-950 line-clamp-1">{item.name}</h3>
                                                        <p className="text-amber-600 font-bold">₹{item.price}</p>
                                                    </div>

                                                    <div className="flex items-center justify-between mt-2">
                                                        {/* Quantity Controls */}
                                                        <div className="flex items-center gap-3 bg-amber-50 rounded-lg p-1">
                                                            <motion.button
                                                                onClick={() => updateQuantity(item.id, -1)}
                                                                className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-white text-amber-900 transition-colors disabled:opacity-30"
                                                                disabled={item.quantity <= 1}
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                            >
                                                                <Minus size={14} />
                                                            </motion.button>
                                                            <motion.span
                                                                className="text-sm font-bold text-amber-950 w-4 text-center"
                                                                key={item.quantity}
                                                                initial={{ scale: 1.3 }}
                                                                animate={{ scale: 1 }}
                                                            >
                                                                {item.quantity}
                                                            </motion.span>
                                                            <motion.button
                                                                onClick={() => updateQuantity(item.id, 1)}
                                                                className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-white text-amber-900 transition-colors"
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                            >
                                                                <Plus size={14} />
                                                            </motion.button>
                                                        </div>

                                                        {/* Remove Button */}
                                                        <motion.button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                            whileHover={{ scale: 1.1, rotate: 10 }}
                                                            whileTap={{ scale: 0.9 }}
                                                        >
                                                            <Trash2 size={16} />
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </motion.li>
                                        ))}
                                    </AnimatePresence>
                                </ul>
                            )}
                        </div>

                        {/* Footer / Checkout */}
                        {items.length > 0 && (
                            <motion.div
                                className="p-6 bg-white border-t border-amber-900/10 space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="space-y-2">
                                    <div className="flex justify-between text-amber-900/60">
                                        <span>Subtotal</span>
                                        <span>₹<AnimatedNumber value={total} /></span>
                                    </div>
                                    <div className="flex justify-between text-amber-900/60">
                                        <span>Shipping</span>
                                        <span>{total > 999 ? "Free" : "₹50"}</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold text-amber-950 pt-2 border-t border-dashed border-amber-200">
                                        <span>Total</span>
                                        <span>₹<AnimatedNumber value={total > 999 ? total : total + 50} /></span>
                                    </div>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        onClick={() => {
                                            toggleCart();
                                            window.location.href = "/checkout";
                                        }}
                                        className="w-full h-12 text-lg font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-lg shadow-amber-500/20 group"
                                    >
                                        Checkout Now
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.div>
                                <p className="text-xs text-center text-amber-900/40">
                                    Secure checkout powered by Stripe
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
