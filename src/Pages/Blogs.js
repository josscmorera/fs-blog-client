import React from 'react'
import { useOutletContext } from 'react-router-dom';
import BlogCard from '../Components/BlogCard';

function Blogs() {
    const { blogs } = useOutletContext();    
    console.log(blogs);

    return (
        <div>
            <h1>Blogs</h1>
            {blogs && blogs.map((blog) => {  // changed `blogs.data` to `blogs`
                return <BlogCard key={blog._id} blog={blog} />
            })} 
        </div>
    )
}

export default Blogs;

