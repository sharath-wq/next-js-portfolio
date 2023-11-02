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
    hostedLink: string;
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

export interface ContactFormEmailProps {
    message: string;
    senderEmail: string;
}

export type Theme = "light" | "dark";

export interface ThemeContextProviderProps {
    children: React.ReactNode;
}

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}
