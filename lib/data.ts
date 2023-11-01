import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Expense Tracker",
        description:
            "An efficient expense tracker app built using React, Chart.js, and Material UI. Easily manage your finances, visualize spending patterns.",
        tags: ["React", "Chart.js", "Material UI", "Speechly", "JavaScript"],
        imageUrl: expenseTracker,
    },
    {
        title: "CocktailDB",
        description:
            "A cocktail discovery app that I've crafted. It's your gateway to cocktail recipes, ingredients, and mixing instructions from around the world.",
        tags: ["React", "JavaScript", "Ract-dom", "Api"],
        imageUrl: cocktailDB,
    },
    {
        title: "Craftopia (Ecom)",
        description:
            "An ecommerce application where handcrafted wonders come to life. Explore and shop unique, handmade products crafted with care and creativity.",
        tags: ["Node.js", "mongodb", "OAuth", "Express", "Firebase", "Razorpay"],
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
    "Tailwind",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Express",
    "PostgreSQL",
    "Framer Motion",
] as const;
