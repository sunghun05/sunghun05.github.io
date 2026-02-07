import React from "react";
import { career } from "../data";
import Section from "./Section";

const Career = () => {
    return (
        <Section title="Career" id="career" className="bg-gray-50">
            {career.map((job, index) => (
                <div key={index} className="career-item">
                    <div className="career-header">
                        <h3 className="career-company">{job.company}</h3>
                        <span className="career-duration">{job.duration}</span>
                    </div>
                    <p className="career-role">{job.role}</p>
                    <p className="career-desc">{job.description}</p>
                </div>
            ))}
        </Section>
    );
};

export default Career;
