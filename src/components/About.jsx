import React from "react";
import { about } from "../data";

const About = () => {
    const [lang, setLang] = React.useState('en');

    return (
        <section id="about">
            <h2 className="section-header">
                About
                <span style={{ fontSize: "0.6em", marginLeft: "10px", fontWeight: "normal" }}>
                    [<button
                        onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
                        style={{ background: "none", border: "none", color: "#800000", cursor: "pointer", padding: 0, textDecoration: "underline" }}
                    >
                        {lang === 'en' ? 'korean' : 'english'}
                    </button>]
                </span>
            </h2>
            <p style={{ marginBottom: "1em" }}>
                {about[lang]}
            </p>
        </section>
    );
};

export default About;
