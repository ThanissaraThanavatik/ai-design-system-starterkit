import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { WebsiteHeader } from "./components/website-header";
import { WebsiteFooter } from "./components/website-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Website - Powered by shadcn/ui",
  description: "A modern responsive website built with Next.js, shadcn/ui components, and Tailwind CSS",
  keywords: ["nextjs", "shadcn", "ui", "tailwind", "responsive", "modern"],
};

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          themes={['light', 'dark', 'primary', 'system']}
        >
          <div className="relative flex min-h-screen flex-col">
            <WebsiteHeader />
            <main className="flex-1">{children}</main>
            <WebsiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
