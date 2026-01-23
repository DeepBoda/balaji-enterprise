"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setComplete(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    // Honeycomb Path (Hexagon)
    const hexPath = "M12 2l10 6v12l-10 6l-10-6V8z";

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-amber-900/10 radial-gradient" />

                    <div className="relative z-10 flex items-center justify-center">
                        {/* The Hive (Grid of Hexagons) */}
                        <div className="grid grid-cols-3 gap-2 rotate-90">
                            {[...Array(7)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`w-12 h-12 flex items-center justify-center ${i === 3 ? 'col-start-2' : ''}`}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: i * 0.1,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 10
                                    }}
                                >
                                    <svg viewBox="0 0 24 24" className="w-full h-full text-amber-500 fill-amber-500/20 stroke-current stroke-1">
                                        <path d={hexPath} />
                                    </svg>
                                </motion.div>
                            ))}
                        </div>

                        {/* The Bee (Orbiting Particle) */}
                        <motion.div
                            className="absolute w-full h-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                            <motion.div
                                className="absolute -top-8 left-1/2 w-4 h-4 bg-yellow-400 rounded-full blur-[2px] shadow-[0_0_15px_rgba(251,191,36,0.8)]"
                                initial={{ scale: 0 }}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                            />
                            {/* Bee Trail */}
                            <motion.div
                                className="absolute -top-8 left-1/2 w-20 h-1 bg-gradient-to-l from-yellow-400/50 to-transparent blur-[1px] origin-right -translate-x-full"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
