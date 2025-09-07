import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lufi & Chandra Wedding Invitation",
  description: "Join us as we celebrate our special day - September 21, 2025 at Baliantoro Villa, Yogyakarta",
  keywords: "wedding, invitation, Lufi, Chandra, September 2025, Yogyakarta, Baliantoro Villa",
  authors: [{ name: "Lufi & Chandra" }],
  openGraph: {
    title: "Lufi & Chandra Wedding Invitation",
    description: "Join us as we celebrate our special day - September 21, 2025",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lufi & Chandra Wedding Invitation",
    description: "Join us as we celebrate our special day - September 21, 2025",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
