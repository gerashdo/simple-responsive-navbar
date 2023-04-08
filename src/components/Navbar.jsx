import React, { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import './navbar.css'

export const Navbar = () => {
  const navref = useRef()

  const toggleNavbar = () => {
    navref.current.classList.toggle('visible')
  }

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navref}>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>About us</a></li>
        </ul>
        <button
          className='btn close-nav-btn'
          onClick={toggleNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className='btn open-nav-btn'
        onClick={toggleNavbar}
      >
        <FaBars />
      </button>
    </header>
  )
}
