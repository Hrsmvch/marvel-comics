import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Marvel Comics",
  description: "Marvel comics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
