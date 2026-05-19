import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteBackdrop } from "@/components/SiteBackdrop";
import { CursorDot } from "@/components/CursorDot";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Formidable Functions.ai — AI front desk for PT and chiro clinics",
  description:
    "Your AI front desk that never sleeps. Every new patient inquiry answered in under 30 seconds. Every appointment booked automatically. 24/7.",
  metadataBase: new URL("https://formidablefunctions.ai"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrainsMono.variable}`}>
      <body>
        <SiteBackdrop />
        <CursorDot />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
