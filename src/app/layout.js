import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "../components/ScrolltoTop";
import CookieConsent from "../components/CookieConsent"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  "title": "Beneficent Care & Support",
  "description": "Home of Humility, Love and Generosity",
  "keywords": "home care, private carer, support services, healthcare, London, UK, Beneficent, West London, Harrow, Stanmore, domiciliary care",
  "author": "Beneficent Care and Support",
  "robots": "index, follow",
  "copyright": "© 2025 Beneficent Care and Support",
  "application-name": "Beneficent",
  "theme-color": "#0f766e",
  
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
        <CookieConsent />
        <ScrollToTop />
      </body>
    </html>
  );
}
