"use client";

import { Youtube, PenTool, Mail, Video, ShoppingBag, Heart } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="bg-[#fff9f9] text-[#514241] py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 font-sans">Let’s Connect</h2>
                <p className="text-lg mb-12 font-sans max-w-2xl mx-auto">
                    Whether you're vibing with the glow-up or want to collab, here’s where to find me:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {/* YouTube */}
                    <a
                        href="https://www.youtube.com/@saramatic7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
                    >
                        <Youtube className="w-8 h-8 text-[#fdc2c1] mb-2" />
                        <h3 className="font-semibold font-sans">YouTube</h3>
                        <p className="text-sm font-sans">Watch glow-up content</p>
                    </a>

                    {/* TikTok */}
                    <a
                        href="https://www.tiktok.com/@saramatic53?lang=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
                    >
                        <Video className="w-8 h-8 text-[#fdc2c1] mb-2" />
                        <h3 className="font-semibold font-sans">TikTok</h3>
                        <p className="text-sm font-sans">Follow for micro glow-ups</p>
                    </a>

                    {/* Medium */}
                    <a
                        href="https://medium.com/@sara_7321"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
                    >
                        <PenTool className="w-8 h-8 text-[#fdc2c1] mb-2" />
                        <h3 className="font-semibold font-sans">Medium</h3>
                        <p className="text-sm font-sans">Read the transformation journey</p>
                    </a>

                    {/* Pinterest */}
                    <a
                        href="https://www.pinterest.com/Saramatic7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
                    >
                        <Heart className="w-8 h-8 text-[#fdc2c1] mb-2" />
                        <h3 className="font-semibold font-sans">Pinterest</h3>
                        <p className="text-sm font-sans">Inspiration & wellness boards</p>
                    </a>

                    {/* Etsy */}
                    <a
                        href="https://www.etsy.com/shop/SaramaticDesigns"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
                    >
                        <ShoppingBag className="w-8 h-8 text-[#fdc2c1] mb-2" />
                        <h3 className="font-semibold font-sans">Etsy</h3>
                        <p className="text-sm font-sans">Shop digital products</p>
                    </a>
                </div>
            </div>
        </section>
    );
}
