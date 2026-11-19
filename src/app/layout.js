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

const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  "@id": "https://gispp.edu.kh/#school",
  name: "GloLink International School Phnom Penh",
  alternateName: "GloLink School",
  url: "https://gispp.edu.kh",
  logo: "https://gispp.edu.kh/images/logo/glolink-logo.png",
  image: "https://gispp.edu.kh/images/SchoolBuilding.jpg",
  description:
    "GloLink International School Phnom Penh provides Christ-centered K-12 education through the Khmer National Program and International Program.",
  foundingDate: "2016",
  slogan: "Learning to lead, Leading to be light!",
  telephone: "+85515244757",
  email: "glolinkcambodia@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Building 131-1, Oknha Mong Reththy St. (1928)",
    addressLocality: "Phnom Penh",
    addressCountry: "KH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+85515244757",
    email: "glolinkcambodia@gmail.com",
    contactType: "admissions and general inquiries",
  },
  sameAs: ["https://t.me/GISPPC"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schoolSchema),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
