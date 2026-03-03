import React from "react";
import { awards } from "../data";

const Awards = () => {
    return (
        <section id="awards" className="section">
            <h2 className="section-title">Awards &amp; Honors</h2>
            <div>
                {awards.map((award, index) => (
                    <div key={index} className="row-item">
                        <div>
                            <p className="row-title">{award.title}</p>
                            <p className="row-subtitle">{award.organization}</p>
                            {award.description && (
                                <p className="row-desc">{award.description}</p>
                            )}
                        </div>
                        <span className="row-date">{award.date}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Awards;
