import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { SITE } from "./lib/site";

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
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: "Naturals Salon — Where Beauty Begins",
    template: "%s | Naturals Salon",
  },
  description:
    "Chennai's premier salon experience. Premium hair, skin, nail and bridal artistry, crafted by certified artists across three Chennai studios.",
  keywords:
    "naturals salon, hair salon chennai, beauty salon, haircut, hair colouring, balayage, keratin, hair spa, bridal makeup, nail art, facial, threading",
  authors: [{ name: "Naturals Salon" }],
  creator: "Naturals Salon",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Naturals Salon — Where Beauty Begins",
    description:
      "Chennai's most loved salon for over 15 years. Premium services, certified artists, three studios across the city.",
    url: "/",
    siteName: "Naturals Salon",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naturals Salon — Where Beauty Begins",
    description: "Premium hair, skin, nail and bridal artistry across Chennai.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "beauty",
};

export const viewport: Viewport = {
  themeColor: "#3B0764",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${jost.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ background: "var(--purple-deep)", color: "var(--white)" }}
      >
        {children}
      </body>
    </html>
  );
}
