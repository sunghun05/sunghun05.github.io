import React from "react";
import { about } from "../data";

const About = () => {
    const [lang, setLang] = React.useState("en");

    return (
        <section id="about" className="section">
            <h2 className="section-title">
                About Me
                <span style={{ fontSize: "0.75rem", fontWeight: 400, marginLeft: "10px", color: "#475569" }}>
                    [<button
                        onClick={() => setLang(lang === "en" ? "ko" : "en")}
                        className="lang-toggle-btn"
                    >
                        {lang === "en" ? "korean" : "english"}
                    </button>]
                </span>
            </h2>
            <p className="section-text">{about[lang]}</p>
        </section>
    );
};

export default About;
