import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import { ToastProvider } from "@/components/ui/ToastProvider";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/ui/CustomCursor";
import FluidBackground from "@/components/ui/FluidBackground";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL('https://balaji-enterprise.com'), // Replace with actual domain if known, or localhost for now
  title: {
    default: "Balaji Enterprise | Premium Organic Honey",
    template: "%s | Balaji Enterprise"
  },
  description: "Experience the finest raw honey, ethically harvested from the wild hives of Gir Forest. Pure, unprocessed, and rich in natural enzymes.",
  keywords: ["Organic Honey", "Raw Honey", "Gir Forest Honey", "Premium Honey", "Balaji Enterprise", "Natural Sweetener", "Ayurvedic Honey", "Wild Honey"],
  authors: [{ name: "Balaji Enterprise" }],
  creator: "Balaji Enterprise",
  publisher: "Balaji Enterprise",
  openGraph: {
    title: "Balaji Enterprise | Premium Organic Honey",
    description: "Experience the finest raw honey, ethically harvested from the wild hives of Gir Forest.",
    url: 'https://balaji-enterprise.com',
    siteName: 'Balaji Enterprise',
    images: [
      {
        url: '/images/home-hero.png', // Using our best asset
        width: 1200,
        height: 630,
        alt: 'Balaji Enterprise Premium Honey',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Balaji Enterprise | Premium Organic Honey",
    description: "Experience the finest raw honey, ethically harvested from wild hives.",
    images: ['/images/home-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
          <ToastProvider>
            <FluidBackground />
            <CustomCursor />
            <Preloader />
            <SmoothScroll />
            {children}
            <CartDrawer />
            <BackToTop />
            <WhatsAppCTA />
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}
