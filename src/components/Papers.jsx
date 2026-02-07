import React from "react";
import { papers } from "../data";
import Section from "./Section";

const Papers = () => {
    return (
        <Section title="Papers" id="papers" className="bg-white">
            <ul className="papers-list">
                {papers.map((paper, index) => (
                    <li key={index} className="group">
                        <a
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="paper-link"
                        >
                            <h3 className="paper-title">
                                {paper.title}
                            </h3>
                            <p className="paper-meta">
                                {paper.conference}, {paper.year}
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default Papers;
