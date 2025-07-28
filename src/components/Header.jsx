// components/Header.jsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <Image
                    src="/saramatic_logo.png"
                    alt="Saramatic Logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
                <span className="text-xl font-bold text-[#514241] tracking-wide">
                    Saramatic
                </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6 text-sm text-[#514241] font-medium">
                <Link href="#features" className="hover:text-[#fdc2c1] transition-colors">
                    Features
                </Link>
                <Link href="#pricing" className="hover:text-[#fdc2c1] transition-colors">
                    Pricing
                </Link>
                <Link href="#contact" className="hover:text-[#fdc2c1] transition-colors">
                    Contact
                </Link>
            </nav>
        </header>
    );
}
