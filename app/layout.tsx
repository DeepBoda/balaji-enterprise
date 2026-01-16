import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Grain from "@/components/Grain";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Balaji Enterprise | Premium Organic Honey",
  description: "Experience the finest raw honey, ethically harvested from wild hives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          playfair.variable
        )}
      >
        <CartProvider>
          {/* <Grain /> */}
          <Preloader />
          <SmoothScroll />
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
