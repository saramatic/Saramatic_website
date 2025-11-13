// app/layout.js

import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Font config
const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700"],
});

// Metadata (SEO + Social Preview)
export const metadata = {
  metadataBase: new URL("https://www.saramatic.com"),
  title: "Saramatic | The Saramatic Way",
  description:
    "A new approach to affirmations and self-growth. Weekly Shadow Affirmations, daily Light Affirmations, and guided ChatGPT journaling — The Saramatic Way.",
  keywords: [
    "affirmations",
    "Shadow affirmations",
    "Light affirmations",
    "self-growth",
    "self-reflection",
    "journaling",
    "ChatGPT prompts",
    "Saramatic",
    "The Saramatic Way",
  ],
  openGraph: {
    title: "Saramatic | The Saramatic Way",
    description:
      "Affirmations that finally make sense — weekly Shadow focus, daily Light encouragement, and guided ChatGPT journaling. Coming soon.",
    url: "https://www.saramatic.com",
    siteName: "Saramatic",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Saramatic Affirmation Planner Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saramatic | The Saramatic Way",
    description:
      "A new kind of affirmation planner with weekly Shadow focus, daily Light affirmations, and ChatGPT journaling prompts.",
    images: ["/social-preview.png"],
    // creator: "@saramatic", // you can fill this in later if you want
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/saramaticLogo2.png" />
      </head>
      <body
        className={`${nunito.variable} font-sans antialiased bg-[#fff1f1] text-[#514241]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
