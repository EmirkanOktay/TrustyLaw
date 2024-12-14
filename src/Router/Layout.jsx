import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div>

            <Link to="/">Home</Link>
            <Link to="/home">Home</Link>
            <Link to="/About-us">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Pratice-Areas">Pratice-Areas</Link>
            <Link to="/Pratice-Areas/Family-law">Pratice-Areas/Family-law</Link>
            <Link to="/Pratice-Areas/Criminal-law">Pratice-Areas/Criminal-law</Link>
            <Link to="/Pratice-Areas/Business-Law">Pratice-Areas/Business-Law</Link>
            <Link to="/Blogs/Blog-1">Blogs/Blog-1</Link>
            <Link to="/Blogs/Blog-2">Blogs/Blog-2</Link>
            <Link to="/Blogs/Blog-3">Blogs/Blog-3</Link>
            <Link to="/Not-Found">Not Found</Link>


            <Outlet />
        </div>
    );
}

export default Layout;
