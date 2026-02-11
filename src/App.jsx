import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Career from "./components/Career";
import Papers from "./components/Papers";
import Projects from "./components/Projects";
import About from "./components/About";
import ResearchInterests from "./components/ResearchInterests";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import WikiSidebar from "./components/WikiSidebar";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="font-serif text-[#333] leading-relaxed max-w-full bg-[#fdfdfd] p-5 md:p-10 text-lg">
      <h1 className="font-serif text-4xl border-b-2 border-[#333] mb-4 pb-1 font-bold tracking-tight">Sunghun Wang</h1>
      <div className="flex flex-col md:flex-row items-start gap-10">

        <div className="w-full md:w-[300px] flex-shrink-0 flex flex-col gap-8 order-first">

          <div id="toc" className="bg-[#f9f9f9] border border-gray-200 p-5 w-full box-border">
            <div className="text-center font-bold mb-2 font-lato uppercase text-xs tracking-wide text-gray-500">Contents</div>
            <ul className="list-none p-0 m-0">
              <li className="mb-2 border-b border-dotted border-gray-200 pb-1 last:border-b-0">
                <span className="text-gray-500 mr-2 font-lato text-sm">1</span> <a href="#about" className="text-[#800000] underline decoration-1 underline-offset-2 hover:bg-[#fff0f0] hover:no-underline">About</a>
              </li>
              <li className="mb-2 border-b border-dotted border-gray-200 pb-1 last:border-b-0">
                <span className="text-gray-500 mr-2 font-lato text-sm">2</span> <a href="#interests" className="text-[#800000] underline decoration-1 underline-offset-2 hover:bg-[#fff0f0] hover:no-underline">Research Interests</a>
              </li>
              <li className="mb-2 border-b border-dotted border-gray-200 pb-1 last:border-b-0">
                <span className="text-gray-500 mr-2 font-lato text-sm">3</span> <a href="#career" className="text-[#800000] underline decoration-1 underline-offset-2 hover:bg-[#fff0f0] hover:no-underline">Career</a>
              </li>
              <li className="mb-2 border-b border-dotted border-gray-200 pb-1 last:border-b-0">
                <span className="text-gray-500 mr-2 font-lato text-sm">4</span> <a href="#projects" className="text-[#800000] underline decoration-1 underline-offset-2 hover:bg-[#fff0f0] hover:no-underline">Projects</a>
              </li>
            </ul>
          </div>

          <WikiSidebar />


          {/* Inserted Blog Link */}
          <Link to="/blog" className="sidebar-button flex items-center justify-center gap-2 p-3 bg-[#800000] text-white rounded-md shadow-md hover:bg-[#a00000] transition-colors duration-200 text-lg font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            Visit Blog
          </Link>
        </div>

        <main className="flex-1 min-w-0">
          <div className="text-xl mb-8 italic text-[#444]">
            <p style={{ marginBottom: "1em" }}>
              I am a Computer Software Undergraduate Student at Soonchunhyang University,
              dedicated to researching and building efficient AI models for edge devices.
            </p>
          </div>

          <About />
          <ResearchInterests />
          <Career />
          <Projects />
        </main>

      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app-container">

      <main className="flex-grow w-full max-w-7xl mx-auto bg-white shadow-sm overflow-hidden">
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
