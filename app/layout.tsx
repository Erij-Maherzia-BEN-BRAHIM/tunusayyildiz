import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tunus Ayyıldız Topluluğu",
  description:
    "Tunus Ayyıldız Topluluğu Tunus ve Afrika'da yabancı dil olarak Türkçe öğrenen gönüllü ö?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "max-h-screen")}>
        <Navbar />
        <div className="h-screen flex justify-center mx-auto p-12 items-center bg-slate-50">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
