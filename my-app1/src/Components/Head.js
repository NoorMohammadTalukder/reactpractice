import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product/1">Student</Link>
            <Link to="/posts">All Posts</Link>
            <Link to="/effect">Effect State</Link>
            <Link to="/color">Color State</Link>
            <Link to="/Registration">Registration</Link>
            <Link to="/login">Login</Link>
            <Link to="/allproducts">Products</Link>
            <Link to="/update">Update</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )
}

export default Head;