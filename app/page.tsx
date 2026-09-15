import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ServicesShowcase from "@/components/ServicesShowcase";
import SolutionsSection from "@/components/SolutionsSection";

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

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        تخطي إلى المحتوى الرئيسي
      </a>

      <Navbar />

      <main id="main">

        {/* الرئيسية */}
        <section id="home" className="scroll-mt-[80px]">
          <Hero />
        </section>

        {/* خدماتنا */}
        <section
          id="services"
          className="scroll-mt-[80px]"
        >
          <ServicesShowcase />
        </section>

        {/* حلولنا */}
        <section
          id="solutions"
          className="scroll-mt-[80px]"
        >
          <SolutionsSection />
        </section>

        {/* لماذا نحن */}
        <section
          id="why-us"
          className="scroll-mt-[80px]"
        >
          <WhyUs />
        </section>

        {/* آراء العملاء */}
        <section
          id="testimonials"
          className="scroll-mt-[80px]"
        >
          <Testimonials />
        </section>

        {/* تواصل معنا */}
        <section
          id="contact"
          className="scroll-mt-[80px]"
        >
          <Contact />
        </section>

      </main>

      <Footer />

      <FloatingActions />
    </>
  );
}
