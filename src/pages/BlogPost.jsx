import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";


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

    const SITE_URL = "https://sunghun05.github.io";
    const postUrl = `${SITE_URL}/blog/${slug}`;
    const postTitle = meta.title ? `${meta.title} — Sunghun Wang` : "Sunghun Wang";
    const postDescription = meta.description || "A blog post by Sunghun Wang on AI and software engineering.";

    return (
        <article className="blog-post-article">
            <Helmet>
                <title>{postTitle}</title>
                <meta name="description" content={postDescription} />
                <link rel="canonical" href={postUrl} />

                {/* Open Graph — Article */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={postTitle} />
                <meta property="og:description" content={postDescription} />
                <meta property="og:url" content={postUrl} />
                {meta.date && <meta property="article:published_time" content={new Date(meta.date).toISOString()} />}

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={postTitle} />
                <meta name="twitter:description" content={postDescription} />

                {/* Article schema.org */}
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": meta.title || "",
                    "description": postDescription,
                    "url": postUrl,
                    "datePublished": meta.date ? new Date(meta.date).toISOString() : undefined,
                    "author": { "@type": "Person", "name": "Sunghun Wang", "url": SITE_URL + "/" },
                    "publisher": { "@type": "Person", "name": "Sunghun Wang" },
                })}</script>
            </Helmet>

            <Link to="/blog" className="back-link">
                &larr; Back to Blog
            </Link>
            <h1>{meta.title}</h1>
            <p className="post-date not-prose">{meta.date}</p>
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex, rehypeRaw]}
            >
                {content}
            </ReactMarkdown>
            <Link to="/blog" className="back-link">
                &larr; Back to Blog
            </Link>
        </article>
    );
};

export default BlogPost;
