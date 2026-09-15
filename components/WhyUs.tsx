"use client";
import { whyUsFeatures } from "@/data/whyUs";
import { motion } from "framer-motion";
export default function WhyUs() {
  return (
    <section
      id="why-us"
      dir="rtl"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
      BACKGROUND DECORATION
  ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#e9eef0] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange/[0.04] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">

        {/* =====================================================
        SECTION HEADER
    ====================================================== */}

        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">

          {/* Heading */}
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-[700px]"
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 rounded-full bg-orange" />

              <span className="text-sm font-extrabold text-orange">
                لماذا نحن؟
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-[32px] font-black leading-[1.3] tracking-tight text-[#061c2a] sm:text-[42px] lg:text-[48px]">
              لأن نجاح مشروعك
              <br />

              <span className="text-orange">
                يبدأ من اختيارك الصحيح
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-[430px] lg:pb-1"
          >
            <p className="text-sm leading-[2] text-slate-500 sm:text-[15px]">
              نعمل على تقديم حلول متكاملة تجمع بين الخبرة والمعدات
              الحديثة وسرعة التنفيذ، مع الحرص على أن يحصل كل عميل
              على خدمة موثوقة تناسب احتياجاته.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
        DIVIDER
    ====================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-14 origin-right  sm:mt-16"
        />

        {/* =====================================================
        FEATURES
    ====================================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {whyUsFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
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
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`
              group
              relative
              min-h-[230px]
              px-6
              py-9
              transition-all
              duration-300
              sm:px-7
              lg:px-8
              lg:py-10

              ${index < 2 ? "border-b border-slate-200" : ""}

              ${index % 2 === 0 ? "sm:border-l sm:border-slate-200" : ""}

              lg:border-b-0

              ${index !== 0 ? "lg:border-r lg:border-slate-200" : ""}
            `}
              >
                {/* =================================================
                TOP ROW
            ================================================== */}

                <div className="flex items-start justify-between">

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-orange/10
                  text-orange
                  transition-all
                  duration-300
                  group-hover:bg-orange
                  group-hover:text-[#061c2a]
                "
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                    />
                  </motion.div>
                </div>

                {/* =================================================
                CONTENT
            ================================================== */}

                <div className="mt-7">

                  <h3
                    className="
                  text-[16px]
                  font-black
                  text-[#061c2a]
                  transition-colors
                  duration-300
                  group-hover:text-orange
                "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                  mt-3
                  max-w-[230px]
                  text-xs
                  leading-[2]
                  text-slate-400
                "
                  >
                    {feature.description}
                  </p>

                </div>

                {/* =================================================
                BOTTOM ACCENT
            ================================================== */}

                <div
                  className="
                absolute
                bottom-0
                right-6
                h-[2px]
                w-0
                rounded-full
                bg-orange
                transition-all
                duration-500
                group-hover:w-12
              "
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}