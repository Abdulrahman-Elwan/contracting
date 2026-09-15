"use client";

import Image from "next/image";
import imageLogo from "../assets/logo.png";

export default function Loading() {
    return (
        <div
            dir="rtl"
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#061c2a]"
        >
            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[100px]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,126,0,0.06),transparent_55%)]" />
            </div>

            <div className="relative z-10 flex flex-col items-center">

                {/* =========================
            LOGO
        ========================== */}
                <div className="relative flex h-[110px] w-[190px] items-center justify-center">
                    {/* Logo */}
                    <div className="relative flex items-center justify-center">
                        <Image
                            src={imageLogo}
                            alt="ثقتكم هدفنا"
                            width={180}
                            height={70}
                            priority
                            className="h-auto w-[150px] object-contain"
                        />
                    </div>
                </div>

                {/* =========================
            BRAND TEXT
        ========================== */}
                <div className="mt-5 text-center">

                    <h1 className="text-lg font-black tracking-tight text-white">
                        ثقتكم هدفنا
                    </h1>

                    <p className="mt-1 text-xs font-medium text-white/50">
                        خدمات الصرف الصحي باحترافية
                    </p>

                </div>

                {/* =========================
            LOADING
        ========================== */}
                <div className="mt-7 flex flex-col items-center">

                    <div
                        className="relative h-[3px] w-36 overflow-hidden rounded-full bg-white/10"
                        aria-hidden="true"
                    >
                        <div className="absolute inset-y-0 right-0 w-1/2 animate-[loading_1.3s_ease-in-out_infinite] rounded-full bg-orange" />
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange" />
                        <span className="text-[10px] font-bold tracking-wide text-white/40">
                            جاري التحميل
                        </span>
                    </div>

                </div>
            </div>

            {/* =========================
          BOTTOM DECORATION
      ========================== */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-orange/40 to-transparent" />
        </div>
    );
}