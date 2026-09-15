"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { solutions } from "@/data/solutions";

export default function SolutionsInteractive() {
    return (
        <>
            {/* =====================================================
              BACKGROUND DECORATION
            ====================================================== */}

            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2 }}
                className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#dce6e9]"
            />

            {/* =====================================================
              CONTAINER
            ====================================================== */}

            <div className="relative z-10 mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-12">
                <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-14">

                    {/* =================================================
                      TITLE
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
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-center lg:text-right"
                    >
                        {/* Small title */}
                        <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
                            <span className="h-[2px] w-10 bg-orange" />

                            <span className="text-[14px] font-bold text-orange">
                                حلول متكاملة للمقاولات والطرق
                            </span>
                        </div>

                        <h2 className="text-[34px] font-black leading-[1.25] text-[#082333] sm:text-[42px]">
                            حلول متكاملة
                            <br />
                            لأعمال الطرق والمقاولات
                        </h2>

                        <p className="mx-auto mt-5 max-w-[470px] text-[14px] leading-[2] text-slate-500 lg:mx-0">
                            نقدم حلولًا متكاملة في مجال أعمال الطرق والأسفلت والمقاولات العامة،
                            تشمل تنفيذ وصيانة الطرق، أعمال السفلتة والرصف، وتجهيز المواقع والمشروعات
                            الإنشائية، إلى جانب مجموعة من الخدمات المساندة التي تساعد على تنفيذ
                            المشروعات بكفاءة وجودة عالية وفق متطلبات كل مشروع.
                        </p>
                    </motion.div>

                    {/* =================================================
                      CARDS
                    ================================================== */}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                        {solutions.map((solution, index) => (
                            <motion.article
                                key={solution.number}
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.15,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(8,35,51,0.06)]"
                            >
                                {/* Image */}
                                <div className="relative h-[170px] overflow-hidden">
                                    <Image
                                        src={solution.image}
                                        alt={solution.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#082333]/30 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="relative px-5 pb-6 pt-4">
                                    {/* Number */}
                                    <div className="mb-2 text-left text-[20px] font-black text-orange">
                                        {solution.number}
                                    </div>

                                    <h3 className="text-[16px] font-black text-[#082333]">
                                        {solution.title}
                                    </h3>

                                    <p className="mt-3 text-[12px] leading-[1.9] text-slate-500">
                                        {solution.description}
                                    </p>

                                    {/* Bottom line */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.4 + index * 0.15,
                                            duration: 0.6,
                                        }}
                                        className="mt-5 h-[2px] bg-orange/20"
                                    />

                                    <ArrowLeft className="absolute bottom-5 left-5 h-4 w-4 text-orange opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100" />
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}