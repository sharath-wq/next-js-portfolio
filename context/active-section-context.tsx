"use client";

import { links } from "@/lib/data";
import { ActiveSectionContextProviderProps, ActiveSectionContextType, SectionName } from "@/types";
import React, { useState, createContext, useContext } from "react";

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
            {children}
        </ActiveSectionContext.Provider>
    );
};

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error("useActiveSectionContext must be used within an ActiveSelectionContextProvider");
    }

    return context;
}

export default ActiveSectionContextProvider;
