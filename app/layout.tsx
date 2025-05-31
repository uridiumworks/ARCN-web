import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Head from "next/head"
import { Providers } from "@/components/providers"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Official ARCN",
    default: "ARCN",
  },
  description:
    "The Agricultural Research Council of Nigeria (ARCN) is the national institution driving agricultural research, innovation, and food security in Nigeria.",
  keywords: [
    "ARCN",
    "Agricultural Research Council of Nigeria",
    "agriculture research Nigeria",
    "food security",
    "Nigeria agriculture",
    "federal agriculture agency",
  ],
  openGraph: {
    title: "Agricultural Research Council of Nigeria (ARCN)",
    description:
      "Discover how ARCN leads agricultural research and innovation in Nigeria to promote sustainable farming and food security.",
    url: "https://arcn.gov.ng", // update with your actual domain
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} font-sans`}>
      <Head>
        {/* Structured data (JSON-LD) for ARCN */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentOrganization",
              name: "Agricultural Research Council of Nigeria",
              alternateName: "ARCN",
              url: "https://arcn.gov.ng", // update this
              description:
                "The Agricultural Research Council of Nigeria (ARCN) is the apex government agency for coordinating agricultural research across Nigeria.",
            }),
          }}
        />
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
