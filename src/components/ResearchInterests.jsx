import React from "react";
import { researchInterests } from "../data";

const ResearchInterests = () => {
    return (
        <section id="interests">
            <h2 className="section-header">Research Interests</h2>
            <ul className="bullet-list">
                {researchInterests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </section>
    );
};

export default ResearchInterests;
