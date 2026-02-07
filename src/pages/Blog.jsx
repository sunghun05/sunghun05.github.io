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

    useEffect(() => {
        const modules = import.meta.glob("../postings/*.md", { query: "?raw", import: "default", eager: true });

        const loadedPosts = Object.entries(modules).map(([path, text]) => {
            const { data } = parseFrontmatter(text);
            return {
                ...data,
                path: path,
            };
        });

        setPosts(loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date)));
    }, []);

    return (
        <div className="blog-page">
            <h1 className="blog-page-title">Blog</h1>
            <div className="blog-list">
                {posts.map((post) => (
                    <div key={post.slug} className="group">
                        <Link to={`/blog/${post.slug}`} className="blog-item-link">
                            <h2 className="blog-item-title">
                                {post.title}
                            </h2>
                            <p className="blog-item-date">{post.date}</p>
                            <p className="blog-item-desc">{post.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
