import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jobmee.in"),
  title: "JobMee | Find Jobs and Hire Employees in Kerala",
  description:
    "Find jobs in Kerala or connect with employees for your business. Explore opportunities in hospitality, cleaning, events, retail, delivery, office support, IT, and more.",
  openGraph: {
    title: "JobMee | Find Jobs and Hire Employees in Kerala",
    description:
      "Find jobs in Kerala or connect with employees for your business.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
