import React from "react";
import { researchInterests } from "../data";

const ResearchInterests = () => {
    return (
        <section id="interests" className="section">
            <h2 className="section-title">Research Interests</h2>
            <ul className="interest-list">
                {researchInterests.map((interest, index) => (
                    <li key={index} className="interest-tag">{interest}</li>
                ))}
            </ul>
        </section>
    );
};

export default ResearchInterests;
