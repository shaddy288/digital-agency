// app/layout.tsx or app/home/page.tsx

import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "VR2 Digital | We Build Digital Businesses That Grow",
    template: "%s | VR2 Digital",
  },
  description:
    "VR2 Digital is a full-service digital agency offering web design, development, performance marketing, and growth strategy. We help startups, SMEs, and enterprises scale faster online.",
  keywords: [
    "VR2 Digital",
    "VR2 Digital Agency",
    "web design agency",
    "web development company",
    "digital marketing agency",
    "growth marketing",
    "performance marketing",
    "technology and development",
    "strategy and consulting",
    "digital agency for startups",
    "digital agency for enterprises",
    "digital agency for SMEs",
    "professional services agency",
    "scale business online",
    "digital growth partner",
    "build digital businesses",
    "from idea to scale",
    "best digital agency",
    "full service digital agency",
    "online business growth",
    "fintech web design",
  ],
  authors: [{ name: "VR2 Digital" }],
  creator: "VR2 Digital",
  openGraph: {
    title: "VR2 Digital | We Build Digital Businesses That Grow",
    description:
      "From idea to scale — VR2 Digital helps startups and businesses grow with cutting-edge web development, design, and performance marketing.",
    url: "https://yourdomain.com",
    siteName: "VR2 Digital",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VR2 Digital - Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR2 Digital | We Build Digital Businesses That Grow",
    description:
      "Full-service digital agency helping businesses scale with web dev, design & performance marketing.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};
