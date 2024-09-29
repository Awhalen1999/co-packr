import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "CoPackr",
  description:
    "Easily plan and customize your packing lists for stress-free travel.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "CoPackr",
    description:
      "Easily plan and customize your packing lists for stress-free travel.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CoPackr",
    description:
      "Easily plan and customize your packing lists for stress-free travel."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
