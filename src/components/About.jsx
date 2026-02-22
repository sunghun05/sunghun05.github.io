import React from "react";
import { about } from "../data";

const About = () => {
    const [lang, setLang] = React.useState("en");

    return (
        <section id="about" className="border-t border-[#ccc] pt-6 mb-8">
            <h2 className="font-['Crimson_Text',serif] text-2xl font-semibold text-[#8b0000] mb-3 flex items-baseline gap-2">
                About Me
                <span className="text-sm font-normal text-[#555]">
                    [
                    <button
                        onClick={() => setLang(lang === "en" ? "ko" : "en")}
                        className="text-[#8b0000] underline cursor-pointer bg-transparent border-none p-0"
                    >
                        {lang === "en" ? "korean" : "english"}
                    </button>
                    ]
                </span>
            </h2>
            <p className="text-[#333] leading-7">{about[lang]}</p>
        </section>
    );
};

export default About;
