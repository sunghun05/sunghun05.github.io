import React from "react";
import { Link } from "react-router-dom";
import { profile, profileTable } from "../data";

const WikiSidebar = () => {
    return (
        <div className="sidebar-box">
            <div className="infobox">
                <div className="infobox-title">{profile.name}</div>
                {/* Image Placeholder - simplified */}
                <div className="infobox-image">
                    <div style={{ width: "100%", height: "220px", backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#888", border: "1px solid #ddd", fontStyle: "italic" }}>
                        [Profile Image]
                    </div>
                </div>
                <div className="infobox-table">
                    {profileTable.map((row, index) => (
                        <div className="infobox-row" key={index}>
                            <div className="infobox-label">{row.label}</div>
                            <div className="infobox-value">
                                {row.type === 'email' ? (
                                    <a href={`mailto:${row.value}`} className="text-link">{row.value}</a>
                                ) : row.type === 'link' ? (
                                    <a href={row.value} className="text-link" target="_blank" rel="noopener noreferrer">{row.text || row.value}</a>
                                ) : row.type === 'internal-link' ? (
                                    <Link to={row.value} className="text-link" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                        </svg>
                                        {row.text}
                                    </Link>
                                ) : (
                                    <span dangerouslySetInnerHTML={{ __html: row.value }} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WikiSidebar;
