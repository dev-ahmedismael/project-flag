import { Geist, Geist_Mono } from "next/font/google"; // استيراد الخطوط
import "./globals.css";
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./Footer";
import FooterImg from "./FooterImg";

// تعريف الخطوط باستخدام next/font
const geistSans = Geist({
  variable: "--font-geist-sans", // تعريف المتغير لخط Geist
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // تعريف المتغير لخط Geist Mono
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* روابط preconnect لتحسين تحميل الخطوط */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
        <FooterImg />
      </body>
    </html>
  );
}
