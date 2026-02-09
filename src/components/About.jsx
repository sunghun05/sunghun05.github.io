import React from "react";
import { about } from "../data";
import Section from "./Section";

const About = () => {
    const [lang, setLang] = React.useState('en');

    return (
        <section id="about" className="py-10 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <div className="flex justify-center items-center gap-4 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">About Me</h2>
                    <button
                        onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
                        className="p-1.5 rounded-full hover:bg-slate-100 transition text-slate-400 hover:text-slate-600"
                        title={lang === 'en' ? 'Switch to Korean' : 'Switch to English'}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                        </svg>
                    </button>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {about[lang]}
                </p>
            </div>
        </section>
    );
};

export default About;
