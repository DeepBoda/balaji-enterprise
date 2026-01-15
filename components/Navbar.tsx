"use client";

import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
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
                    {["Home", "Our Honey", "Process", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-sm font-medium text-honey-900 hover:text-honey-600 transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-honey-400 transition-all group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="relative text-honey-900">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute top-0 right-0 w-2 h-2 bg-honey-500 rounded-full ring-2 ring-white" />
                    </Button>
                    <Button variant="ghost" size="icon" className="md:hidden text-honey-900">
                        <Menu className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </motion.nav>
    );
}
