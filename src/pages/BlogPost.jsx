import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";


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

const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState("");
    const [meta, setMeta] = useState({});

    useEffect(() => {
        const loadPost = async () => {
            // Create a map of slugs to file paths imports
            const modules = import.meta.glob("../postings/*.md", { query: "?raw", import: "default", eager: true });

            const postEntry = Object.entries(modules).find(([path, text]) => {
                const { data } = parseFrontmatter(text);
                return data.slug === slug;
            });

            if (postEntry) {
                const { data, content } = parseFrontmatter(postEntry[1]);
                setMeta(data);
                setContent(content);
            }
        };

        loadPost();
    }, [slug]);

    if (!content) return <div className="pt-32 text-center">Loading...</div>;

    return (
        <article className="blog-post-article">
            <Link to="/blog" className="back-link">
                &larr; Back to Blog
            </Link>
            <h1>{meta.title}</h1>
            <p className="post-date not-prose">{meta.date}</p>
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    );
};

export default BlogPost;
