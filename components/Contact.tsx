"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock3,
  ArrowLeft,
} from "lucide-react";

import { locatiom, number } from "@/data/info";

export default function Contact() {
  return (
    <section
      id="contact"
      dir="rtl"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-orange/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#061c2a]/[0.04] blur-3xl" />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          {/* Heading */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 rounded-full bg-orange" />

              <span className="text-sm font-extrabold text-orange">
                تواصل معنا
              </span>
            </div>

            <h2 className="mt-5 text-[32px] font-black leading-[1.3] tracking-tight text-[#061c2a] sm:text-[42px] lg:text-[48px]">
              جاهزين نخدمك
              <br />

              <span className="text-orange">
                في أي وقت
              </span>
            </h2>
          </div>

          {/* Description */}

          <div className="max-w-[450px] lg:pb-1">
            <p className="text-sm leading-[2] text-slate-500 sm:text-[15px]">
              عندك مشكلة أو تحتاج إلى خدمة؟ تواصل معنا وسنساعدك
              في اختيار الحل المناسب وتنفيذ الخدمة باحترافية
              وسرعة.
            </p>
          </div>
        </motion.div>

        {/* ===================================================
            CONTACT LAYOUT
        ==================================================== */}

        <div className="grid overflow-hidden border-y border-slate-200 lg:grid-cols-[0.85fr_1.15fr]">

          {/* =================================================
              CONTACT INFO
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              flex
              flex-col
              justify-between
              bg-[#061c2a]
              px-7
              py-10
              sm:px-10
              sm:py-12
              lg:px-12
              lg:py-14
            "
          >
            {/* Glow */}

            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />

            {/* =================================================
                INTRO
            ================================================== */}

            <div className="relative">

              <span className="text-xs font-bold text-orange">
                خدمة سريعة وموثوقة
              </span>

              <h3 className="mt-4 text-[27px] font-black leading-[1.45] text-white sm:text-[32px]">
                كل ما تحتاجه
                <br />

                <span className="text-orange">
                  في مكان واحد
                </span>
              </h3>

              <p className="mt-4 max-w-[390px] text-sm leading-[2] text-white/50">
                فريق متخصص جاهز لاستقبال طلباتكم وتنفيذ خدمات
                الصرف الصحي بسرعة وكفاءة، للمنازل والمنشآت.
              </p>
            </div>

            {/* =================================================
                CONTACT ITEMS
            ================================================== */}

            <div className="relative mt-10 space-y-2">

              {/* Phone */}

              <a
                href={`tel:+${number}`}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  border-b
                  border-white/10
                  py-5
                  transition-all
                  duration-300
                  hover:pr-2
                "
              >
                <span
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange/10
                    text-orange
                    transition-all
                    duration-300
                    group-hover:bg-orange
                    group-hover:text-[#061c2a]
                  "
                >
                  <Phone className="h-5 w-5" />
                </span>

                <span className="min-w-0">
                  <span className="block text-[11px] text-white/35">
                    اتصل بنا
                  </span>

                  <span
                    dir="ltr"
                    className="mt-1 block text-sm font-bold text-white"
                  >
                    +{number}
                  </span>
                </span>

                <ArrowLeft
                  className="
                    mr-auto
                    h-4
                    w-4
                    text-orange
                    opacity-0
                    -translate-x-2
                    transition-all
                    duration-300
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />
              </a>

              {/* WhatsApp */}

              <a
                href={`https://wa.me/${number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  border-b
                  border-white/10
                  py-5
                  transition-all
                  duration-300
                  hover:pr-2
                "
              >
                <span
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange/10
                    text-orange
                    transition-all
                    duration-300
                    group-hover:bg-orange
                    group-hover:text-[#061c2a]
                  "
                >
                  <MessageCircle className="h-5 w-5" />
                </span>

                <span>
                  <span className="block text-[11px] text-white/35">
                    واتساب
                  </span>

                  <span
                    dir="ltr"
                    className="mt-1 block text-sm font-bold text-white"
                  >
                    +{number}
                  </span>
                </span>

                <ArrowLeft
                  className="
                    mr-auto
                    h-4
                    w-4
                    text-orange
                    opacity-0
                    -translate-x-2
                    transition-all
                    duration-300
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />
              </a>

              {/* Location */}

              <div className="flex items-center gap-4 border-b border-white/10 py-5">
                <span
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange/10
                    text-orange
                  "
                >
                  <MapPin className="h-5 w-5" />
                </span>

                <span>
                  <span className="block text-[11px] text-white/35">
                    موقعنا
                  </span>

                  <span className="mt-1 block text-sm font-bold text-white">
                    {locatiom}
                  </span>
                </span>
              </div>

              {/* Working hours */}

              <div className="flex items-center gap-4 py-5">
                <span
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange/10
                    text-orange
                  "
                >
                  <Clock3 className="h-5 w-5" />
                </span>

                <span>
                  <span className="block text-[11px] text-white/35">
                    مواعيد الخدمة
                  </span>

                  <span className="mt-1 block text-sm font-bold text-white">
                    متاحون 24 ساعة
                  </span>
                </span>
              </div>
            </div>

            {/* Bottom */}

            <div className="relative mt-8 border-t border-white/10 pt-5">
              <span className="text-[11px] font-bold text-white/30">
                ثقتكم هدفنا — وخدمتكم مسؤوليتنا
              </span>
            </div>
          </motion.div>

          {/* =================================================
              MAP
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              min-h-[420px]
              bg-slate-200
              lg:min-h-[650px]
            "
          >
            {/* MAP */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d257365.1429930704!2d50.09939599759621!3d26.368443196482623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e361d32276b3403%3A0xefd901ec7a5e5676!2z2KfZhNiv2YXYp9mFINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1789451910092!5m2!1sar!2seg"
              title="موقعنا على الخريطة"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            {/* MAP LABEL */}

            <div
              className="
                pointer-events-none
                absolute
                right-5
                top-5
                flex
                items-center
                gap-2
                rounded-xl
                bg-[#061c2a]/90
                px-4
                py-3
                text-xs
                font-bold
                text-white
                shadow-lg
                backdrop-blur-md
              "
            >
              <MapPin className="h-4 w-4 text-orange" />

              موقعنا على الخريطة
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}