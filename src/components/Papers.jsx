import React from "react";
import { papers } from "../data";
import Section from "./Section";

const Papers = () => {
    return (
        <Section title="Papers" id="papers" className="bg-white">
            <ul className="papers-list max-w-4xl mx-auto">
                {papers.map((paper, index) => (
                    <li key={index} className="group animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                        <a
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="paper-link border border-transparent hover:border-gray-100 hover:shadow-sm p-5 rounded-xl transition-all"
                        >
                            <h3 className="paper-title text-xl group-hover:text-blue-600 transition-colors">
                                {paper.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                                <span className="font-medium text-gray-700">{paper.conference}</span>
                                <span>•</span>
                                <span>{paper.year}</span>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default Papers;
