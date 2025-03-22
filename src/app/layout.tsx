import type { Metadata, Viewport } from "next";
import "./globals.css";
import { MainLayout } from "@/components/layouts/main-layout";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
  colorScheme: "light dark"
};

export const metadata: Metadata = {
  title: "Ben's Template",
  description: "A modern website template built with Next.js and Tailwind CSS",
  authors: [{ name: "Ben Ortiz" }],
  generator: "Next.js",
  applicationName: "Ben's Template",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Website Template"],
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}