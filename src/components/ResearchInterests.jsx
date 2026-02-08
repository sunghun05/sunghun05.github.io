import React from "react";
import { researchInterests } from "../data";
import Section from "./Section";

const ResearchInterests = () => {
    return (
        <section id="research" className="py-10 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-800 tracking-tight">Research Interests</h2>

                <div className="flex flex-wrap justify-center gap-3">
                    {researchInterests.map((interest, index) => (
                        <div
                            key={index}
                            className="group relative px-5 py-2.5 bg-white hover:bg-white hover:shadow-md border border-slate-200 hover:border-blue-200 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 cursor-default animate-fade-in-up"
                            style={{ animationDelay: `${0.05 * index}s` }}
                        >
                            <span className="text-slate-600 group-hover:text-blue-600 font-medium text-sm tracking-wide transition-colors">{interest}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchInterests;
