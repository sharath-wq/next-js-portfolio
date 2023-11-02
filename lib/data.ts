import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";

import craftopia from "@/public/craftopia.png";
import expenseTracker from "@/public/expenseTracker.png";
import cocktailDB from "@/public/cocktaildb.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Brocamp Self Learning Program",
        location: "Brototype, Kochi",
        description:
            "Brocamp is a 7 months intensive inhouse training program exclusively for people who are willing to do the hard work to build a high paying software engineering career.",
        icon: React.createElement(FaLaptopCode),
        date: "2023 - Present",
    },
    {
        title: "Bachelor of Computer Application",
        location: "Don Bosco College, Thrisur",
        description:
            "BCA is a three-year undergraduate degree focusing on computer science and IT, preparing graduates for software development, web development, and system administration careers.",
        icon: React.createElement(LuGraduationCap),
        date: "2020 - 2023",
    },
] as const;

export const projectsData = [
    {
        title: "Expense Tracker",
        description:
            "An efficient expense tracker app built using React, Chart.js, and Material UI. Easily manage your finances, visualize spending patterns.",
        tags: ["React", "Chart.js", "Material UI", "Speechly", "JavaScript"],
        hostedLink: "https://gleeful-bavarois-5ef118.netlify.app/",
        imageUrl: expenseTracker,
    },
    {
        title: "CocktailDB",
        description:
            "A cocktail discovery app that I've crafted. It's your gateway to cocktail recipes, ingredients, and mixing instructions from around the world.",
        tags: ["React", "JavaScript", "Ract-dom", "Api"],
        hostedLink: "https://objective-fermat-00e719.netlify.app/",
        imageUrl: cocktailDB,
    },
    {
        title: "Craftopia (Ecom)",
        description:
            "An ecommerce application where handcrafted wonders come to life. Explore and shop unique, handmade products crafted with care and creativity.",
        tags: ["Node.js", "mongodb", "OAuth", "Express", "Firebase", "Razorpay"],
        hostedLink: "https://craftopia.scportfolio.online/",
        imageUrl: craftopia,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Speechly",
    "OAuth",
    "Firebase",
    "Razorpay",
    "Tailwind",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Express",
    "PostgreSQL",
    "Framer Motion",
] as const;
