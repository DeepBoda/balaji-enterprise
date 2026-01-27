"use client";

import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/products" },
        { name: "Our Story", path: "/about" },
        { name: "Rituals", path: "/services" },
        { name: "Contact", path: "/contact" }
    ];

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isOpen]);

    return (
        <>
            <motion.nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled || isOpen
                        ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-amber-900/5 py-3"
                        : "bg-transparent py-4"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-12">
                    {/* Logo */}
                    <Link href="/" onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-xl md:text-2xl font-serif font-bold text-amber-900 tracking-tight z-50 relative">
                        Balaji Enterprise
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={cn(
                                    "text-sm font-medium transition-colors relative group",
                                    pathname === item.path ? "text-amber-600" : "text-amber-900/80 hover:text-amber-600"
                                )}
                            >
                                {item.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 h-0.5 bg-amber-400 transition-all duration-300",
                                    pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                                )} />
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 z-50 relative">
                        <CartButton />

                        {/* Mobile Hamburger - Animated */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 md:hidden focus:outline-none"
                        >
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                className="block w-6 h-0.5 bg-amber-950 rounded-full transition-transform"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="block w-6 h-0.5 bg-amber-950 rounded-full"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                className="block w-6 h-0.5 bg-amber-950 rounded-full transition-transform"
                            />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-[#FFFBF0] z-[60] flex items-center justify-center md:hidden"
                    >
                        {/* Logo in Mobile Menu */}
                        <div className="absolute top-6 left-6 z-50 md:hidden">
                            <span className="text-xl font-serif font-bold text-amber-900 tracking-tight">
                                Balaji Enterprise
                            </span>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-amber-950 z-50 md:hidden"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                        </button>

                        {/* Simplified Background to fix rendering issues */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
                            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-amber-100 rounded-full blur-[80px]" />
                            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-orange-100 rounded-full blur-[80px]" />
                        </div>

                        <div className="flex flex-col items-center gap-8 relative z-20">
                            {navLinks.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: 0.1 + idx * 0.1, duration: 0.3 }}
                                >
                                    <Link
                                        href={item.path}
                                        onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                                        className={cn(
                                            "text-4xl font-serif font-medium transition-colors hover:text-amber-600 block text-center relative",
                                            pathname === item.path ? "text-amber-600 italic" : "text-amber-950"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function CartButton() {
    const { toggleCart, count } = useCart();

    return (
        <Button onClick={toggleCart} variant="ghost" size="icon" className="relative text-amber-900 hover:bg-amber-50">
            <ShoppingBag className="w-5 h-5" />
            <AnimatePresence>
                {count > 0 && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute top-0 right-0 w-4 h-4 bg-amber-600 rounded-full ring-2 ring-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                    >
                        {count}
                    </motion.span>
                )}
            </AnimatePresence>
        </Button>
    );
}

