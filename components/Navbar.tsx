"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import imageLogo from "../assets/logo.png";
import { number } from "../data/info";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#solutions", label: "حلولنا" },
  { href: "#services", label: "خدماتنا" },
  { href: "#why-us", label: "لماذا نحن" },
  { href: "#testimonials", label: "آراء العملاء" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // ACTIVE SECTION
  // =========================
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        root: null,

        // Navbar height compensation
        rootMargin: "-90px 0px -55% 0px",

        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // =========================
  // MOBILE BODY SCROLL
  // =========================
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // =========================
  // HANDLE NAV CLICK
  // =========================
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Update URL without jumping
    window.history.pushState(null, "", href);

    setActiveSection(href.replace("#", ""));
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? "border-b border-white/10 bg-[#061c2a]/95 shadow-lg backdrop-blur-md"
          : "bg-[#061c2a]/35 backdrop-blur-[2px]"
        }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:h-[76px] lg:px-12">

        {/* =========================
            LOGO
        ========================== */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="focus-ring relative z-10 flex shrink-0 items-center"
        >
          <Image
            src={imageLogo}
            alt="مقاولات عامة"
            width={180}
            height={70}
            priority
            className="h-auto w-[125px] object-contain sm:w-[140px]"
          />
        </a>

        {/* =========================
            DESKTOP NAV
        ========================== */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {links.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) =>
                  handleNavClick(e, link.href)
                }
                className={`group relative py-2 text-[14px] font-bold transition-colors duration-300 xl:text-[15px] ${isActive
                    ? "text-orange"
                    : "text-white/85 hover:text-white"
                  }`}
              >
                {link.label}

                {/* Active underline */}
                <span
                  className={`absolute -bottom-1 right-0 h-[2px] rounded-full bg-orange transition-all duration-300 ${isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                />
              </a>
            );
          })}
        </nav>

        {/* =========================
            CALL BUTTON
        ========================== */}
        <div className="hidden lg:block">
          <a
            href={`tel:+${number}`}
            className="focus-ring group inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-[14px] font-black text-[#082333] shadow-[0_8px_25px_rgba(255,126,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange/90 hover:shadow-[0_12px_30px_rgba(255,126,0,0.3)] active:translate-y-0"
          >
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />

            اتصل الآن
          </a>
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          aria-label={
            open ? "إغلاق القائمة" : "فتح القائمة"
          }
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-white/10 bg-[#061c2a]/98 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col px-5 py-5">
              {links.map((link, index) => {
                const sectionId =
                  link.href.replace("#", "");

                const isActive =
                  activeSection === sectionId;

                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) =>
                      handleNavClick(e, link.href)
                    }
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className={`border-b border-white/5 px-2 py-4 text-[16px] font-bold transition-colors ${isActive
                        ? "text-orange"
                        : "text-white/85 hover:text-orange"
                      }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}

              <a
                href={`tel:+${number}`}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-3.5 text-sm font-black text-[#082333]"
              >
                <Phone className="h-4 w-4" />

                اتصل الآن
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}