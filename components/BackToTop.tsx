"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsVisible(latest > 400);
        });
    }, [scrollY]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="fixed bottom-24 right-6 z-[50] w-12 h-12 rounded-full bg-amber-600 text-white shadow-lg shadow-amber-600/30 flex items-center justify-center hover:bg-amber-700 hover:shadow-amber-600/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                    {/* Honey drip effect on hover */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-b from-amber-400 to-amber-600"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Arrow icon */}
                    <ArrowUp className="w-5 h-5 relative z-10" strokeWidth={2.5} />

                    {/* Subtle pulse ring */}
                    <span className="absolute inset-0 rounded-full border-2 border-amber-400/50 animate-ping opacity-20" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
