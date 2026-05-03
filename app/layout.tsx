import type { Metadata } from "next";
import { Sora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteTitle = "Gopi Janjanam | Technical Lead - Intelligent Automation";
const siteDescription =
  "Portfolio of Gopi Janjanam, Technical Lead in Intelligent Automation, showcasing enterprise RPA delivery, AI-powered automation, and scalable bot architecture.";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://example.com",
    siteName: "Gopi Janjanam Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Gopi Janjanam portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
