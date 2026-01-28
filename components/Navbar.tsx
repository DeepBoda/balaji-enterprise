"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/ui/MobileMenu";
import { hoverVariants } from "@/lib/motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    if (pathname?.startsWith("/dashboard")) return null;

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/products" },
        { name: "Our Story", path: "/about" },
        { name: "Rituals", path: "/services" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled || isOpen
                        ? "bg-[#FFFBF0]/80 backdrop-blur-xl shadow-sm border-b border-amber-900/5 py-4"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-serif font-bold text-amber-950 tracking-tight z-50 relative group"
                        onClick={() => isOpen && setIsOpen(false)}
                    >
                        Balaji Enterprise
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-amber-600"></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={cn(
                                    "text-sm font-medium transition-colors relative group py-2",
                                    pathname === item.path ? "text-amber-600" : "text-amber-900 hover:text-amber-600"
                                )}
                            >
                                {item.name}
                                <span className={cn(
                                    "absolute bottom-0 left-0 h-0.5 bg-amber-600 transition-all duration-300 ease-out",
                                    pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                                )} />
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 z-50 relative">
                        <CartButton />

                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 md:hidden text-amber-950 hover:bg-amber-900/5 rounded-full transition-colors"
                            aria-label="Open menu"
                        >
                            <span className="w-5 h-0.5 bg-current rounded-full" />
                            <span className="w-5 h-0.5 bg-current rounded-full" />
                        </button>
                    </div>
                </div>
            </motion.nav>

            <MobileMenu
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                links={navLinks}
            />
        </>
    );
}

function CartButton() {
    const { toggleCart, count } = useCart();

    return (
        <motion.button
            variants={hoverVariants.buttonHover}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            onClick={toggleCart}
            className="w-10 h-10 flex items-center justify-center rounded-full text-amber-900 hover:bg-amber-100/50 transition-colors relative"
            aria-label="Shopping Cart"
        >
            <ShoppingBag className="w-5 h-5" />
            <AnimatePresence>
                {count > 0 && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm border-2 border-[#FFFBF0]"
                    >
                        {count}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
