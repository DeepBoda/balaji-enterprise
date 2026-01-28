"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { duration, easing } from "@/lib/motion";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: { name: string; path: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
    const pathname = usePathname();

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Close on route change
    useEffect(() => {
        onClose();
    }, [pathname, onClose]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const menuVariants = {
        closed: {
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
            transition: {
                duration: duration.normal,
                ease: easing.smoothOut,
            },
        },
        open: {
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            transition: {
                duration: duration.slow,
                ease: easing.smoothIn,
            },
        },
    };

    const linkVariants = {
        closed: { y: 20, opacity: 0 },
        open: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: duration.normal,
                ease: easing.smoothIn,
            },
        }),
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] md:hidden"
                        onClick={onClose}
                    />

                    {/* Menu Container */}
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 z-[9999] bg-[#FFFBF0] md:hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6">
                            <Link href="/" className="text-2xl font-serif font-bold text-amber-950">
                                Balaji Enterprise
                            </Link>
                            <button
                                onClick={onClose}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-100/50 text-amber-950 hover:bg-amber-100 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="flex-1 flex flex-col justify-center px-6 gap-6">
                            <nav className="flex flex-col gap-6">
                                {links.map((link, i) => {
                                    const isActive = pathname === link.path;
                                    return (
                                        <motion.div
                                            key={link.path}
                                            custom={i}
                                            variants={linkVariants}
                                            initial="closed"
                                            animate="open"
                                        >
                                            <Link
                                                href={link.path}
                                                className={cn(
                                                    "group flex items-center justify-between text-4xl md:text-5xl font-serif font-medium transition-colors",
                                                    isActive ? "text-amber-600" : "text-amber-950/90 hover:text-amber-700"
                                                )}
                                            >
                                                <span>{link.name}</span>
                                                <motion.span
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                                                    whileHover={{ scale: 1, opacity: 1 }}
                                                    className="w-12 h-12 rounded-full border border-amber-900/10 flex items-center justify-center"
                                                >
                                                    <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                                </motion.span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Footer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="p-8 border-t border-amber-900/10"
                        >
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-amber-900/60 font-medium tracking-wide uppercase">Follow Us</p>
                                <div className="flex gap-4">
                                    {[
                                        { icon: Instagram, href: "#" },
                                        { icon: Facebook, href: "#" },
                                        { icon: Twitter, href: "#" }
                                    ].map((social, idx) => (
                                        <Link
                                            key={idx}
                                            href={social.href}
                                            className="w-10 h-10 rounded-full border border-amber-900/20 flex items-center justify-center text-amber-900 hover:bg-amber-900 hover:text-white transition-colors"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
