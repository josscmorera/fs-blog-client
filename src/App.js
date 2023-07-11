import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState({});
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [sortDate, setSortDate] = useState("latest");
  const [sortedBlogs, setSortedBlogs] = useState([]);

  const url = process.env.REACT_APP_URL_ENDPOINT;

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${url}/blogs/all-blogs`);
      const data = await response.json();
      console.log(data);
      setBlogs(data);
    };
    getData();
  }, [url, shouldRefresh]);

  useEffect(() => {
    if (blogs.success) {
      const sortBlogs = blogs.data.sort((a, b) => {
        if (sortDate === "latest")
          return new Date(b.createAt) - new Date(a.createAt);
        return new Date(a.createAt) - new Date(b.createAt);
      });
      setSortedBlogs(sortBlogs);
    }
  }, [blogs, sortDate]);

  async function handleNewBlog(blog) {
    const response = await fetch(`${url}/blogs/new-blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const data = await response.json();
    console.log(data);

    setShouldRefresh(!shouldRefresh);
  }

  async function handleUpdateBlog(id, updatedBlog) {
    try {
      const response = await fetch(`${url}/blogs/blog-edit/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBlog),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
  
      // After updating a blog, refetch all blogs
      const blogsResponse = await fetch(`${url}/blogs/all-blogs`);
      const blogsData = await blogsResponse.json();
      setBlogs(blogsData);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  async function handleDeleteBlog(id) {
    try {
      const response = await fetch(`${url}/blogs/delete/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
  
      // After deleting a blog, refetch all blogs
      const blogsResponse = await fetch(`${url}/blogs/all-blogs`);
      const blogsData = await blogsResponse.json();
      setBlogs(blogsData);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  

  return (
    <div className="App">
      <NavBar />
      <h1>Full Stack Blog</h1>
      <select value={sortDate} onChange={(e) => setSortDate(e.target.value)}>
        <option value="latest">Latest</option>
        <option value="earliest">Earliest</option>
      </select>
      <Outlet context={{blogs: sortedBlogs, handleNewBlog, handleUpdateBlog, handleDeleteBlog }} />
    </div>
  );
}

export default App;
