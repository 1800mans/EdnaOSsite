import type { Metadata, Viewport } from "next";

import { createRootMetadata } from "@/lib/metadata";

import "./globals.css";

export const metadata: Metadata = createRootMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F7F4",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to Main Content
        </a>
        {children}
      </body>
    </html>
  );
}
