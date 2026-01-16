"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, Settings, User, LogOut, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const links = [
        { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
        { name: "My Orders", href: "/dashboard/orders", icon: Package },
        { name: "Subscription", href: "/dashboard/subscription", icon: ShoppingBag },
        { name: "Profile", href: "/dashboard/profile", icon: User },
        { name: "Settings", href: "/dashboard/settings", icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-[#FFFBF0] flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-amber-900/10 fixed inset-y-0 left-0 z-40 hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-amber-900/10">
                    <Link href="/" className="text-xl font-serif font-bold text-amber-900">
                        Balaji Enterprise
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {links.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-amber-50 text-amber-900"
                                        : "text-amber-900/60 hover:bg-white hover:text-amber-900"
                                )}
                            >
                                <Icon className="w-5 h-5" />
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-amber-900/10">
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
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 min-h-screen">
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
