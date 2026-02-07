import React from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data";

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleScroll = (id) => {
        setIsMenuOpen(false);
        if (!isHome) return;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const NavItems = ({ mobile = false }) => (
        <>
            {isHome ? (
                <>
                    {["about", "career", "papers", "projects"].map((section) => (
                        <button
                            key={section}
                            onClick={() => handleScroll(section)}
                            className={mobile ? "text-lg font-medium py-2" : "nav-btn"}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </>
            ) : (
                <Link
                    to="/"
                    className={mobile ? "text-lg font-medium py-2" : "nav-link"}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Portfolio
                </Link>
            )}
            <Link
                to="/blog"
                className={mobile ? "text-lg font-medium py-2" : "blog-btn"}
                onClick={() => setIsMenuOpen(false)}
            >
                Blog
            </Link>
        </>
    );

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo z-50 relative">
                    <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        {profile.name}
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <NavItems />
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-1000 relative p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Mobile Nav Overlay */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 z-[999] flex h-screen w-screen flex-col items-center justify-center space-y-8 bg-white md:hidden"
                        style={{ backgroundColor: '#ffffff' }}
                    >
                        <NavItems mobile={true} />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
