import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Products from "@/components/Products";
import Purity from "@/components/Purity";
import Footer from "@/components/Footer";

export default function ProductsPage() {
    return (
        <>
            <main className="relative z-10 bg-[#FFFBF0] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Navbar />
                <PageHero
                    title="The Collection"
                    subtitle="Small batch, wild-harvested, and completely raw. A taste of the forest in every jar."
                    image="https://images.unsplash.com/photo-1558583055-d7ac00b1adca?q=80&w=1974&auto=format&fit=crop"
                />
                <Products />
                <Products />
                <Purity />
            </main>
            <Footer />
        </>
    );
}
