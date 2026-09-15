import Image from "next/image";
import { BadgeDollarSign, Clock3, Users, Wrench } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { number } from "@/data/info";
import heroImage from "../assets/1. Hero Truck Photo.png";
import HeroReveal from "./_UI/HeroReveal";

const indicators = [
  {
    icon: Wrench,
    label: "معدات متطورة",
    subLabel: "لتنفيذ دقيق واحترافي",
  },
  {
    icon: Users,
    label: "فريق متخصص",
    subLabel: "خبرة في تنفيذ المشاريع",
  },
  {
    icon: Clock3,
    label: "التزام بالمواعيد",
    subLabel: "سرعة في تنفيذ الأعمال",
  },
  {
    icon: BadgeDollarSign,
    label: "أسعار تنافسية",
    subLabel: "جودة تستحق الثقة",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#061c2a]"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="مقاولات عامة وأعمال أسفلت وطرق في السعودية"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[68%_center]
            sm:object-[65%_center]
            lg:object-center
          "
        />

        {/* Overall dark layer */}
        <div className="absolute inset-0 bg-[#061c2a]/30" />

        {/* Strong content-side overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-l
            from-[#061c2a]/95
            via-[#061c2a]/65
            via-[55%]
            to-[#061c2a]/10
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute inset-x-0 bottom-0 h-[45%]
            bg-gradient-to-t
            from-[#061c2a]
            via-[#061c2a]/65
            to-transparent
          "
        />

        {/* Top fade */}
        <div
          className="
            absolute inset-x-0 top-0 h-40
            bg-gradient-to-b
            from-[#061c2a]/85
            to-transparent
          "
        />

        {/* Mobile extra overlay */}
        <div className="absolute inset-0 bg-[#061c2a]/10 sm:hidden" />
      </div>

      {/* =====================================================
          DECORATIVE LINE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-transparent via-orange/20 to-transparent lg:block" />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative z-10 mx-auto flex min-h-[100svh]
          max-w-[1440px]
          items-center
          px-5
          pb-[235px]
          pt-[115px]
          sm:px-8
          sm:pb-[210px]
          lg:px-12
          lg:pb-[180px]
          xl:px-16
        "
      >
        <div className="w-full max-w-[760px] text-right">

          {/* =================================================
              EYEBROW
          ================================================== */}

          <HeroReveal delay={0}>
            <div
              className="
                mb-5
                flex
                items-center
                justify-end
                gap-3
                sm:mb-6
              "
              dir="ltr"
            >
              <span className="h-[2px] w-10 rounded-full bg-orange sm:w-16" />

              <p className="text-[12px] font-extrabold tracking-wide text-orange sm:text-[15px] lg:text-[16px]">
                مقاولات عامة وأعمال أسفلت وتشطيبات متكاملة
              </p>
            </div>
          </HeroReveal>

          {/* =================================================
              TITLE
          ================================================== */}

          <HeroReveal direction="right" delay={0.1}>
            <h1
              id="hero-title"
              className="
                font-black
                leading-[1.08]
                tracking-[-0.03em]
                text-white
              "
            >
              <span
                className="
                  block
                  text-[clamp(40px,8vw,76px)]
                "
              >
                ننفذ مشروعك
              </span>

              <span
                className="
                  mt-3
                  block
                  text-[clamp(40px,8vw,76px)]
                  text-orange
                "
              >
                بجودة تدوم
              </span>
            </h1>
          </HeroReveal>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <HeroReveal direction="right" delay={0.2}>
            <p
              className="
                mt-6
                max-w-[650px]
                text-[14px]
                font-medium
                leading-[2]
                text-white/75
                sm:mt-7
                sm:text-[16px]
                lg:text-[17px]
              "
            >
              نقدم خدمات المقاولات العامة وأعمال الأسفلت والطرق والعوازل
              والتشطيبات والدهانات والسيراميك، بالإضافة إلى أعمال الهدم
              والسباكة وتنظيف ودفن البيارات، مع فريق متخصص ومعدات حديثة
              لضمان تنفيذ الأعمال بكفاءة وجودة عالية.
            </p>
          </HeroReveal>

          {/* =================================================
              CTA
          ================================================== */}

          <HeroReveal direction="up" delay={0.3}>
            <div
              className="
                mt-7
                flex
                flex-col
                justify-center
                gap-3
                sm:mt-8
                sm:flex-row
                sm:justify-start
              "
            >
              {/* Primary CTA */}

              <a
                href={`tel:+${number}`}
                aria-label="اتصل الآن لطلب خدمات المقاولات العامة وأعمال الأسفلت"
                className="
                  focus-ring
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-orange
                  px-7
                  text-[14px]
                  font-black
                  text-[#082333]
                  shadow-[0_12px_35px_rgba(255,126,0,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-orange/90
                  hover:shadow-[0_16px_40px_rgba(255,126,0,0.35)]
                  active:translate-y-0
                  sm:px-8
                  sm:text-[15px]
                "
              >
                <span>اطلب عرض سعر</span>

                <span
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  "
                >
                  ←
                </span>
              </a>

              {/* WhatsApp */}

              <a
                href={`https://wa.me/${number}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل معنا عبر واتساب لطلب خدمات المقاولات"
                className="
                  focus-ring
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/30
                  bg-[#061c2a]/20
                  px-7
                  text-[14px]
                  font-bold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/60
                  hover:bg-white/10
                  sm:px-8
                  sm:text-[15px]
                "
              >
                <FaWhatsapp
                  className="
                    h-5
                    w-5
                    text-white
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span>تواصل عبر واتساب</span>
              </a>
            </div>
          </HeroReveal>
        </div>
      </div>

      {/* =====================================================
          BOTTOM INDICATORS
      ====================================================== */}

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div
          className="
            mx-auto
            flex
            max-w-[1440px]
            justify-end
            px-5
            sm:px-8
            lg:px-12
            xl:px-16
          "
        >
          <div
            className="
              mx-auto
              mb-5
              grid
              w-full
              max-w-[850px]
              grid-cols-2
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#061c2a]/50
              backdrop-blur-md
              sm:grid-cols-4
              sm:rounded-3xl
            "
          >
            {indicators.map(
              ({ icon: Icon, label, subLabel }, index) => (
                <HeroReveal
                  key={label}
                  direction="up"
                  delay={0.45 + index * 0.08}
                  className="h-full"
                >
                  <div
                    className="
                      group
                      flex
                      min-h-[82px]
                      items-center
                      justify-center
                      gap-3
                      border-b
                      border-l
                      border-white/10
                      px-3
                      py-4
                      text-center
                      transition-all
                      duration-300
                      hover:bg-white/[0.06]
                      sm:min-h-[100px]
                      sm:border-b-0
                      sm:px-4
                    "
                  >
                    <div className="flex flex-col items-center">

                      <Icon
                        strokeWidth={1.8}
                        className="
                          mb-2
                          h-5
                          w-5
                          text-orange
                          transition-all
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:scale-110
                          sm:h-6
                          sm:w-6
                        "
                      />

                      <span
                        className="
                          text-[11px]
                          font-extrabold
                          text-white/90
                          sm:text-[13px]
                        "
                      >
                        {label}
                      </span>

                      <span
                        className="
                          mt-1
                          text-[9px]
                          font-medium
                          text-white/50
                          sm:text-[11px]
                        "
                      >
                        {subLabel}
                      </span>
                    </div>
                  </div>
                </HeroReveal>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}