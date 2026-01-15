"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 second fake load
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFFBF0]"
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                >
                    {/* Honey Drip SVG */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative flex flex-col items-center"
                    >
                        <svg className="w-32 h-32 text-amber-500 mb-4" viewBox="0 0 100 100" fill="currentColor">
                            <motion.path
                                initial={{ d: "M50 0 C50 0 50 20 50 20 C50 20 20 40 20 60 C20 80 35 95 50 95 C65 95 80 80 80 60 C80 40 50 20 50 20 C50 20 50 0 50 0 Z" }}
                                animate={{
                                    d: [
                                        "M50 0 C50 0 50 20 50 20 C50 20 20 40 20 60 C20 80 35 95 50 95 C65 95 80 80 80 60 C80 40 50 20 50 20 C50 20 50 0 50 0 Z",
                                        "M50 0 C50 0 55 25 55 25 C55 25 30 45 30 65 C30 85 40 98 50 98 C60 98 70 85 70 65 C70 45 55 25 55 25 C55 25 50 0 50 0 Z",
                                        "M50 0 C50 0 50 20 50 20 C50 20 20 40 20 60 C20 80 35 95 50 95 C65 95 80 80 80 60 C80 40 50 20 50 20 C50 20 50 0 50 0 Z"
                                    ]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </svg>
                        <h1 className="text-2xl font-serif font-bold text-amber-950 tracking-widest uppercase">
                            Balaji
                        </h1>
                        <motion.div
                            className="h-1 bg-amber-200 mt-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.8 }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
