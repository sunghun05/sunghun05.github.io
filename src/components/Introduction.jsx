import React from "react";
import { profile, social } from "../data";
import Section from "./Section";

const Introduction = () => {
    return (
        <section id="intro" className="intro-section relative overflow-hidden">
            <div className="intro-container relative z-10">
                <h1 className="intro-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    {profile.name}
                </h1>
                <p className="intro-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{profile.title}</p>
                <p className="intro-bio animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    {profile.bio}
                </p>
                <div className="social-links animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    {social.github && (
                        <a
                            href={social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link group"
                        >
                            <span className="border-b border-transparent group-hover:border-black transition-all">GitHub</span>
                        </a>
                    )}
                    {social.linkedin && (
                        <a
                            href={social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link group"
                        >
                            <span className="border-b border-transparent group-hover:border-black transition-all">LinkedIn</span>
                        </a>
                    )}
                    {social.email && (
                        <a
                            href={`mailto:${social.email}`}
                            className="social-link group"
                        >
                            <span className="border-b border-transparent group-hover:border-black transition-all">Email</span>
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Introduction;
