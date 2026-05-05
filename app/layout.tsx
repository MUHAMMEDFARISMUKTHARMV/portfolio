import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammed Faris Mukthar M V — ML Engineer & AI Systems Builder",
  description:
    "ML/AI Engineer specialising in end-to-end AI systems — model training, REST APIs, web dashboards, mobile apps, and edge deployments.",
  openGraph: {
    title: "Muhammed Faris Mukthar M V",
    description: "ML Engineer · AI Systems Builder · Edge AI Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${dmSans.variable} ${dmSerifDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-[#f0f0f5] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
