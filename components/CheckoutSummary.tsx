"use client";

import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { variants } from "@/lib/motion";

export default function CheckoutSummary() {
    const { items, total } = useCart();

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100">
            <h2 className="text-2xl font-serif font-bold text-amber-950 mb-6">Order Summary</h2>

            <div className="space-y-4 mb-8">
                <AnimatePresence>
                    {items.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 py-2"
                        >
                            <div className="relative w-16 h-16 bg-amber-50 rounded-lg overflow-hidden flex-shrink-0">
                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-amber-950 text-sm">{item.name}</h3>
                                <p className="text-amber-900/60 text-xs">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-bold text-amber-600">₹{item.price * item.quantity}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {items.length === 0 && (
                    <p className="text-amber-900/40 text-center italic">Your cart is empty.</p>
                )}
            </div>

            <div className="space-y-3 pt-6 border-t border-amber-100">
                <div className="flex justify-between text-amber-900/60">
                    <span>Subtotal</span>
                    <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-amber-900/60">
                    <span>Shipping</span>
                    <span>{total > 999 ? "Free" : "₹50"}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-amber-950 pt-2 border-t border-dashed border-amber-200">
                    <span>Total</span>
                    <span>₹{total > 999 ? total : total + 50}</span>
                </div>
            </div>
        </div>
    );
}
