"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
            {/* Logo + Brand */}
            <div className="flex items-center space-x-3">
                <Image
                    src="/saramatic_logo.png"
                    alt="Saramatic Logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
                <div className="flex flex-col">
                    <span className="text-xl font-bold text-[#514241] tracking-wide">
                        Saramatic
                    </span>
                    <span className="text-xs text-[#8a7471] uppercase tracking-[0.12em]">
                        The Saramatic Way
                    </span>
                </div>
            </div>

            {/* Right side: Coming Soon + Facebook link */}
            <div className="flex items-center gap-4">
                <span className="hidden sm:inline-block text-xs sm:text-sm px-3 py-1 rounded-full bg-[#fdeeee] text-[#8a7471] border border-[#fdc2c1]">
                    Coming Soon
                </span>
                <Link
                    href="https://www.facebook.com/profile.php?id=61583476571040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#514241] hover:text-[#fdc2c1] underline-offset-4 hover:underline"
                >
                    Follow on Facebook
                </Link>
            </div>
        </header>
    );
}
