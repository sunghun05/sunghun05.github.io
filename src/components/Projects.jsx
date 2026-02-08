import React from "react";
import { projects } from "../data";
import Section from "./Section";

const Projects = () => {
    return (
        <Section title="Projects" id="projects">
            <div className="projects-grid max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card group animate-fade-in-up"
                        style={{ animationDelay: `${0.1 * index}s` }}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="project-title group-hover:text-blue-600 transition-colors">{project.title}</h3>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                        <p className="project-desc">
                            {project.description}
                        </p>
                        <div className="tech-stack mt-auto">
                            {project.techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="tech-tag bg-blue-50 text-blue-700 border border-blue-100"
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
