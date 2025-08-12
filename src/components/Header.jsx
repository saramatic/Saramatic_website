"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Active link styling helper
    const linkClass = (path) =>
        `transition-colors hover:text-[#fdc2c1] ${pathname === path ? "text-[#fdc2c1] font-semibold" : "text-[#514241]"
        }`;

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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
                <Link href="/" className={linkClass("/")}>
                    Home
                </Link>
                <Link href="/about" className={linkClass("/about")}>
                    About Me
                </Link>
                <Link
                    href="https://www.etsy.com/shop/SaramaticDesigns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#514241] hover:text-[#fdc2c1] transition-colors"
                >
                    My Etsy Store
                </Link>
                <Link
                    href="https://medium.com/@saramatic7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#514241] hover:text-[#fdc2c1] transition-colors"
                >
                    My Blog
                </Link>
                <Link href="/contact" className={linkClass("/contact")}>
                    Contact
                </Link>
            </nav>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
                    {isOpen ? (
                        <X className="w-6 h-6 text-[#514241]" />
                    ) : (
                        <Menu className="w-6 h-6 text-[#514241]" />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-[72px] left-0 w-full bg-white z-40 flex flex-col items-center py-6 space-y-4 text-sm font-medium shadow-md">
                    <Link href="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link href="/about" className={linkClass("/about")} onClick={() => setIsOpen(false)}>
                        About Me
                    </Link>
                    <Link
                        href="https://www.etsy.com/shop/SaramaticDesigns"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#514241] hover:text-[#fdc2c1]"
                        onClick={() => setIsOpen(false)}
                    >
                        My Etsy Store
                    </Link>
                    <Link
                        href="https://medium.com/@sara_7321"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#514241] hover:text-[#fdc2c1]"
                        onClick={() => setIsOpen(false)}
                    >
                        My Blog
                    </Link>
                    <Link
                        href="/contact"
                        className={linkClass("/contact")}
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}
