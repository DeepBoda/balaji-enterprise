"use client";

import { useCart } from "@/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CartDrawer() {
    const { isOpen, toggleCart, items, removeFromCart, updateQuantity, total } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#FFFBF0] shadow-2xl border-l border-amber-900/10 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-amber-900/10">
                            <h2 className="text-2xl font-serif font-bold text-amber-950 flex items-center gap-2">
                                <ShoppingBag className="w-6 h-6 text-amber-600" />
                                Your Cart
                            </h2>
                            <button
                                onClick={toggleCart}
                                className="p-2 rounded-full hover:bg-amber-100/50 text-amber-900/60 hover:text-amber-900 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center">
                                        <ShoppingBag className="w-10 h-10 text-amber-200" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-amber-950">Your cart is empty</p>
                                        <p className="text-amber-900/60">Looks like you haven&apos;t added any honey yet.</p>
                                    </div>
                                    <Button onClick={toggleCart} variant="outline" className="border-amber-200 text-amber-900 hover:bg-amber-50">
                                        Start Shopping
                                    </Button>
                                </div>
                            ) : (
                                <ul className="space-y-6">
                                    {items.map((item) => (
                                        <motion.li
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border border-amber-100"
                                        >
                                            {/* Image */}
                                            <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-amber-50 flex-shrink-0">
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            </div>

                                            {/* Details */}
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="font-bold text-amber-950 line-clamp-1">{item.name}</h3>
                                                    <p className="text-amber-600 font-bold">₹{item.price}</p>
                                                </div>

                                                <div className="flex items-center justify-between mt-2">
                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center gap-3 bg-amber-50 rounded-lg p-1">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                            className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-white text-amber-900 transition-colors"
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <span className="text-sm font-bold text-amber-950 w-4 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                            className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-white text-amber-900 transition-colors"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>

                                                    {/* Remove Button */}
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Footer / Checkout */}
                        {items.length > 0 && (
                            <div className="p-6 bg-white border-t border-amber-900/10 space-y-4">
                                <div className="space-y-2">
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
                                <Button className="w-full h-12 text-lg font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-lg shadow-amber-500/20">
                                    Checkout Now
                                </Button>
                                <p className="text-xs text-center text-amber-900/40">
                                    Secure checkout powered by Stripe
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
