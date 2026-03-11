import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fieldsalesstack.com"),
  title: {
    default: "FieldSalesStack — Curated Tech Stacks for Field Sales Teams",
    template: "%s | FieldSalesStack.com",
  },
  description:
    "Discover the best software stack for your field sales team. Curated tool combinations by industry and team size — with real pricing and honest reviews.",
  keywords: [
    "field sales software stack",
    "field sales tech stack",
    "door to door sales tools",
    "field sales CRM",
    "canvassing software",
    "field sales apps",
  ],
  openGraph: {
    type: "website",
    siteName: "FieldSalesStack.com",
    title: "FieldSalesStack — Curated Tech Stacks for Field Sales Teams",
    description:
      "Discover the best software stack for your field sales team. Curated tool combinations by industry and team size — with real pricing and honest reviews.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FieldSalesStack — Curated Tech Stacks for Field Sales Teams",
    description:
      "Discover the best software stack for your field sales team. Curated tool combinations by industry and team size.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FieldSalesStack.com",
  url: "https://www.fieldsalesstack.com",
  description:
    "Curated tech stacks for field sales teams by industry and team size.",
  sameAs: ["https://www.fieldsalestools.com"],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
