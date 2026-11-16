import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

const description =
  "Aymen Ziouche is a Senior Flutter & mobile engineer from Annaba, Algeria. Former Senior Software Engineer at EasyA (1M+ downloads), building iOS & Android apps with Flutter, Firebase and native widgets.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ziouche.dev"),
  title: "Aymen Ziouche | Senior Flutter & Mobile Engineer",
  description,
  keywords: [
    "Aymen Ziouche",
    "Ziouche Aymen",
    "Flutter developer",
    "Senior Flutter engineer",
    "Mobile engineer",
    "Algeria",
    "Annaba",
  ],
  authors: [{ name: "Aymen Ziouche", url: "https://ziouche.dev" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "https://ziouche.dev",
    siteName: "Aymen Ziouche",
    title: "Aymen Ziouche | Senior Flutter & Mobile Engineer",
    description,
  },
  twitter: {
    card: "summary",
    title: "Aymen Ziouche | Senior Flutter & Mobile Engineer",
    description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aymen Ziouche",
  url: "https://ziouche.dev",
  jobTitle: "Senior Flutter & Mobile Engineer",
  email: "mailto:aymen@ziouche.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Annaba",
    addressCountry: "DZ",
  },
  sameAs: [
    "https://github.com/aymen-ziouche",
    "https://www.linkedin.com/in/aymen-ziouche",
  ],
  knowsAbout: ["Flutter", "Dart", "Firebase", "iOS", "Android", "Web3"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="light bg-gradient-to-bl from-[#6A43C4] from-10% to-[#BC97FC] to-85% "
      suppressHydrationWarning
    >
      <body
        className={
          ubuntu.className &&
          "bg-gradient-to-bl from-[#6A43C4] from-10% to-[#BC97FC] to-85% "
        }
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
