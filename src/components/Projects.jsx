import React from "react";
import { projects } from "../data";

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="section-title">Projects</h2>
            <div>
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <div className="project-header">
                            {project.link && project.link !== "#" ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-title-link"
                                >
                                    {project.title}
                                </a>
                            ) : (
                                <span className="project-title">{project.title}</span>
                            )}
                            {project.duration && (
                                <span className="project-duration">{project.duration}</span>
                            )}
                        </div>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-tags">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="project-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
