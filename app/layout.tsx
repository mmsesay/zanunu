import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zanunu Studio - Professional Photography & Printing Services",
  description: "Capturing moments, creating memories. Professional photography and printing press services with excellence and artistry.",
  keywords: "photography, printing, studio, professional photography, printing services, Sierra Leone Photo Studio, Salone, Salone Photo Studio, Sierra Leone Photo Press, Salone Photo Press",
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
    title: "Zanunu Studio - Professional Photography & Printing Services",
    description: "Capturing moments, creating memories. Professional photography and printing press services with excellence and artistry.",
    images: [
      { url: "/zanunu-logo.jpg" },
    ],
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
        <Navigation />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
