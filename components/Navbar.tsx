"use client";

import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-amber-900/5 py-3"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-12">
                {/* Logo */}
                <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-serif font-bold text-amber-900 tracking-tight">
                    Balaji Enterprise
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Shop", path: "/products" },
                        { name: "Our Story", path: "/about" },
                        { name: "Rituals", path: "/services" },
                        { name: "Contact", path: "/contact" }
                    ].map((item) => (
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
                <div className="flex items-center gap-4">
                    <CartButton />
                    <Button variant="ghost" size="icon" className="md:hidden text-honey-900">
                        <Menu className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </motion.nav>
    );
}

function CartButton() {
    const { toggleCart, count } = useCart();

    return (
        <Button onClick={toggleCart} variant="ghost" size="icon" className="relative text-honey-900">
            <ShoppingBag className="w-5 h-5" />
            <AnimatePresence>
                {count > 0 && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute top-0 right-0 w-4 h-4 bg-honey-500 rounded-full ring-2 ring-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                    >
                        {count}
                    </motion.span>
                )}
            </AnimatePresence>
        </Button>
    );
}

