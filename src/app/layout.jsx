import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Andicode Invoice",
  description:
  "Free online invoice generator to create GST and non-GST invoices instantly. Add your logo, auto-calculate taxes, download professional PDF invoices, and manage billing easily—no login required. Ideal for freelancers and businesses in India.",
  
  verification: {
    google: "b0YkiHWRwBZMc32FZhPvvpG7o-XF9g6ZLJXJ_TRYnvI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {/* Google Identity Script */}
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}