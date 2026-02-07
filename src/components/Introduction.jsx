import React from "react";
import { profile, social } from "../data";
import Section from "./Section";

const Introduction = () => {
    return (
        <section id="about" className="intro-section">
            <div className="intro-container">
                <h1 className="intro-title">
                    {profile.name}
                </h1>
                <p className="intro-subtitle">{profile.title}</p>
                <p className="intro-bio">
                    {profile.bio}
                </p>
                <div className="social-links">
                    {social.github && (
                        <a
                            href={social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            GitHub
                        </a>
                    )}
                    {social.linkedin && (
                        <a
                            href={social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            LinkedIn
                        </a>
                    )}
                    {social.email && (
                        <a
                            href={`mailto:${social.email}`}
                            className="social-link"
                        >
                            Email
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Introduction;
