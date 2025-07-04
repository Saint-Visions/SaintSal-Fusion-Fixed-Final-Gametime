import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaintSal™ Empire - AI Command Console",
  description:
    "Divine execution engine for Saint Vision Technologies. AI agent and digital executor.",
  keywords: "AI, SaintSal, Saint Vision, PartnerTech, CRM, automation",
  authors: [{ name: "Saint Vision Technologies" }],
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#FFC700",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="min-h-screen bg-black">{children}</div>
      </body>
    </html>
  );
}
