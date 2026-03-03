import React from "react";
import { career } from "../data";

const Career = () => {
    return (
        <section id="career" className="section">
            <h2 className="section-title">Career</h2>
            <div>
                {career.map((job, index) => (
                    <div key={index} className="row-item">
                        <div>
                            <p className="row-title">{job.role}</p>
                            <p className="row-subtitle">{job.company}</p>
                            {job.description && (
                                <p className="row-desc">{job.description}</p>
                            )}
                        </div>
                        <span className="row-date">{job.duration}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Career;
