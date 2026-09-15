"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowUp,
} from "lucide-react";

import logo from "../assets/logo.png";
import { locatiom, number } from "@/data/info";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#services", label: "خدماتنا" },
  { href: "#gallery", label: "أعمالنا" },
  { href: "#sectors", label: "المناطق" },
  { href: "#testimonials", label: "آراء عملائنا" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-[#041722] text-white"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-orange/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">
        {/* ===================================================
            MAIN FOOTER
        ==================================================== */}

        <div className="grid gap-12 border-b border-white/10 py-14 sm:py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-16">
          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            <Link
              href="/"
              className="inline-flex rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50"
            >
              <Image
                src={logo}
                alt="مقاولات عامة"
                width={400}
                height={200}
                className="h-auto w-[150px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-[420px] text-sm leading-[2] text-white/45">
              نقدم خدمات متكاملة في المقاولات العامة وأعمال الطرق والأسفلت وتجهيز
              المواقع، من خلال فريق متخصص وإمكانيات مناسبة لتنفيذ المشروعات بكفاءة
              ودقة، مع الالتزام بالجودة ومتطلبات كل مشروع.
            </p>

            {/* CTA */}

            <a
              href={`tel:+${number}`}
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-orange px-5 py-3 text-sm font-black text-[#041722] transition-all duration-300 hover:-translate-y-1 hover:bg-orange/90"
            >
              <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />

              اتصل بنا الآن

              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </a>
          </div>

          {/* =================================================
              LINKS
          ================================================== */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-orange" />

              <h3 className="text-sm font-black text-white">
                روابط سريعة
              </h3>
            </div>

            <nav className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-orange/50 transition-all duration-300 group-hover:w-3" />

                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-orange" />

              <h3 className="text-sm font-black text-white">
                تواصل معنا
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {/* Phone */}

              <a
                href={`tel:+${number}`}
                className="group flex items-center gap-3 text-sm text-white/45 transition-colors duration-300 hover:text-white"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/5 text-orange">
                  <Phone className="h-4 w-4" />
                </span>

                <span dir="ltr">+{number}</span>
              </a>

              {/* WhatsApp */}

              <a
                href={`https://wa.me/${number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white/45 transition-colors duration-300 hover:text-white"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/5 text-orange">
                  <MessageCircle className="h-4 w-4" />
                </span>

                <span dir="ltr">واتساب</span>
              </a>

              {/* Location */}

              <div className="flex items-center gap-3 text-sm text-white/45">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/5 text-orange">
                  <MapPin className="h-4 w-4" />
                </span>

                <span>{locatiom}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM
        ==================================================== */}

        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs text-white/30 sm:text-right">
            © {new Date().getFullYear()} ثقتكم هدفنا. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}