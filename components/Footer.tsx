export default function Footer() {
    return (
        <footer className="bg-[#051D40] text-white py-20 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <span className="text-3xl font-serif font-bold tracking-tight text-amber-500 block">
                        Balaji Enterprice
                    </span>
                    <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
                        Delivering nature's finest, ethically sourced honey directly to your doorstep. Pure, raw, and full of life.
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="text-lg font-bold text-white">Quick Shop</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Raw Honey</a></li>
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Infused Honey</a></li>
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Gift Boxes</a></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-lg font-bold text-white">Support</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Track Order</a></li>
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Shipping Policy</a></li>
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; 2024 Balaji Enterprice. All rights reserved.</p>
                <div className="flex gap-6">
                    <span className="hover:text-gray-400 cursor-pointer">Privacy</span>
                    <span className="hover:text-gray-400 cursor-pointer">Terms</span>
                </div>
            </div>
        </footer>
    );
}
