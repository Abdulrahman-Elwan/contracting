"use client";

import { motion } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

import { testimonials } from "@/data/testimonials";
import { useState } from "react";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const total = testimonials.length;

  const go = (direction: 1 | -1) => {
    setActive((current) => (current + direction + total) % total);
  };

  const getIndex = (offset: number) => {
    return (active + offset + total) % total;
  };

  return (
    <section
      id="testimonials"
      dir="rtl"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-orange/5 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#dce5e8] blur-3xl" />

        <div className="absolute left-[8%] top-[30%] h-40 w-40 rounded-full border border-[#082333]/5" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-12">

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
          className="mx-auto mb-14 max-w-[700px] text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-orange" />

            <span className="text-sm font-bold text-orange">
              آراء عملائنا
            </span>

            <span className="h-[2px] w-10 bg-orange" />
          </div>

          <h2 className="text-[32px] font-black leading-[1.3] text-[#082333] sm:text-[42px]">
            ثقة عملائنا هي
            <span className="text-orange"> نجاحنا الحقيقي</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[580px] text-sm leading-[2] text-slate-500 sm:text-base">
            نفخر بثقة عملائنا ونسعى دائمًا لتقديم خدمة تليق بتوقعاتهم
            وتترك تجربة تستحق أن تُحكى.
          </p>
        </motion.div>

        {/* ===================================================
            TESTIMONIALS
        ==================================================== */}

        <div className="relative">

          {/* Desktop / Tablet */}

          <div className="hidden items-center justify-center gap-5 md:flex lg:gap-7">

            {[-1, 0, 1].map((offset) => {
              const testimonial = testimonials[getIndex(offset)];
              const isActive = offset === 0;

              return (
                <motion.article
                  key={`${testimonial.id}-${offset}`}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  animate={{
                    scale: isActive ? 1.04 : 0.94,
                    opacity: isActive ? 1 : 0.72,
                    y: isActive ? -8 : 0,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`
                    relative flex min-h-[330px]
                    w-full max-w-[390px]
                    flex-1 flex-col
                    rounded-[26px]
                    border
                    p-7
                    shadow-[0_20px_50px_rgba(6,28,42,0.08)]
                    ${isActive
                      ? "border-orange/30 bg-[#061c2a] shadow-[0_25px_60px_rgba(6,28,42,0.18)]"
                      : "border-slate-200 bg-white"
                    }
                  `}
                >

                  {/* Top */}

                  <div className="flex items-start justify-between">

                    <div
                      className={`
                        grid h-12 w-12 place-items-center rounded-xl
                        ${isActive
                          ? "bg-orange/10 text-orange"
                          : "bg-orange/10 text-orange"
                        }
                      `}
                    >
                      <Quote className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Quote */}

                  <blockquote
                    className={`
                      mt-7 flex-1 text-[15px]
                      font-medium leading-[2]
                      ${isActive
                        ? "text-white/80"
                        : "text-slate-600"
                      }
                    `}
                  >
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Stars */}

                  <div
                    className="mt-6 flex items-center gap-1"
                    aria-label={`${testimonial.rating} من 5 نجوم`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`
                          h-4 w-4
                          ${i < testimonial.rating
                            ? "fill-orange text-orange"
                            : isActive
                              ? "text-white/10"
                              : "text-slate-200"
                          }
                        `}
                      />
                    ))}
                  </div>

                  {/* Client */}

                  <div
                    className={`
                      mt-5 border-t pt-5
                      ${isActive
                        ? "border-white/10"
                        : "border-slate-100"
                      }
                    `}
                  >
                    <div
                      className={`
                        text-sm font-black
                        ${isActive
                          ? "text-white"
                          : "text-[#082333]"
                        }
                      `}
                    >
                      {testimonial.name}
                    </div>
                  </div>

                  {/* Active accent */}

                  {isActive && (
                    <motion.span
                      layoutId="testimonial-active"
                      className="absolute bottom-0 right-8 left-8 h-[3px] rounded-full bg-orange"
                    />
                  )}
                </motion.article>
              );
            })}
          </div>

          {/* =================================================
              MOBILE
          ================================================== */}

          <div className="md:hidden">

            <motion.article
              key={testimonials[active].id}
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative min-h-[350px] rounded-[26px] bg-[#061c2a] p-7 shadow-[0_25px_60px_rgba(6,28,42,0.16)]"
            >
              <div className="flex items-start justify-between">

                <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange/10 text-orange">
                  <Quote className="h-6 w-6" />
                </div>

                <span className="text-[11px] font-black text-white/20">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>
              </div>

              <blockquote className="mt-7 text-[16px] font-medium leading-[2] text-white/80">
                "{testimonials[active].quote}"
              </blockquote>

              <div className="mt-7 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonials[active].rating
                        ? "fill-orange text-orange"
                        : "text-white/10"
                      }`}
                  />
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="text-sm font-black text-white">
                  {testimonials[active].name}
                </div>

                <div className="mt-1 text-[11px] text-white/40">
                  عميل من المملكة العربية السعودية
                </div>
              </div>
            </motion.article>

          </div>

          {/* =================================================
              CONTROLS
          ================================================== */}

          <div className="mt-9 flex items-center justify-center gap-4">

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="الرأي السابق"
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-[#082333] shadow-sm transition-all duration-300 hover:border-orange hover:bg-orange"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Dots */}

            <div className="flex items-center gap-1.5">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.id}
                  type="button"
                  aria-label={`عرض رأي ${i + 1}`}
                  onClick={() => setActive(i)}
                  className="p-1"
                >
                  <motion.span
                    animate={{
                      width: i === active ? 25 : 7,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`
                      block h-[7px] rounded-full
                      ${i === active
                        ? "bg-orange"
                        : "bg-slate-300 hover:bg-slate-400"
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="الرأي التالي"
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-[#082333] shadow-sm transition-all duration-300 hover:border-orange hover:bg-orange"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}