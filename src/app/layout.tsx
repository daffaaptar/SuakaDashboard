import type { Metadata } from "next";
import { Nunito_Sans } from 'next/font/google';
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  fallback: ['Helvetica', 'sans-serif'], // Fallback font list
});


export const metadata: Metadata = {
  title: "Suaka Property Management",
  description: "Property management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}