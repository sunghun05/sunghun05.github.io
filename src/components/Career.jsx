import React from "react";
import { career } from "../data";

const Career = () => {
    return (
        <section id="career">
            <h2 className="section-header">Career</h2>
            <ul className="bullet-list">
                {career.map((job, index) => (
                    <li key={index}>
                        <strong>{job.company}</strong> ({job.duration}) - {job.role}
                        {job.description && <p style={{ margin: "0.5em 0 0 1em" }}>{job.description}</p>}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Career;
