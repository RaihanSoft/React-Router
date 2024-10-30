import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="flex gap-5 justify-center p-10 ">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="users" >Users</Link>
            </nav>

        </div>
    )
}

export default Navbar
