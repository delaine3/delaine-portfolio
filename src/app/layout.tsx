import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/src/components/SiteHeader";
import { SiteFooter } from "@/src/components/SiteFooter";

export const metadata: Metadata = {
  title: "Delaine | Full-Stack Developer",
  description:
    "Delaine is a full-stack developer building Next.js, React, TypeScript, Supabase and Java applications. Available for remote, fixed-scope development work.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
