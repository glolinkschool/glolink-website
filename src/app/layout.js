import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://gispp.edu.kh"),

  title: {
    default: "GloLink School",
    template: "%s | GloLink International School",
  },

  description:
    "GloLink International School Phnom Penh provides Christ-centered K-12 education through the International Program and Khmer National Program.",
  icons: {
    icon: "/images/logo/gis_logo_white_bg.png",
  },
  keywords: [
    "GloLink International School",
    "International School Phnom Penh",
    "School in Phnom Penh",
    "International Education Cambodia",
    "Western Australian Curriculum Cambodia",
    "Khmer National Program",
    "Christian School Phnom Penh",
  ],

  openGraph: {
    title: "GloLink International School Phnom Penh",
    description:
      "Learning to lead, Leading to be light! Discover Christ-centered education at GloLink International School Phnom Penh.",
    siteName: "GloLink International School",
    locale: "en_US",
    type: "website",
    url: "https://gispp.edu.kh",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
