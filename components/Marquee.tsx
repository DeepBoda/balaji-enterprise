"use client";

import { motion } from "framer-motion";

const MarqueeContent = () => (
    <div className="flex items-center gap-16 px-6">
        <motion.div
            className="flex whitespace-nowrap gap-16"
            animate={{ x: "-50%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
            {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-16 items-center">
                    <span className="text-8xl md:text-9xl font-serif font-black text-amber-950/5 uppercase tracking-tighter">
                        Pure . Wild . Organic .
                    </span>
                    <span className="text-8xl md:text-9xl font-serif font-black text-amber-500/10 uppercase tracking-tighter">
                        100% Natural Honey .
                    </span>
                    <span className="text-8xl md:text-9xl font-serif font-black text-amber-950/5 uppercase tracking-tighter">
                        From the Hive .
                    </span>
                </div>
            ))}
        </motion.div>
    </div>
);

export default function Marquee() {
    return (
        <section className="py-20 bg-[#FFFBF0] overflow-hidden relative border-y border-amber-900/5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <MarqueeContent />
        </section>
    );
}
