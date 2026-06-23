import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SwRegister } from "./sw-register";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leaderlms.io"),
  title: "LeaderLMS — Training built for field leaders",
  description: "Onboard faster, train smarter, and duplicate your top leaders. LeaderLMS delivers courses, certifications, and compliance training built for network marketing and direct sales teams.",
  applicationName: "LeaderLMS",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "LeaderLMS",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    siteName: "LeaderLMS",
    title: "LeaderLMS — Training built for field leaders.",
    description: "Onboard faster, train smarter, and duplicate your top leaders. Built for network marketing and direct sales teams.",
    url: "https://leaderlms.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeaderLMS — Training built for field leaders.",
    description: "Onboard faster, train smarter, and duplicate your top leaders. Built for network marketing and direct sales teams.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1b2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SwRegister />
      </body>
    </html>
  );
}
