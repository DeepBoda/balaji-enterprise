"use client";

import { ToastContainer, useToast } from "./Toast";

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const { toasts, dismiss } = useToast();

    return (
        <>
            {children}
            <ToastContainer toasts={toasts} onDismiss={dismiss} />
        </>
    );
}
