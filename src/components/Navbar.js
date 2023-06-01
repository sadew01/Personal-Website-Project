// rafce

import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
            <Link to="/Personal-Website-Project/">Home</Link>
            <Link to="/Personal-Website-Project/projects">Projects</Link>
            <Link to="/Personal-Website-Project/experiences">Experiences</Link>
        </div>
    </div>
  )
}

export default Navbar