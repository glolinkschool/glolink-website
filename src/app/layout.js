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
    default:
      "GloLink International School Phnom Penh | Christ-Centered Education",
    template: "%s | GloLink School",
  },

  description:
    "Discover GloLink International School Phnom Penh, providing Christ-centered K-12 education through the International Program and Khmer National Program. Learning to lead, Leading to be light!",

  applicationName: "GloLink International School",

  icons: {
    icon: "/images/logo/gis_logo_white_bg.png",
  },

  keywords: [
    "GloLink International School Phnom Penh",
    "International School Phnom Penh",
    "Private School Phnom Penh",
    "Christian School Cambodia",
    "Christ-Centered Education",
    "International Education Cambodia",
    "Western Australian Curriculum Cambodia",
    "Khmer National Program",
    "K-12 Education Phnom Penh",
  ],

  authors: [
    {
      name: "GloLink International School Phnom Penh",
    },
  ],

  openGraph: {
    title:
      "GloLink International School Phnom Penh | Christ-Centered Education",
    description:
      "Learning to lead, Leading to be light! Discover Christ-centered K-12 education at GloLink International School Phnom Penh.",
    siteName: "GloLink International School Phnom Penh",
    locale: "en_US",
    type: "website",
    url: "https://gispp.edu.kh",
  },

  twitter: {
    card: "summary_large_image",
    title: "GloLink International School Phnom Penh",
    description:
      "Christ-centered K-12 education through the International Program and Khmer National Program.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
