import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Naturals Salon — Where Beauty Begins",
  description:
    "Chennai's premier salon experience. Transformations crafted with artistry, care, and a touch of the extraordinary.",
  keywords: "naturals salon, hair salon, beauty salon, haircut, hair coloring, balayage, hair spa, Chennai",
  openGraph: {
    title: "Naturals Salon — Where Beauty Begins",
    description: "Chennai's most loved salon for over 15 years. Premium services, expert artists.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} h-full`}>
      <body className="min-h-full flex flex-col" style={{ background: "var(--purple-deep)", color: "var(--white)" }}>
        {children}
      </body>
    </html>
  );
}
