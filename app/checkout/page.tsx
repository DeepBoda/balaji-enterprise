"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import CheckoutSummary from "@/components/CheckoutSummary";
import { toast } from "@/components/ui/Toast";

export default function CheckoutPage() {
    const { items, clearCart } = useCart();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handlePlaceOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsProcessing(false);
        setIsSuccess(true);
        clearCart();
        toast.success("Order placed successfully!");
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-[#FFFBF0] flex items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center border border-amber-100"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <CheckCircle2 size={40} />
                    </motion.div>
                    <h1 className="text-3xl font-serif font-bold text-amber-950 mb-4">Order Confirmed!</h1>
                    <p className="text-amber-900/60 mb-8">
                        Thank you for your purchase. We've sent a confirmation email with your order details.
                    </p>
                    <Link href="/">
                        <Button className="w-full h-12 bg-amber-600 hover:bg-amber-700 text-white rounded-xl">
                            Return to Home
                        </Button>
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FFFBF0] pt-24 pb-12">
            <div className="container mx-auto px-4 md:px-8">
                <Link href="/" className="inline-flex items-center text-amber-900/60 hover:text-amber-900 mb-8 transition-colors">
                    <ArrowLeft className="mr-2" size={20} />
                    Back to Shop
                </Link>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Checkout Form */}
                    <motion.div
                        className="lg:col-span-2 space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100">
                            <h2 className="text-2xl font-serif font-bold text-amber-950 mb-6">Shipping Details</h2>
                            <form onSubmit={handlePlaceOrder} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-amber-900/80">First Name</label>
                                        <input required className="w-full px-4 py-3 rounded-lg bg-amber-50 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-amber-900/80">Last Name</label>
                                        <input required className="w-full px-4 py-3 rounded-lg bg-amber-50 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-amber-900/80">Email Address</label>
                                    <input required type="email" className="w-full px-4 py-3 rounded-lg bg-amber-50 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-amber-900/80">Street Address</label>
                                    <input required className="w-full px-4 py-3 rounded-lg bg-amber-50 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20" placeholder="123 Honey Street" />
                                </div>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-amber-900/80">City</label>
                                        <input required className="w-full px-4 py-3 rounded-lg bg-amber-50 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20" placeholder="Nature City" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-amber-900/80">State</label>
                                        <input required className="w-full px-4 py-3 rounded-lg bg-amber-50 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20" placeholder="NY" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-amber-900/80">Zip Code</label>
                                        <input required className="w-full px-4 py-3 rounded-lg bg-amber-50 border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20" placeholder="10001" />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={items.length === 0 || isProcessing}
                                    className="w-full h-14 text-lg font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    {isProcessing ? "Processing..." : "Confirm Purchase"}
                                </Button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <CheckoutSummary />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
