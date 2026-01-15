"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setComplete(true);
        }, 3000); // 3s intro
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFFBF0] overflow-hidden"
                >
                    {/* Honey Drip Graphic (svg path or simple shape) */}
                    <motion.div
                        initial={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute top-0 w-24 bg-amber-500/20 blur-3xl opacity-50"
                    />

                    <div className="relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-4"
                        >
                            {/* Premium Drop Icon */}
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-600 mx-auto">
                                <path d="M12 22C12 22 5 14 5 8.5C5 5 8 2 12 2C16 2 19 5 19 8.5C19 14 12 22 12 22Z" fill="#d97706" fillOpacity="0.8" stroke="none" />
                                <path d="M12 22C12 22 5 14 5 8.5C5 5 8 2 12 2C16 2 19 5 19 8.5C19 14 12 22 12 22Z" stroke="#78350f" strokeOpacity="0.2" />
                                <path d="M14 6C14 6 15 4 17 4" stroke="#FFF" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
                            </svg>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-amber-900 font-serif italic text-xl tracking-widest"
                        >
                            The Golden Nectar
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
