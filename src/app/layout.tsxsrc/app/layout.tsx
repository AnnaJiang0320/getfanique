import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Custom Event Fans Manufacturer | GetFanique Factory Direct",
  description: "Global supplier of custom folding fans, clack fans, and promotional hand fans. Low MOQ, fast shipping, and factory direct pricing for events and brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-brand-dark text-white">
        {children}
      </body>
    </html>
  );
}
