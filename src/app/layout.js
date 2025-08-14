import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
    title : "My app"
    
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
