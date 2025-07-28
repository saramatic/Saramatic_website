// Footer update test

"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#fff1f1] text-[#514241] py-8 px-6 mt-12 border-t border-[#f2d6d4]">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left: Logo and Brand */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/saramatic_logo.png"
                        alt="Saramatic logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="font-semibold text-lg font-sans">Saramatic</span>
                </div>

                {/* Middle: Navigation */}
                <nav className="flex flex-wrap justify-center gap-4 text-sm font-sans">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="#about" className="hover:underline">About</Link>
                    <Link href="#freebie" className="hover:underline">Freebie</Link>
                    <Link href="#contact" className="hover:underline">Contact</Link>
                </nav>

                {/* Right: Motto / Copyright */}
                <div className="text-xs font-sans text-center sm:text-right">
                    © {new Date().getFullYear()} Saramatic. <br className="sm:hidden" />
                    Structure your glow-up with love & clarity.
                </div>
            </div>
        </footer>
    );
}
