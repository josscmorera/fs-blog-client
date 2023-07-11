import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
                <br/>
                    <Link to="/">Blogs</Link>
                <br/>
                    <Link to="/blog-form">New Blog</Link>
        </nav>
    );
};

export default NavBar;
