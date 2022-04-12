import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <Link to="/" style={{ textDecoration: "none" }}> <div className='navbar'>CrowdSource </div> </Link>
    )
}

export default Navbar