"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";

import { services } from "@/data/services";

export default function ServicesInteractive() {
    const [activeService, setActiveService] = useState(services[0]);

    const ActiveServiceIcon = activeService.icon;

    return (
        <>
            {/* =====================================================
          BACKGROUND
      ====================================================== */}

            <motion.div
                initial={{
                    opacity: 0,
                    x: 100,
                }}
                whileInView={{
                    opacity: 0.12,
                    x: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 1.2,
                }}
                className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-orange blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-12">
                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.8fr] lg:gap-20">

                    {/* =================================================
              IMAGE / GALLERY
          ================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -80,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="order-2 lg:order-1"
                    >
                        {/* Main Image */}

                        <div className="relative overflow-hidden rounded-lg border border-white/20 bg-[#092536] p-1 shadow-[0_25px_70px_rgba(0,0,0,0.25)]">
                            <div className="relative aspect-[1.25/0.85] overflow-hidden rounded-md">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeService.id}
                                        initial={{
                                            opacity: 0,
                                            scale: 1.05,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.98,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                        }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={activeService.image}
                                            alt={activeService.title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 60vw"
                                            className="object-cover"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#061c2a]/90 via-transparent to-transparent" />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Active service info */}

                                <motion.div
                                    key={`info-${activeService.id}`}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    className="absolute bottom-5 right-5 left-5 sm:bottom-7 sm:right-7 sm:left-7"
                                >
                                    <div className="inline-flex items-center gap-3 rounded-lg bg-[#061c2a]/80 px-5 py-4 backdrop-blur-md">
                                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange text-[#061c2a]">
                                            <ActiveServiceIcon className="h-5 w-5" />
                                        </div>

                                        <div>
                                            <h3 className="text-[18px] font-black">
                                                {activeService.title}
                                            </h3>

                                            <p className="mt-1 max-w-[330px] text-[11px] leading-[1.8] text-white/65">
                                                {activeService.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* =================================================
                THUMBNAILS
            ================================================== */}

                        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                            {services.slice(0, 5).map((service, index) => {
                                const isActive = activeService.id === service.id;

                                return (
                                    <motion.button
                                        key={service.id}
                                        type="button"
                                        onClick={() => setActiveService(service)}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            delay: index * 0.08,
                                            duration: 0.5,
                                        }}
                                        whileHover={{
                                            y: -4,
                                        }}
                                        className={`relative h-[72px] w-[105px] shrink-0 overflow-hidden rounded-md border-2 transition-all duration-300 ${isActive
                                                ? "border-orange shadow-[0_5px_20px_rgba(255,126,0,0.2)]"
                                                : "border-white/10 opacity-60 hover:border-white/40 hover:opacity-100"
                                            }`}
                                    >
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="105px"
                                            className="object-cover"
                                        />

                                        {isActive && (
                                            <motion.div
                                                layoutId="activeThumbnail"
                                                className="absolute inset-0 border-2 border-orange"
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* =================================================
              SERVICES LIST
          ================================================== */}

                    <div className="order-1 lg:order-2">

                        {/* Small title */}

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
                            }}
                            transition={{
                                duration: 0.7,
                            }}
                            className="mb-3 flex items-center justify-end gap-3"
                            dir="ltr"
                        >
                            <span className="text-[13px] font-bold text-orange">
                                خدماتنا
                            </span>

                            <span className="h-[2px] w-10 bg-orange" />
                        </motion.div>

                        {/* Heading */}

                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1,
                            }}
                            className="text-[32px] font-black leading-[1.3] sm:text-[40px]"
                        >
                            كل ما تحتاجه
                            <br />
                            <span className="text-white">في مكان واحد</span>
                        </motion.h2>

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.2,
                            }}
                            className="mt-5 max-w-[470px] text-[13px] leading-[2] text-white/55"
                        >
                            نقدم خدمات متكاملة بجودة عالية وفريق متخصص يضع احتياجاته
                            في مقدمة أولوياته، من أعمال الطرق والأسفلت إلى الخدمات
                            المساندة والتشطيبات.
                        </motion.p>

                        {/* =================================================
                SERVICES
            ================================================== */}

                        <div className="mt-7 border-t border-white/10">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                const isActive = activeService.id === service.id;

                                return (
                                    <motion.button
                                        key={service.id}
                                        type="button"
                                        onClick={() => setActiveService(service)}
                                        initial={{
                                            opacity: 0,
                                            x: 35,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.1,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            delay: 0.25 + index * 0.04,
                                        }}
                                        className={`px-3 group flex w-full items-center gap-4 border-b border-white/10 py-3 text-right transition-all duration-300 ${isActive
                                                ? "bg-white/[0.03] text-orange"
                                                : "text-white hover:bg-white/[0.025]"
                                            }`}
                                    >
                                        {/* Arrow */}

                                        <ChevronLeft
                                            className={`h-4 w-4 shrink-0 transition-all duration-300 ${isActive
                                                    ? "translate-x-0 opacity-100 text-orange"
                                                    : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                                }`}
                                        />

                                        {/* Title */}

                                        <span
                                            className={`flex-1 text-[13px] font-bold transition-colors ${isActive
                                                    ? "text-orange"
                                                    : "text-white/80 group-hover:text-white"
                                                }`}
                                        >
                                            {service.title}
                                        </span>

                                        {/* Icon */}

                                        <span
                                            className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-all duration-300 ${isActive
                                                    ? "bg-orange text-[#061c2a]"
                                                    : "bg-white/5 text-orange group-hover:bg-orange/10"
                                                }`}
                                        >
                                            <Icon className="h-4 w-4" />
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}