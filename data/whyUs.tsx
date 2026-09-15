import type { LucideIcon } from "lucide-react";

import {
  ShieldCheck,
  Clock3,
  Wrench,
  Headphones,
} from "lucide-react";

export type WhyUsFeature = {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
};

export const whyUsFeatures: WhyUsFeature[] = [
    {
        id: "experience",
        icon: ShieldCheck,
        title: "خبرة واحترافية",
        description:
            "فريق متخصص يقدم حلولًا احترافية للتعامل مع مختلف احتياجات المشاريع بكفاءة.",
    },
    {
        id: "response",
        icon: Clock3,
        title: "سرعة الاستجابة",
        description:
            "نستجيب لطلباتكم بسرعة ونوفر حلولًا عملية للحالات الطارئة والمشكلات المستعجلة.",
    },
    {
        id: "equipment",
        icon: Wrench,
        title: "معدات حديثة",
        description:
            "نعتمد على معدات وأدوات متخصصة تساعد على إنجاز الأعمال بدقة وكفاءة.",
    },
    {
        id: "service",
        icon: Headphones,
        title: "خدمة موثوقة",
        description:
            "نحرص على تقديم خدمة منظمة وموثوقة مع الاهتمام باحتياجات العميل من البداية حتى النهاية.",
    },
];