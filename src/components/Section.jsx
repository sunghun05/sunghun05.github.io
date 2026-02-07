import React from "react";

const Section = ({ title, children, id, className = "" }) => {
    return (
        <section id={id} className={`section ${className}`}>
            <div className="section-container">
                <h2 className="section-title">
                    {title}
                </h2>
                <div className="section-body">{children}</div>
            </div>
        </section>
    );
};

export default Section;
