import React from "react";
import { projects } from "../data";

const Projects = () => {
    return (
        <section id="projects" className="border-t border-[#ccc] pt-6 mb-8">
            <h2 className="font-['Crimson_Text',serif] text-2xl font-semibold text-[#8b0000] mb-4">
                Projects
            </h2>
            <div className="space-y-5">
                {projects.map((project, index) => (
                    <div key={index}>
                        <p className="font-semibold text-[#111]">
                            {project.link && project.link !== "#" ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#8b0000] underline underline-offset-2 hover:bg-[#fff0f0] transition-colors"
                                >
                                    {project.title}
                                </a>
                            ) : (
                                project.title
                            )}
                        </p>
                        <p className="text-[#444] text-sm mt-1">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-2 py-0.5 bg-[#f3f3f3] border border-[#ddd] text-[#555] rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
