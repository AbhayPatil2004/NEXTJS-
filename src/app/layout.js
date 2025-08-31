"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/themeProvider"; // corrected import


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
          {children}
        
      </body>
    </html>
  );
}
