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
        <section className="relative w-full overflow-hidden py-14 sm:py-16 lg:py-24">
            {/* =====================================================
                BACKGROUND GLOW
            ====================================================== */}

            <motion.div
                initial={{
                    opacity: 0,
                    x: 100,
                }}
                whileInView={{
                    opacity: 0.1,
                    x: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 1.2,
                }}
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-20
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-orange
                    blur-[100px]
                    sm:h-[450px]
                    sm:w-[450px]
                    lg:h-[550px]
                    lg:w-[550px]
                "
            />

            {/* =====================================================
                MAIN CONTAINER
            ====================================================== */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    max-w-[1350px]
                    px-4
                    sm:px-6
                    md:px-8
                    lg:px-10
                    xl:px-12
                "
            >
                <div
                    className="
                        flex
                        w-full
                        flex-col
                        gap-10
                        lg:grid
                        lg:grid-cols-[0.95fr_1.05fr]
                        lg:items-start
                        lg:gap-16
                        xl:grid-cols-[0.9fr_1.1fr]
                        xl:gap-20
                    "
                >
                    {/* =================================================
                        SERVICES CONTENT
                    ================================================== */}

                    <div
                        className="
                            order-1
                            min-w-0
                            w-full
                            lg:order-2
                        "
                    >
                        {/* Small title */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            dir="ltr"
                            className="
                                mb-3
                                flex
                                items-center
                                justify-end
                                gap-2
                                sm:gap-3
                            "
                        >
                            <span
                                className="
                                    text-[12px]
                                    font-bold
                                    text-orange
                                    sm:text-[13px]
                                "
                            >
                                خدماتنا
                            </span>

                            <span
                                className="
                                    h-[2px]
                                    w-7
                                    bg-orange
                                    sm:w-10
                                "
                            />
                        </motion.div>

                        {/* Heading */}

                        <motion.h2
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
                            }}
                            className="
                                text-right
                                text-[28px]
                                font-black
                                leading-[1.35]
                                sm:text-[34px]
                                md:text-[38px]
                                lg:text-[40px]
                                xl:text-[44px]
                            "
                        >
                            كل ما تحتاجه
                            <br />
                            <span className="text-white">
                                في مكان واحد
                            </span>
                        </motion.h2>

                        {/* Description */}

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 15,
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
                            className="
                                mt-4
                                max-w-[560px]
                                text-right
                                text-[12px]
                                leading-[2]
                                text-white/55
                                sm:mt-5
                                sm:text-[13px]
                                lg:max-w-[500px]
                            "
                        >
                            نقدم خدمات متكاملة بجودة عالية وفريق متخصص يضع
                            احتياجاته في مقدمة أولوياته، من أعمال الطرق
                            والأسفلت إلى الخدمات المساندة والتشطيبات.
                        </motion.p>

                        {/* =================================================
                            SERVICES LIST
                        ================================================== */}

                        <div
                            className="
                                mt-6
                                w-full
                                overflow-hidden
                                rounded-lg
                                border-t
                                border-white/10
                                sm:mt-8
                            "
                            dir="rtl"
                        >
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                const isActive =
                                    activeService.id === service.id;

                                return (
                                    <motion.button
                                        key={service.id}
                                        type="button"
                                        onClick={() =>
                                            setActiveService(service)
                                        }
                                        initial={{
                                            opacity: 0,
                                            x: 25,
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
                                            duration: 0.4,
                                            delay:
                                                0.15 +
                                                index * 0.035,
                                        }}
                                        className={`
                                            group
                                            flex
                                            min-h-[54px]
                                            w-full
                                            items-center
                                            gap-3
                                            border-b
                                            border-white/10
                                            px-3
                                            py-2.5
                                            text-right
                                            transition-all
                                            duration-300
                                            sm:min-h-[60px]
                                            sm:px-4
                                            sm:py-3

                                            ${
                                                isActive
                                                    ? "bg-white/[0.055]"
                                                    : "hover:bg-white/[0.025]"
                                            }
                                        `}
                                    >
                                        {/* Icon */}

                                        <span
                                            className={`
                                                grid
                                                h-8
                                                w-8
                                                shrink-0
                                                place-items-center
                                                rounded-md
                                                transition-all
                                                duration-300
                                                sm:h-9
                                                sm:w-9
                                                sm:rounded-lg

                                                ${
                                                    isActive
                                                        ? "bg-orange text-[#061c2a]"
                                                        : "bg-white/5 text-orange group-hover:bg-orange/10"
                                                }
                                            `}
                                        >
                                            <Icon className="h-4 w-4 sm:h-[17px] sm:w-[17px]" />
                                        </span>

                                        {/* Title */}

                                        <span
                                            className={`
                                                min-w-0
                                                flex-1
                                                text-[12px]
                                                font-bold
                                                transition-colors
                                                sm:text-[13px]
                                                ${
                                                    isActive
                                                        ? "text-orange"
                                                        : "text-white/80 group-hover:text-white"
                                                }
                                            `}
                                        >
                                            {service.title}
                                        </span>

                                        {/* Arrow */}

                                        <ChevronLeft
                                            className={`
                                                h-4
                                                w-4
                                                shrink-0
                                                transition-all
                                                duration-300

                                                ${
                                                    isActive
                                                        ? "translate-x-0 opacity-100 text-orange"
                                                        : "-translate-x-1 opacity-40 group-hover:translate-x-0 group-hover:opacity-100"
                                                }
                                            `}
                                        />
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    {/* =================================================
                        IMAGE / GALLERY
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
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                            order-2
                            min-w-0
                            w-full
                            lg:order-1
                        "
                    >
                        {/* Main Gallery */}

                        <div
                            className="
                                w-full
                                overflow-hidden
                                rounded-xl
                                border
                                border-white/15
                                bg-[#092536]
                                p-1
                                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                                sm:rounded-2xl
                                sm:p-1.5
                            "
                        >
                            <div
                                className="
                                    relative
                                    aspect-[4/3]
                                    w-full
                                    overflow-hidden
                                    rounded-lg
                                    sm:aspect-[16/10]
                                    lg:aspect-[4/3]
                                    xl:aspect-[16/10]
                                "
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeService.id}
                                        initial={{
                                            opacity: 0,
                                            scale: 1.03,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.99,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                        }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={activeService.image}
                                            alt={activeService.title}
                                            fill
                                            priority
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 55vw"
                                            className="
                                                object-cover
                                                object-center
                                            "
                                        />

                                        {/* Gradient */}

                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                bg-gradient-to-t
                                                from-[#061c2a]
                                                via-[#061c2a]/10
                                                to-transparent
                                            "
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* =================================================
                                    SERVICE INFO
                                ================================================== */}

                                <motion.div
                                    key={`info-${activeService.id}`}
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                    }}
                                    className="
                                        absolute
                                        bottom-2
                                        left-2
                                        right-2
                                        sm:bottom-4
                                        sm:left-4
                                        sm:right-4
                                        lg:bottom-5
                                        lg:left-5
                                        lg:right-5
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2.5
                                            rounded-lg
                                            border
                                            border-white/10
                                            bg-[#061c2a]/80
                                            px-2.5
                                            py-2.5
                                            backdrop-blur-md
                                            sm:gap-3
                                            sm:px-4
                                            sm:py-3
                                            lg:px-5
                                            lg:py-4
                                        "
                                        dir="rtl"
                                    >
                                        {/* Icon */}

                                        <div
                                            className="
                                                grid
                                                h-8
                                                w-8
                                                shrink-0
                                                place-items-center
                                                rounded-full
                                                bg-orange
                                                text-[#061c2a]
                                                sm:h-10
                                                sm:w-10
                                            "
                                        >
                                            <ActiveServiceIcon
                                                className="
                                                    h-4
                                                    w-4
                                                    sm:h-5
                                                    sm:w-5
                                                "
                                            />
                                        </div>

                                        {/* Text */}

                                        <div className="min-w-0 flex-1">
                                            <h3
                                                className="
                                                    truncate
                                                    text-[12px]
                                                    font-black
                                                    sm:text-[15px]
                                                    lg:text-[17px]
                                                "
                                            >
                                                {activeService.title}
                                            </h3>

                                            <p
                                                className="
                                                    mt-0.5
                                                    line-clamp-1
                                                    text-[9px]
                                                    leading-[1.7]
                                                    text-white/60
                                                    sm:mt-1
                                                    sm:line-clamp-2
                                                    sm:text-[10px]
                                                    lg:text-[11px]
                                                "
                                            >
                                                {
                                                    activeService.description
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* =================================================
                            THUMBNAILS
                        ================================================== */}

                        <div
                            className="
                                mt-3
                                flex
                                w-full
                                gap-2
                                overflow-x-auto
                                pb-1
                                sm:mt-4
                                sm:gap-3
                                sm:pb-2
                            "
                            style={{
                                scrollbarWidth: "none",
                            }}
                        >
                            {services
                                .slice(0, 5)
                                .map((service, index) => {
                                    const isActive =
                                        activeService.id ===
                                        service.id;

                                    return (
                                        <motion.button
                                            key={service.id}
                                            type="button"
                                            onClick={() =>
                                                setActiveService(
                                                    service
                                                )
                                            }
                                            initial={{
                                                opacity: 0,
                                                y: 15,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                delay:
                                                    index *
                                                    0.06,
                                                duration: 0.4,
                                            }}
                                            whileHover={{
                                                y: -3,
                                            }}
                                            className={`
                                                relative
                                                h-[58px]
                                                w-[82px]
                                                shrink-0
                                                overflow-hidden
                                                rounded-md
                                                border
                                                transition-all
                                                duration-300

                                                sm:h-[70px]
                                                sm:w-[100px]
                                                sm:rounded-lg
                                                sm:border-2

                                                ${
                                                    isActive
                                                        ? "border-orange opacity-100 shadow-[0_5px_20px_rgba(255,126,0,0.2)]"
                                                        : "border-white/10 opacity-60 hover:border-white/30 hover:opacity-100"
                                                }
                                            `}
                                        >
                                            <Image
                                                src={
                                                    service.image
                                                }
                                                alt={
                                                    service.title
                                                }
                                                fill
                                                sizes="100px"
                                                className="object-cover"
                                            />

                                            {/* Active overlay */}

                                            {isActive && (
                                                <div
                                                    className="
                                                        absolute
                                                        inset-0
                                                        border-2
                                                        border-orange
                                                    "
                                                />
                                            )}
                                        </motion.button>
                                    );
                                })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}