import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zanunu.com'),
  title: {
    default: "Zanunu Portrait Studio - Professional Photography & Printing Services",
    template: "%s | Zanunu Portrait Studio",
  },
  description: "Capturing moments, creating memories. Professional photography and printing press services with excellence and artistry in Sierra Leone.",
  keywords: "photography, printing, studio, professional photography, printing services, Sierra Leone Photo Studio, Salone, Salone Photo Studio, Sierra Leone Photo Press, Salone Photo Press, wedding photography, portrait photography, event photography",
  authors: [{ name: "Zanunu Portrait Studio" }],
  creator: "Zanunu Portrait Studio",
  publisher: "Zanunu Portrait Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/zanunu-logo.jpg", type: "image/jpeg", sizes: "32x32" },
    ],
    apple: [
      { url: "/zanunu-logo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zanunu.com",
    siteName: "Zanunu Portrait Studio",
    title: "Zanunu Portrait Studio - Professional Photography & Printing Services",
    description: "Capturing moments, creating memories. Professional photography and printing press services with excellence and artistry.",
    images: [
      { 
        url: "/zanunu-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zanunu Portrait Studio - Professional Photography & Printing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zanunu Portrait Studio - Professional Photography & Printing Services",
    description: "Capturing moments, creating memories. Professional photography and printing services.",
    images: ["/zanunu-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <Navigation />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
