import "./globals.css";
import { Nunito_Sans } from "next/font/google";

// ✅ Font config
const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700"],
});

// ✅ Metadata (SEO + Social Preview)
export const metadata = {
  metadataBase: new URL("https://www.saramatic.com"), // Update when live
  title: "Saramatic | Welcome",
  description: "Your glow-up journey starts here—powered by Saramatic.",
  keywords: [
    "Glow-up",
    "wellness",
    "healing",
    "self-care",
    "AI coach",
    "fitness journey",
    "mental reset",
    "Saramatic",
  ],
  openGraph: {
    title: "Saramatic | Welcome",
    description: "Your glow-up journey starts here—powered by Saramatic.",
    url: "https://www.saramatic.com",
    siteName: "Saramatic",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Saramatic Glow-Up Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saramatic | Welcome",
    description: "Your glow-up journey starts here—powered by Saramatic.",
    images: ["/social-preview.png"],
    creator: "@saramatic", // optional
  },
};

// ✅ Root layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon (optional here if you also have /favicon.ico in public) */}
        <link rel="icon" href="/saramaticLogo2.png" />
      </head>
      <body
        className={`${nunito.variable} font-sans antialiased bg-[#fff1f1] text-[#514241]`}
      >
        {children}
      </body>
    </html>
  );
}
