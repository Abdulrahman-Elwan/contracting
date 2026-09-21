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
      <head>
        <Script id="google-tag-manager">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PPL42R68');
          `}
        </Script>
      </head>

      <body className="font-arabic bg-white text-navy antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPL42R68"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
