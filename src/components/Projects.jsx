import React from "react";
import { projects } from "../data";
import Section from "./Section";

const Projects = () => {
    return (
        <Section title="Projects" id="projects" className="bg-gray-50">
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">
                            {project.description}
                        </p>
                        <div className="tech-stack">
                            {project.techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="tech-tag"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
