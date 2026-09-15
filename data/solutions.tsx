import { StaticImageData } from "next/image";
import roadImage from "../public/assets/workGallery/1-Asphalt works.jpeg";
import constructionImage from "../public/assets/workGallery/4-Building and construction.jpg";
import servicesImage from "../public/assets/workGallery/3.jpeg";

export type Solution = {
    number: string;
    title: string;
    description: string;
    image: StaticImageData;
};

export const solutions: Solution[] = [
    {
        number: "01",
        title: "أعمال الأسفلت والمواقف",
        description:
            "سفلتة الطرق والممرات وتنفيذ وتجهيز المواقف بجودة عالية وتشطيب احترافي.",
        image: roadImage,
    },
    {
        number: "02",
        title: "المقاولات والأعمال الإنشائية",
        description:
            "بناء وتشطيب وتنفيذ الأعمال الإنشائية والمشاريع المختلفة بأيدي فريق متخصص.",
        image: constructionImage,
    },
    {
        number: "03",
        title: "الخدمات المساندة",
        description:
            "شفط وتنظيف البيارات والمياه والخدمات المساندة للمشاريع والمنشآت.",
        image: servicesImage,
    },
];