import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Story from "@/components/Story";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <>
            <main className="relative z-10 bg-[#FFFBF0] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Navbar />
                <PageHero
                    title="Our Journey"
                    subtitle="From the untouched canopy of the Gir forest to your table. A story of preservation, passion, and purity."
                    image="https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=2080&auto=format&fit=crop"
                />
                <Story />
                <Story />
                <Process />
            </main>
            <Footer />
        </>
    );
}
