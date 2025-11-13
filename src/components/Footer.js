"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#fff1f1] text-[#514241] py-8 px-6 mt-12 border-t border-[#f2d6d4]">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Left: Logo + Brand */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/saramatic_logo.png"
                        alt="Saramatic logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="font-semibold text-lg font-sans">
                        Saramatic
                    </span>
                </div>

                {/* Middle: Optional Social Link Only */}
                <div className="flex gap-4 text-sm font-sans">
                    <Link
                        href="https://www.facebook.com/profile.php?id=61583476571040"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#fdc2c1] transition-colors"
                    >
                        Facebook
                    </Link>
                </div>

                {/* Right: Saramatic Way Phrase */}
                <div className="text-xs font-sans text-center sm:text-right leading-relaxed">
                    © {new Date().getFullYear()} Saramatic. <br className="sm:hidden" />
                    Grow through what’s real — The Saramatic Way.
                </div>

            </div>
        </footer>
    );
}
