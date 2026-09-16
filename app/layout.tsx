import type { Metadata } from "next";
import Script from "next/script";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مقاولات عامة وأعمال طرق وإنشاءات في السعودية",

  description:
    "نقدم خدمات المقاولات العامة وتنفيذ أعمال الطرق والإنشاءات والأسفلت وتجهيز المواقع والمشروعات في السعودية.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "مقاولات عامة وأعمال طرق وإنشاءات في السعودية",
    description:
      "خدمات متكاملة في المقاولات العامة وأعمال الطرق والأسفلت والإنشاءات وتجهيز المواقع.",
    type: "website",
    locale: "ar_SA",
    siteName: "اسم النشاط",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="font-arabic bg-white text-navy antialiased">
        {children}
      </body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18455231627"
        strategy="afterInteractive"
      />

      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            dataLayer.push(arguments);
          }

          gtag('js', new Date());
          gtag('config', 'AW-18455231627');
        `}
      </Script>
    </html>
  );
}
