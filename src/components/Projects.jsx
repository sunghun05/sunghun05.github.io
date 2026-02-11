import React from "react";
import { projects } from "../data";

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="section-header">Projects</h2>
            <ul className="bullet-list">
                {projects.map((project, index) => (
                    <li key={index}>
                        <strong>
                            <a href={project.link} className="text-link" target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </strong>
                        <p style={{ margin: "0.5em 0 0.5em 0" }}>{project.description}</p>
                        <div style={{ fontSize: "0.9em", color: "#54595d" }}>
                            Stack: {project.techStack.join(", ")}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
