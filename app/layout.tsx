import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

const siteUrl = "https://contracting-self.vercel.app/";

export const metadata: Metadata = {
  title: "مقاولات عامة وأعمال طرق وإنشاءات في السعودية",

  description:
    "نقدم خدمات المقاولات العامة وتنفيذ أعمال الطرق والإنشاءات والأسفلت وتجهيز المواقع والمشروعات في السعودية، مع الالتزام بالجودة والدقة ومتطلبات كل مشروع.",

  keywords: [
    "مقاولات عامة",
    "مقاول عام",
    "شركة مقاولات",
    "مقاولات في السعودية",
    "مقاولات عامة في السعودية",
    "مقاولات وإنشاءات",
    "أعمال المقاولات",
    "أعمال الإنشاءات",
    "تنفيذ مشاريع",
    "تنفيذ أعمال الطرق",
    "أعمال الطرق",
    "سفلتة طرق",
    "أعمال الأسفلت",
    "رصف الطرق",
    "تجهيز المواقع",
    "مشاريع البنية التحتية",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "مقاولات عامة وأعمال طرق وإنشاءات في السعودية",
    description:
      "خدمات متكاملة في المقاولات العامة وأعمال الطرق والأسفلت والإنشاءات وتجهيز المواقع، مع تنفيذ المشاريع وفق متطلباتها وبجودة عالية.",
    type: "website",
    locale: "ar_SA",
    siteName: "اسم النشاط",
  },

  twitter: {
    card: "summary_large_image",
    title: "مقاولات عامة وأعمال طرق وإنشاءات في السعودية",
    description:
      "حلول متكاملة في المقاولات العامة وأعمال الطرق والأسفلت والإنشاءات وتجهيز المواقع في السعودية.",
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
    </html>
  );
}
