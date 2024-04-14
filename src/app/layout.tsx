import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["800", "600", "400"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | FAQ accordion",
  description: "Frontend Mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-lightPink`}>{children}</body>
    </html>
  );
}
