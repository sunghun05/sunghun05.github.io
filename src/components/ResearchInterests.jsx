import React from "react";
import { researchInterests } from "../data";

const ResearchInterests = () => {
    return (
        <section id="interests" className="border-t border-[#ccc] pt-6 mb-8">
            <h2 className="font-['Crimson_Text',serif] text-2xl font-semibold text-[#8b0000] mb-3">
                Research Interests
            </h2>
            <ul className="list-disc list-inside space-y-1 text-[#333]">
                {researchInterests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </section>
    );
};

export default ResearchInterests;
