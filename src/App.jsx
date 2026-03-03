import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "./components/Footer";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";
import ResearchInterests from "./components/ResearchInterests";
import Awards from "./components/Awards";
import NeuralBackground from "./components/NeuralBackground";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import { profile, social } from "./data";
import "./portfolio.css";

const SITE_URL = "https://sunghun05.github.io";

const Portfolio = () => {
  const title = `${profile.name} — AI Researcher & Portfolio`;
  const description = `${profile.bio} Undergraduate at Soonchunhyang University specialising in Edge AI and Computer Vision.`;

  return (
    <div className="portfolio-root">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={SITE_URL + "/"} />

        {/* Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={SITE_URL + "/"} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Structured data: Person */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": profile.name,
          "url": SITE_URL + "/",
          "email": profile.email,
          "jobTitle": profile.title,
          "worksFor": { "@type": "Organization", "name": "Soonchunhyang University — INS-LAB" },
          "knowsAbout": ["Edge AI", "Computer Vision", "Reinforcement Learning", "Software Engineering"],
        })}</script>
      </Helmet>


      <NeuralBackground />

      {/* Page content */}
      <div className="portfolio-page">
        <div className="portfolio-card">

          {/* ── Hero ── */}
          <div className="hero-section">
            {/* Profile photo */}
            <div className="hero-photo-wrap">
              <img
                src="/images/ID_photo/photo.JPG"
                alt="Profile"
                className="hero-photo"
              />
            </div>

            {/* Info */}
            <div className="hero-info">
              <div className="hero-badge">AI Researcher</div>
              <h1 className="hero-name">{profile.name}</h1>
              <p className="hero-title">{profile.title}</p>
              <p className="hero-bio">{profile.bio}</p>

              {/* Links */}
              <div className="hero-links">
                {profile.email && (
                  <a href={`mailto:${profile.email}`} className="hero-link-btn">
                    ✉ Email
                  </a>
                )}
                {social.github && (
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-link-btn"
                  >
                    ⌥ GitHub
                  </a>
                )}
                <Link to="/blog" className="hero-link-btn">
                  ✎ Blog
                </Link>
              </div>
            </div>
          </div>

          {/* ── Sections ── */}
          <About />
          <ResearchInterests />
          <Career />
          <Projects />
          <Awards />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
