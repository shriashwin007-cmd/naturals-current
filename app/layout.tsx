import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Naturals Signature Salon — Premium Beauty Experience",
  description:
    "Experience luxury hair and beauty services at Naturals Signature Salon. Expert stylists, premium products, and a transformative salon experience.",
  keywords: "naturals salon, hair salon, beauty salon, haircut, hair coloring, balayage, hair spa, Chennai",
  openGraph: {
    title: "Naturals Signature Salon",
    description: "Premium hair and beauty services. Book your appointment today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1a0a2e]">
        {children}
      </body>
    </html>
  );
}
