import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div>
            <Link to='/error'>Home </Link>
            <Link to='/about'>About Us </Link>
            <Link to='/shop'>Shop Now </Link>
        </div>
    );
}
