import React from 'react'
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <div>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/friends">Friends List</Link>
                <Link to="/add-friend">Add Friend</Link>
            </nav>
        </div>
    )
}

export default Nav
