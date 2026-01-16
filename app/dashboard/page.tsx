"use client";

import { motion } from "framer-motion";
import { Package, Truck, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-serif font-bold text-amber-950">Welcome back, John</h1>
                <p className="text-amber-900/60">Here is what&apos;s happening with your honey orders today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { label: "Active Orders", value: "2", icon: Package, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Total Spent", value: "₹4,200", icon: Truck, color: "text-amber-600", bg: "bg-amber-50" },
                    { label: "Next Delivery", value: "Jan 24", icon: Clock, color: "text-green-600", bg: "bg-green-50" },
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
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
                ))}
            </div>

            {/* Recent Order */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl border border-amber-900/5 shadow-sm overflow-hidden"
            >
                <div className="p-6 border-b border-amber-900/5 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-amber-950">Recent Orders</h2>
                    <Button variant="link" className="text-amber-600">View All</Button>
                </div>
                <div className="divide-y divide-amber-900/5">
                    {[
                        { id: "#ORD-7729", date: "Jan 15, 2024", status: "Processing", amount: "₹850" },
                        { id: "#ORD-6621", date: "Dec 22, 2023", status: "Delivered", amount: "₹1,200" },
                        { id: "#ORD-5501", date: "Nov 10, 2023", status: "Delivered", amount: "₹350" },
                    ].map((order) => (
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
            </motion.div>

            {/* Subscription Upsell */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-amber-900 to-amber-950 rounded-2xl p-8 text-white relative overflow-hidden"
            >
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Subscribe & Save 20%</h3>
                        <p className="text-amber-200/80 max-w-md">Never run out of your favorite elixir. Get monthly deliveries with free shipping and exclusive member perks.</p>
                    </div>
                    <Button className="bg-white text-amber-950 hover:bg-amber-50 font-bold border-none">
                        Manage Subscription
                    </Button>
                </div>
                {/* Decorative BG */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            </motion.div>
        </div>
    );
}
