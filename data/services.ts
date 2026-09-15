import image1 from "../public/assets/workGallery/1-Asphalt works.jpeg"
import image2 from "../public/assets/workGallery/Insulator works.jpg"
import image3 from "../public/assets/workGallery/6-Asphalt.jpeg"
import image4 from "../public/assets/workGallery/Painting works.jpeg"
import image5 from "../public/assets/workGallery/Ceramic works.jpg"
import image6 from "../public/assets/workGallery/5.jpg"
import image7 from "../public/assets/workGallery/77.png"
import image8 from "../public/assets/workGallery/1.jpeg"
import image9 from "../public/assets/workGallery/article-paint-removal.jpg"
import image10 from "../public/assets/workGallery/1-Asphalt works.jpeg"
import { StaticImageData } from "next/image"
import {
    ChevronLeft,
    Construction,
    Droplets,
    HardHat,
    Layers3,
    Paintbrush,
    Rotate3D,
    Shovel,
    Truck,
    Wrench,
} from "lucide-react";

export type Service = {
  id: number;
  title: string;
  icon: React.ElementType;
  image: StaticImageData;
  description: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "أعمال الأسفلت",
    icon: Rotate3D,
    image: image1,
    description:
      "تنفيذ أعمال الأسفلت والسفلتة للمنازل والمستودعات والمواقف، مع تجهيز وتسوية المواقع حسب الحاجة.",
  },

  {
    id: 2,
    title: "أعمال العوازل",
    icon: Construction,
    image: image2,
    description:
      "تنفيذ أعمال العزل للمباني والمنشآت للمساعدة في حماية الأسطح والمواقع ورفع كفاءة المنشأة.",
  },

  {
    id: 3,
    title: "بريك السيارات",
    icon: Truck,
    image: image3,
    description:
      "تنفيذ وتجهيز مواقف السيارات وتخطيطها بما يتناسب مع احتياجات المنازل والمنشآت والمواقع التجارية.",
  },

  {
    id: 4,
    title: "أعمال الدهانات",
    icon: Paintbrush,
    image: image4,
    description:
      "تنفيذ أعمال الدهانات وتجديد وتشطيب الأسطح للمباني والمنشآت بجودة واهتمام بالتفاصيل.",
  },

  {
    id: 5,
    title: "أعمال السيراميك",
    icon: Construction,
    image: image5,
    description:
      "تنفيذ وتركيب أعمال السيراميك للمساحات الداخلية والخارجية ضمن أعمال التشطيب والتجهيز.",
  },

  {
    id: 6,
    title: "التكسير والهدم",
    icon: Shovel,
    image: image6,
    description:
      "تنفيذ أعمال التكسير والهدم وإزالة الأجزاء المطلوبة من الموقع باستخدام المعدات المناسبة.",
  },

  {
    id: 7,
    title: "أعمال المساح والسباكة",
    icon: Construction,
    image: image7,
    description:
      "تنفيذ أعمال المساح والسباكة ضمن أعمال البناء والتجهيز للمباني والمنشآت.",
  },

  {
    id: 8,
    title: "شفط وتنظيف ودفن البيارات",
    icon: Truck,
    image: image8,
    description:
      "خدمات شفط وتنظيف البيارات ودفنها والتعامل مع الأعمال المتعلقة بها باستخدام المعدات المناسبة.",
  },

  {
    id: 9,
    title: "إزالة الصبغ بالرمالة",
    icon: Rotate3D,
    image: image9,
    description:
      "إزالة طبقات الصبغ والدهانات القديمة باستخدام تقنية الرمالة لتجهيز الأسطح للأعمال الجديدة.",
  },

  {
    id: 10,
    title: "بناء غرف السائق",
    icon: HardHat,
    image: image10,
    description:
      "تنفيذ وبناء غرف السائق وتجهيزها ضمن أعمال المقاولات والبناء حسب متطلبات الموقع.",
  },
];