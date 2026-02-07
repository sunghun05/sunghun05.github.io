import React from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data";

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    const handleScroll = (id) => {
        if (!isHome) return;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        {profile.name}
                    </Link>
                </div>
                <nav className="nav">
                    {isHome ? (
                        <>
                            <button onClick={() => handleScroll("about")} className="nav-btn">
                                About
                            </button>
                            <button onClick={() => handleScroll("career")} className="nav-btn">
                                Career
                            </button>
                            <button onClick={() => handleScroll("papers")} className="nav-btn">
                                Papers
                            </button>
                            <button onClick={() => handleScroll("projects")} className="nav-btn">
                                Projects
                            </button>
                        </>
                    ) : (
                        <Link to="/" className="nav-link">
                            Portfolio
                        </Link>
                    )}
                    <Link
                        to="/blog"
                        className="blog-btn"
                    >
                        Blog
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
