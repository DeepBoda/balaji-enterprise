"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, Loader2, Mail } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [error, setError] = useState("");

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email.trim()) {
            setError("Please enter your email");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email");
            return;
        }

        setStatus("loading");

        // Simulate API call - replace with actual newsletter API
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus("success");
        setEmail("");

        // Reset after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
    };

    return (
        <section className="py-24 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#051D40] rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden"
                >
                    {/* Background circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                    {/* Floating honeycomb pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 text-6xl">🍯</div>
                        <div className="absolute bottom-10 right-10 text-4xl">🐝</div>
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        >
                            <Mail className="w-8 h-8 text-amber-400" />
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                            Join the Hive
                        </h2>
                        <p className="text-amber-100/70 text-lg mb-10">
                            Subscribe to get sweet offers, organic living tips, and exclusive access to our seasonal harvests.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <div className="flex-1 relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setError("");
                                    }}
                                    placeholder="Enter your email address"
                                    disabled={status === "loading" || status === "success"}
                                    className={`w-full h-12 px-6 rounded-full bg-white/10 border text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${error ? "border-red-400" : "border-white/20"
                                        }`}
                                />
                                <AnimatePresence>
                                    {error && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute -bottom-6 left-4 text-red-400 text-xs"
                                        >
                                            {error}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                disabled={status === "loading" || status === "success"}
                                className={`h-12 rounded-full px-8 font-bold transition-all ${status === "success"
                                        ? "bg-green-500 hover:bg-green-500"
                                        : "bg-amber-500 hover:bg-amber-600"
                                    } text-white`}
                            >
                                <AnimatePresence mode="wait">
                                    {status === "loading" && (
                                        <motion.span
                                            key="loading"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Subscribing...
                                        </motion.span>
                                    )}
                                    {status === "success" && (
                                        <motion.span
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <Check className="w-4 h-4" />
                                            Subscribed!
                                        </motion.span>
                                    )}
                                    {(status === "idle" || status === "error") && (
                                        <motion.span
                                            key="idle"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            Subscribe
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </Button>
                        </form>

                        <p className="text-white/30 text-xs mt-8">
                            No spam, ever. Just pure goodness. 🍯
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

