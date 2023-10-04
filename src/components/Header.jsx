import React from "react"
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header>
      <div className="container">
        <nav className="nav" role="navigation">
          <ul>
            <li>
              <NavLink to="/">Default page</NavLink>
            </li>
            <li>
              <NavLink to="/home">Home page</NavLink>
            </li>
            <li>
              <NavLink to="/landing-1">Landing 1</NavLink>
            </li>
            <li>
              <NavLink to="/landing-2">Landing 2</NavLink>
            </li>
            <li>
              <NavLink to="/landing-4">Landing 4</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/calculator">Calculator</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/blog-category">Blog category</NavLink>
            </li>
            <li>
              <NavLink to="/article">Article</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
