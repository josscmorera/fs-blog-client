import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>{blog.author}</p>
            <Link to={`/blog-edit/${blog._id}`}>Edit</Link>
        </div>
    );
};

export default BlogCard;

