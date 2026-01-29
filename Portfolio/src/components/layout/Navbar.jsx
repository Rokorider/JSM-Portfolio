import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="nav-container">
        <span className='navbar-logo' onClick={() => window.scrollTo({ top:0, behavior: 'smooth'})}>JSabaMont</span>
        <ul className='navbar-links'>
          <li><a href="#hero">Hero</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar