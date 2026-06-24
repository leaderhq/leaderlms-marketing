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
  title: "LeaderLMS — Professional Training for Network Marketing Teams",
  description: "Stop running your team trainings in a Facebook group. LeaderLMS gives your team 21+ certified trainings, bilingual support, quizzes, and completion certificates — ready on day one.",
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
    title: "The smarter way to train and grow your team.",
    description: "Stop running your team trainings in a Facebook group. LeaderLMS gives your team 21+ certified trainings, bilingual support, quizzes, and completion certificates — ready on day one.",
    url: "https://leaderlms.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "The smarter way to train and grow your team.",
    description: "Stop running your team trainings in a Facebook group. LeaderLMS gives your team 21+ certified trainings, bilingual support, quizzes, and completion certificates — ready on day one.",
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
