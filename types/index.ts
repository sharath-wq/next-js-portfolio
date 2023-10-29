import { links } from "@/lib/data";
import { StaticImageData } from "next/image";
import { ReactNode, SetStateAction } from "react";

export interface SectionHeaderProps {
    text: string;
}

export interface ProjectProps {
    title: string;
    description: string;
    tags: readonly string[];
    imageUrl: StaticImageData;
}

export type SectionName = (typeof links)[number]["name"];

export interface ActiveSectionContextProviderProps {
    children: ReactNode;
}

export interface ActiveSectionContextType {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}
