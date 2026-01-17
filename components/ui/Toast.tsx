"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { useEffect, useState } from "react";

export type ToastType = "success" | "error" | "info";

export interface Toast {
    id: string;
    message: string;
    type: ToastType;
    duration?: number;
}

interface ToastProps {
    toast: Toast;
    onDismiss: (id: string) => void;
}

const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
};

const colors = {
    success: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-900",
        icon: "text-green-600",
        progress: "bg-green-500",
    },
    error: {
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-900",
        icon: "text-red-600",
        progress: "bg-red-500",
    },
    info: {
        bg: "bg-amber-50",
        border: "border-amber-200",
        text: "text-amber-900",
        icon: "text-amber-600",
        progress: "bg-amber-500",
    },
};

function ToastItem({ toast, onDismiss }: ToastProps) {
    const [progress, setProgress] = useState(100);
    const Icon = icons[toast.type];
    const color = colors[toast.type];
    const duration = toast.duration || 3000;

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev - (100 / duration) * 50;
                if (newProgress <= 0) {
                    clearInterval(interval);
                    onDismiss(toast.id);
                    return 0;
                }
                return newProgress;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [toast.id, duration, onDismiss]);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`relative overflow-hidden rounded-xl border ${color.bg} ${color.border} shadow-lg backdrop-blur-sm min-w-[320px] max-w-md`}
        >
            <div className="flex items-start gap-3 p-4">
                <Icon className={`w-5 h-5 ${color.icon} flex-shrink-0 mt-0.5`} />
                <p className={`flex-1 text-sm font-medium ${color.text}`}>{toast.message}</p>
                <button
                    onClick={() => onDismiss(toast.id)}
                    className={`${color.text} hover:opacity-70 transition-opacity flex-shrink-0`}
                >
                    <X size={18} />
                </button>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-black/5">
                <motion.div
                    className={`h-full ${color.progress}`}
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.05, ease: "linear" }}
                />
            </div>
        </motion.div>
    );
}

interface ToastContainerProps {
    toasts: Toast[];
    onDismiss: (id: string) => void;
}

export function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
    return (
        <div className="fixed top-4 right-4 z-[100] flex flex-col gap-3 pointer-events-none">
            <AnimatePresence mode="popLayout">
                {toasts.map((toast) => (
                    <div key={toast.id} className="pointer-events-auto">
                        <ToastItem toast={toast} onDismiss={onDismiss} />
                    </div>
                ))}
            </AnimatePresence>
        </div>
    );
}

// Toast Hook
let toastCounter = 0;
const toastListeners: Array<(toast: Toast) => void> = [];

export function useToast() {
    const [toasts, setToasts] = useState<Toast[]>([]);

    useEffect(() => {
        const listener = (toast: Toast) => {
            setToasts((prev) => [...prev, toast]);
        };
        toastListeners.push(listener);
        return () => {
            const index = toastListeners.indexOf(listener);
            if (index > -1) toastListeners.splice(index, 1);
        };
    }, []);

    const dismiss = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return { toasts, dismiss };
}

// Global toast function
export const toast = {
    success: (message: string, duration?: number) => {
        const newToast: Toast = {
            id: `toast-${toastCounter++}`,
            message,
            type: "success",
            duration,
        };
        toastListeners.forEach((listener) => listener(newToast));
    },
    error: (message: string, duration?: number) => {
        const newToast: Toast = {
            id: `toast-${toastCounter++}`,
            message,
            type: "error",
            duration,
        };
        toastListeners.forEach((listener) => listener(newToast));
    },
    info: (message: string, duration?: number) => {
        const newToast: Toast = {
            id: `toast-${toastCounter++}`,
            message,
            type: "info",
            duration,
        };
        toastListeners.forEach((listener) => listener(newToast));
    },
};
