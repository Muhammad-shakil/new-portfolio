import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadshakil.dev"),
  title: "Muhammad Shakil — Full-Stack Developer & CRM Specialist",
  description:
    "Full-Stack Developer specializing in Laravel, ASP.NET Core, Next.js, and Dynamics 365. Building scalable web apps, secure fintech platforms, and CRM automation.",
  keywords: [
    "Muhammad Shakil",
    "Full-Stack Developer",
    "Laravel",
    "ASP.NET Core",
    "Next.js",
    "Dynamics 365",
    "CRM",
    "PowerApps",
    "Zoho",
    "Lahore",
  ],
  authors: [{ name: "Muhammad Shakil" }],
  openGraph: {
    title: "Muhammad Shakil — Full-Stack Developer & CRM Specialist",
    description:
      "Full-Stack Developer specializing in Laravel, ASP.NET Core, Next.js, and Dynamics 365. Building scalable web apps, secure fintech platforms, and CRM automation.",
    type: "profile",
    url: "/",
    siteName: "Muhammad Shakil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Shakil — Full-Stack Developer & CRM Specialist",
    description:
      "Full-Stack Developer specializing in Laravel, ASP.NET Core, Next.js, and Dynamics 365. Building scalable web apps, secure fintech platforms, and CRM automation.",
  },
  other: {
    "theme-color": "#0f2027",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Shakil",
              jobTitle: "Full-Stack Developer & CRM Specialist",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressCountry: "PK",
              },
              telephone: "+92-307-1234567",
              knowsAbout: [
                "PHP",
                "Laravel",
                "ASP.NET Core",
                "Next.js",
                "Microsoft Dynamics 365",
                "Zoho CRM",
                "PowerApps",
                "AWS",
                "Docker",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "NCBA&E University, Lahore",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
