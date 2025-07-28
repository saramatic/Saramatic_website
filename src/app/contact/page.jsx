// app/contact/page.jsx

import Image from "next/image";

export const metadata = {
    title: "Contact | Saramatic",
    description:
        "Reach out to Saramatic for collaborations, support, or just to say hello.",
};

export default function ContactPage() {
    return (
        <section className="bg-[#fff9f9] text-[#514241] py-16 px-6">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 font-sans">Contact</h1>
                <p className="text-lg mb-12 font-sans max-w-md mx-auto">
                    Have a question, want to collaborate, or simply want to share your
                    glow-up journey? I'd love to hear from you.
                </p>

                <div className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto flex flex-col items-center space-y-6">
                    {/* Logo */}
                    <Image
                        src="/saramatic_logo.png"
                        alt="Saramatic Logo"
                        width={80}
                        height={80}
                        className="rounded-full"
                    />

                    {/* Email */}
                    <div className="text-center">
                        <p className="font-semibold mb-1">Email</p>
                        <a
                            href="mailto:sara@saramatic.com"
                            className="text-[#c37b8a] hover:underline break-words"
                        >
                            sara@saramatic.com
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="text-center">
                        <p className="font-semibold mb-2">Find Me Online</p>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://www.etsy.com/shop/SaramaticDesigns"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#c37b8a] hover:underline"
                                >
                                    Etsy Shop
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://medium.com/@sara_7321"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#c37b8a] hover:underline"
                                >
                                    Medium Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
