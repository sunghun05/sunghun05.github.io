import React from "react";
import { Routes, Route } from "react-router-dom";
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

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-8 p-8 bg-slate-50">
      {/* Card 1: Introduction */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <Introduction />
      </div>
      {/* Card 5: About & Research Interests Combined */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8">
          <About />
        </div>
        <div className="border-t border-gray-100">
          <ResearchInterests />
        </div>
      </div>

      {/* Card 2: Career */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8">
        <Career />
      </div>

      {/* Card 3: Papers
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8">
        <Papers />
      </div> */}

      {/* Card 4: Projects */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8">
        <Projects />
      </div>

    </div>
  );
};

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto bg-white shadow-sm my-8 rounded-2xl overflow-hidden">
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
