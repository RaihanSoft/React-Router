import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav className="flex gap-5 justify-center p-10 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="users" >Users</NavLink>
                <NavLink to="posts" >Posts</NavLink>

            </nav>

        </div>
    )
}

export default Navbar
