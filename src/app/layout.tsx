import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Carter_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const carterOne = Carter_One({
  variable: "--font-carter-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "PopChoice",
  description: "An app for searching info on interesting movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
