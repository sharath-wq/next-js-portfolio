import React from "react";
import { SectionHeaderProps } from "@/types";

const SectionHeading = ({ text }: SectionHeaderProps) => {
    return <h2 className="text-3xl font-medium capitalize mb-8">{text}</h2>;
};

export default SectionHeading;
