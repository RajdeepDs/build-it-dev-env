import "@buildit/ui/styles.css";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@buildit/ui";

const HelveticaNowText = localFont({
  src: [
    {
      path: "./fonts/HelveticaNowText-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/HelveticaNowText-Light.otf",
      style: "light",
      weight: "300",
    },
    {
      path: "./fonts/HelveticaNowText-Medium.otf",
      style: "medium",
      weight: "500",
    },
    {
      path: "./fonts/HelveticaNowText-Bold.otf",
      style: "bold",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-helvetica-now-text",
});

export const metadata: Metadata = {
  title: "BuildIt",
  description: "A development environment for Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html
      lang="en"
      className={`${HelveticaNowText.variable} ${GeistMono.variable}`}
    >
      <body className="bg-faded text-white">
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
