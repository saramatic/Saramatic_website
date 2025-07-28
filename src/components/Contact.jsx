"use client";

import { Youtube, PenTool, Mail, Video } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="bg-[#fff9f9] text-[#514241] py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 font-sans">Let’s Connect</h2>
                <p className="text-lg mb-12 font-sans max-w-2xl mx-auto">
                    Whether you're vibing with the glow-up or want to collab, here’s where to find me:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* YouTube */}
                    <a
                        href="https://youtube.com/@Saramatic"
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
                        href="https://tiktok.com/@Saramatic"
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
                        href="https://medium.com/@Saramatic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
                    >
                        <PenTool className="w-8 h-8 text-[#fdc2c1] mb-2" />
                        <h3 className="font-semibold font-sans">Medium</h3>
                        <p className="text-sm font-sans">Read the transformation journey</p>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:sara@saramatic.com"
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
                    >
                        <Mail className="w-8 h-8 text-[#fdc2c1] mb-2" />
                        <h3 className="font-semibold font-sans">Email</h3>
                        <p className="text-sm font-sans">sara@saramatic.com</p>
                    </a>
                </div>
            </div>
        </section>
    );
}
