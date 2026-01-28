"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, Settings, User, LogOut, Package, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
    name: string;
    href: string;
    icon: any;
}

interface DashboardMobileNavProps {
    links: NavLink[];
}

export default function DashboardMobileNav({ links }: DashboardMobileNavProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const menuVariants = {
        closed: {
            x: "-100%",
            transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 40,
            },
        },
        open: {
            x: "0%",
            transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 40,
            },
        },
    };

    return (
        <div className="md:hidden flex flex-col w-full">
            {/* Mobile Header */}
            <header className="h-16 bg-white border-b border-amber-900/10 flex items-center justify-between px-4 sticky top-0 z-30">
                <Link href="/" className="text-lg font-serif font-bold text-amber-900">
                    Balaji
                </Link>
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 text-amber-900 hover:bg-amber-50 rounded-lg"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </header>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                    />
                )}
            </AnimatePresence>

            {/* Drawer */}
            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
                className="fixed inset-y-0 left-0 w-[280px] bg-white z-50 shadow-2xl flex flex-col"
            >
                <div className="h-16 flex items-center justify-between px-6 border-b border-amber-900/10">
                    <span className="text-xl font-serif font-bold text-amber-900">Menu</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-amber-900/60 hover:text-amber-900"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {links.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-amber-50 text-amber-900"
                                        : "text-amber-900/60 hover:bg-amber-50 hover:text-amber-900"
                                )}
                            >
                                <Icon className="w-5 h-5" />
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-amber-900/10 bg-amber-50/30">
                    <div className="flex items-center gap-3 px-4 py-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs">
                            JD
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-bold text-amber-950 truncate">John Doe</p>
                            <p className="text-xs text-amber-900/60 truncate">john@example.com</p>
                        </div>
                    </div>
                    <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 gap-2">
                        <LogOut className="w-4 h-4" />
                        Log Out
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
