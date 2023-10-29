import { StaticImageData } from "next/image";

export interface SectionHeaderProps {
    text: string;
}

export interface ProjectProps {
    title: string;
    description: string;
    tags: readonly string[];
    imageUrl: StaticImageData;
}
