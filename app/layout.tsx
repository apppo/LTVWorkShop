import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SoftLaunch - Level Up Your Career With Essential Soft Skills",
  description: "Unlock your professional potential through expert coaching and proven resources for developing essential soft skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
