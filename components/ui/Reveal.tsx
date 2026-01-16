"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    blur?: boolean;
    y?: number;
    className?: string; // Allow passing standard classNames
}

export const Reveal = ({
    children,
    width = "fit-content",
    delay = 0.25,
    duration = 0.5,
    blur = true,
    y = 20,
    className = ""
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} className={`${width === "100%" ? "w-full" : "w-fit"} ${className} relative overflow-visible`}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: y, filter: blur ? "blur(10px)" : "blur(0px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: duration, delay: delay, ease: [0.25, 0.25, 0, 1] }} // smooth ease-out-quart-ish
            >
                {children}
            </motion.div>
        </div>
    );
};
