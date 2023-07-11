import React, {useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const { handleNewBlog } = useOutletContext();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const newblog = {
            title,
            content,
            author,
        }
        await handleNewBlog(newblog);
        navigate('/');
    }
    
    return (
        <div className="blog-form">
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="content">Content</label>
                <input type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
                <label htmlFor="author">Author</label>
                <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default BlogForm
