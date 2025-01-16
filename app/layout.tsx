import type { Metadata } from "next";
import "./globals.css";
import React, {ReactNode} from "react";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Chandan Portfolio",
  description: "Portfolio Website",
};

const poppins = Poppins({
    subsets: ["latin", "latin-ext"],
    style: ["italic", "normal"],
    preload: true,
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${poppins.className} dark`}
      >
        {children}
      </body>
    </html>
  );
}
