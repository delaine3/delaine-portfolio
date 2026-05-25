import type { Metadata } from "next";
import "./globals.css";
import { FractalFlowBackground } from "../components/FractalFlowBackground";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Delaine | Full-Stack Developer",
  description:
    "Portfolio for Delaine, a full-stack developer building thoughtful web applications with React, Next.js, TypeScript, Java, Spring Boot, PostgreSQL, and Supabase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FractalFlowBackground />
        <SiteHeader />
        <main className="relative">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
