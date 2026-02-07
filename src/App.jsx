import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Career from "./components/Career";
import Papers from "./components/Papers";
import Projects from "./components/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const Portfolio = () => {
  return (
    <>
      <Introduction />
      <Career />
      <Papers />
      <Projects />
    </>
  );
};

function App() {
  return (
    <div className="app-container">
      <Header />
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
