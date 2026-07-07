import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "GetFanique Factory", description: "Custom Fans" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="antialiased bg-brand-dark text-white">{children}</body></html>);
}
