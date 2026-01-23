import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-gradient-to-b from-amber-400 to-amber-600 text-white shadow-[0_2px_10px_rgba(245,158,11,0.5),inset_0_1px_0_rgba(255,255,255,0.3)] hover:from-amber-500 hover:to-amber-700 hover:shadow-[0_5px_20px_rgba(245,158,11,0.6),inset_0_1px_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all duration-300",
                jewel: "bg-white/40 backdrop-blur-md border border-white/60 text-amber-900 shadow-[0_4px_20px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.8)] hover:bg-white/60 hover:shadow-[0_8px_25px_rgba(251,191,36,0.2),inset_0_1px_0_rgba(255,255,255,0.9)] hover:scale-105 transition-all duration-300",
                destructive:
                    "bg-red-500 text-destructive-foreground hover:bg-red-500/90",
                outline:
                    "border border-amber-200 bg-transparent hover:bg-amber-50 text-amber-900",
                secondary:
                    "bg-amber-100 text-amber-900 hover:bg-amber-200",
                ghost: "hover:bg-amber-50/50 text-amber-900 hover:text-amber-700",
                link: "text-amber-900 underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-14 rounded-full px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
