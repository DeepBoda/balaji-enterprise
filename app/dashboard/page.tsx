"use client";

import { motion } from "framer-motion";
import { Package, Truck, Clock, AlertCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import EmptyState from "@/components/EmptyState";
import { useState, useEffect } from "react";
import { variants } from "@/lib/motion";

export default function DashboardPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate network request
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const recentOrders = [
        { id: "#ORD-7729", date: "Jan 15, 2024", status: "Processing", amount: "₹850" },
        { id: "#ORD-6621", date: "Dec 22, 2023", status: "Delivered", amount: "₹1,200" },
        { id: "#ORD-5501", date: "Nov 10, 2023", status: "Delivered", amount: "₹350" },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                {isLoading ? (
                    <div className="space-y-2">
                        <Skeleton className="h-8 w-64" />
                        <Skeleton className="h-4 w-96" />
                    </div>
                ) : (
                    <motion.div
                        variants={variants.fadeInUp}
                        initial="initial"
                        animate="animate"
                    >
                        <h1 className="text-2xl font-serif font-bold text-amber-950">Welcome back, John</h1>
                        <p className="text-amber-900/60">Here is what&apos;s happening with your honey orders today.</p>
                    </motion.div>
                )}
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {isLoading ? (
                    [1, 2, 3].map((i) => (
                        <Skeleton key={i} className="h-32 rounded-2xl" />
                    ))
                ) : (
                    [
                        { label: "Active Orders", value: "2", icon: Package, color: "text-blue-600", bg: "bg-blue-50" },
                        { label: "Total Spent", value: "₹4,200", icon: Truck, color: "text-amber-600", bg: "bg-amber-50" },
                        { label: "Next Delivery", value: "Jan 24", icon: Clock, color: "text-green-600", bg: "bg-green-50" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            variants={variants.scaleIn}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-amber-900/5 shadow-sm"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl ${stat.bg}`}>
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                                <span className="text-xs font-bold bg-gray-50 px-2 py-1 rounded text-gray-500">Last 30 days</span>
                            </div>
                            <div>
                                <p className="text-amber-900/60 text-sm font-medium">{stat.label}</p>
                                <p className="text-2xl font-bold text-amber-950 mt-1">{stat.value}</p>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>

            {/* Recent Order */}
            {isLoading ? (
                <Skeleton className="h-64 rounded-2xl" />
            ) : (
                <motion.div
                    variants={variants.fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl border border-amber-900/5 shadow-sm overflow-hidden"
                >
                    <div className="p-6 border-b border-amber-900/5 flex items-center justify-between">
                        <h2 className="text-lg font-bold text-amber-950">Recent Orders</h2>
                        <Button variant="link" className="text-amber-600">View All</Button>
                    </div>

                    {recentOrders.length > 0 ? (
                        <div className="divide-y divide-amber-900/5">
                            {recentOrders.map((order) => (
                                <div key={order.id} className="p-6 flex items-center justify-between hover:bg-amber-50/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-amber-50 rounded-lg">
                                            <Package className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-amber-950 text-sm">{order.id}</p>
                                            <p className="text-xs text-amber-900/60">{order.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                            {order.status}
                                        </span>
                                        <span className="text-sm font-bold text-amber-950">{order.amount}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-6">
                            <EmptyState
                                icon={ShoppingBag}
                                title="No orders yet"
                                description="When you place an order, it will appear here."
                                actionLabel="Start Shopping"
                                onAction={() => window.location.href = '/products'}
                            />
                        </div>
                    )}
                </motion.div>
            )}

            {/* Subscription Upsell - Always visible or skeleton */}
            {isLoading ? (
                <Skeleton className="h-48 rounded-2xl" />
            ) : (
                <motion.div
                    variants={variants.fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-r from-amber-900 to-amber-950 rounded-2xl p-8 text-white relative overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Subscribe & Save 20%</h3>
                            <p className="text-amber-200/80 max-w-md">Never run out of your favorite elixir. Get monthly deliveries with free shipping and exclusive member perks.</p>
                        </div>
                        <Button className="bg-white text-amber-950 hover:bg-amber-50 font-bold border-none transition-transform hover:scale-105">
                            Manage Subscription
                        </Button>
                    </div>
                    {/* Decorative BG */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                </motion.div>
            )}
        </div>
    );
}
