import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "RR Design House | Luxury Interior Design Studio",
  description: "RR Design House is a luxury interior design studio committed to creating sophisticated and timeless spaces in Kochi, Ernakulam, and Thrissur.",
  keywords: "Interior Designer Kochi, Luxury Interior Design Kochi, Interior Designer Ernakulam, Interior Designer Thrissur, Residential Interior Design, Commercial Interior Design, Modular Kitchen Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#1f1f1f] bg-white">
        {children}
      </body>
    </html>
  );
}
