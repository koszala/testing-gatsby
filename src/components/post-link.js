import React from "react";
import { Link } from "gatsby"

const PostLink = ({ post }) => (
    <div style={{ borderBottom: "1px solid #ccc", marginBottom: "2rem", paddingBottom: "1rem"}}>
    <Link to={post.frontmatter.slug}>
        {post.frontmatter.title} - {post.frontmatter.date}
    </Link>
    <p style={{ color: '#666'}}>
    {post.excerpt}
    </p>
    </div>
)

export default PostLink