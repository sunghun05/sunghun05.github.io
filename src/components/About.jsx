import React from "react";
import { about } from "../data";
import Section from "./Section";

const About = () => {
    return (
        <section id="about" className="py-10 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-800 tracking-tight">About Me</h2>
                <p className="text-slate-600 leading-relaxed text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {about}
                </p>
            </div>
        </section>
    );
};

export default About;
