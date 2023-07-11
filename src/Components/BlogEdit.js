import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function BlogEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const { blogs, handleUpdateBlog, handleDeleteBlog } = useOutletContext();

  useEffect(() => {
    // Ensure blogs.data is available and is an array before calling `find`
    if (blogs.data && Array.isArray(blogs.data)) {
      const blogToEdit = blogs.data.find((blog) => blog._id === id);
      setBlog(blogToEdit);
    }
  }, [blogs, id]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await handleUpdateBlog(id, blog);
    navigate("/");
  };

  const handleOnChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleDelete = async () => {
    await handleDeleteBlog(id);
    navigate("/");
  };

  // Render form only if `blog` state is available
  return blog ? (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={blog.title}
        onChange={handleOnChange}
      />
      <label htmlFor="content">Content</label>
      <input
        type="text"
        id="content"
        name="content"
        value={blog.content}
        onChange={handleOnChange}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        id="author"
        name="author"
        value={blog.author}
        onChange={handleOnChange}
      />
      <button type="submit">Update</button>
      <button type="button" onClick={handleDelete}>Delete</button>
    </form>
  ) : (
    <div>...</div>
  );
}

export default BlogEdit;

