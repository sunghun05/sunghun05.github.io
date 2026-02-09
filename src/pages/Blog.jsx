import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const parseFrontmatter = (text) => {
    const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(text);
    if (!match) return { data: {}, content: text };

    const frontmatterBlock = match[1];
    const content = text.replace(frontmatterRegex, '').trim();

    const data = {};
    frontmatterBlock.split('\n').forEach(line => {
        const [key, ...value] = line.split(':');
        if (key && value.length > 0) {
            data[key.trim()] = value.join(':').trim().replace(/^['"](.*)['"]$/, '$1');
        }
    });

    return { data, content };
};

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState("All");

    useEffect(() => {
        const modules = import.meta.glob("../postings/*.md", { query: "?raw", import: "default", eager: true });

        const loadedPosts = Object.entries(modules).map(([path, text]) => {
            const { data } = parseFrontmatter(text);
            return {
                ...data,
                pinned: data.pinned === "true", // Parse string to boolean
                path: path,
                topic: data.topic || "Uncategorized"
            };
        });

        setPosts(loadedPosts.sort((a, b) => {
            // Pinned check (Pinned first)
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;

            // Date check (Descending)
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            if (dateA > dateB) return -1;
            if (dateA < dateB) return 1;

            // Path check (Descending)
            return b.path.localeCompare(a.path);
        }));
    }, []);

    const topics = ["All", ...new Set(posts.map(post => post.topic))];
    const filteredPosts = selectedTopic === "All"
        ? posts
        : posts.filter(post => post.topic === selectedTopic);

    return (
        <div className="pt-32 pb-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
            {/* Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0">
                <h2 className="text-xl font-bold mb-6 border-b pb-2">Topics</h2>
                <ul className="space-y-3">
                    {topics.map(topic => (
                        <li key={topic}>
                            <button
                                onClick={() => setSelectedTopic(topic)}
                                className={`text-left w-full transition-colors duration-200 ${selectedTopic === topic
                                    ? "font-bold text-black"
                                    : "text-gray-500 hover:text-black"
                                    }`}
                            >
                                {topic}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
                <h1 className="text-4xl font-extrabold mb-12 border-b pb-4">
                    {selectedTopic === "All" ? "All Posts" : selectedTopic}
                </h1>
                <div className="space-y-12">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <div key={post.slug} className="group relative">
                                <Link to={`/blog/${post.slug}`} className="block">
                                    <div className="flex items-center gap-3 mb-2">
                                        {post.pinned && (
                                            <span className="text-red-500 text-lg" title="Pinned Post">📌</span>
                                        )}
                                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-gray-100 text-gray-800">
                                            {post.topic}
                                        </span>
                                        <span className="text-sm text-gray-500">{post.date}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-3 group-hover:underline decoration-2 underline-offset-4">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        {post.description}
                                    </p>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No posts found in this topic.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;
