import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";
import ResearchInterests from "./components/ResearchInterests";
import Awards from "./components/Awards";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import { profile, social } from "./data";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#eaecef] font-[Inter,sans-serif] text-[#333] text-base leading-relaxed">
      {/* ── Page column ── */}
      <div className="max-w-[860px] mx-auto bg-white px-8 py-10 md:px-14 md:py-14 shadow-sm">

        {/* ── Hero ── */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          {/* Circular photo — left */}
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-[#ddd] flex-shrink-0">
            <img
              src="/images/ID_photo/photo.JPG"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info — right */}
          <div className="flex flex-col justify-center text-left">
            {/* Name */}
            <h1 className="font-['Crimson_Text',serif] text-4xl font-bold text-[#111] mb-1">
              {profile.name}
            </h1>

            {/* Affiliation */}
            <p className="text-[#8b0000] font-semibold text-lg mb-3">
              {profile.title}
            </p>

            {/* Short bio */}
            <p className="text-[#555] text-base mb-5">{profile.bio}</p>

            {/* Links row */}
            <div className="flex flex-wrap gap-4 text-sm">
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[#8b0000] underline underline-offset-2 hover:bg-[#fff0f0] px-1 transition-colors"
                >
                  Email
                </a>
              )}
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b0000] underline underline-offset-2 hover:bg-[#fff0f0] px-1 transition-colors"
                >
                  GitHub
                </a>
              )}
              <Link
                to="/blog"
                className="text-[#8b0000] underline underline-offset-2 hover:bg-[#fff0f0] px-1 transition-colors"
              >
                Blog
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
