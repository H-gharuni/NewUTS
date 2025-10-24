import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Unique Tech Solution - Innovative Business Solutions",
  description: "A leading semi-holding company specializing in educational technology and digital solutions through our strategic business units.",
  keywords: "Unique Tech Solution, mySmartTeach, Tennerpages, technology, education, digital solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
