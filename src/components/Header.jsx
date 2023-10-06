import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import { ReactComponent as Logo } from "../assets/icons/icon-logo.svg"
import { ReactComponent as Calendar } from "../assets/icons/icon-calendar.svg"
import { ReactComponent as Phone } from "../assets/icons/icon-phone.svg"
import { ReactComponent as DownArrow } from "../assets/icons/icon-down-arrow.svg"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuClassName = isMenuOpen ? "menu show" : "menu"
  return (
    <header>
      <ul className="nav-info">
        <li>
          <Phone />
          <a className="link" href="tel:5037141111">
            503-714-1111
          </a>
          <span>OR</span>
        </li>
        <li>
          <Phone />
          <a className="link" href="tel:3603453833">
            360-345-3833
          </a>
          <span>SW WA</span>
        </li>
        <li>
          <Calendar />
          <a className="link" href="-">
            Set an Appointment
          </a>
        </li>
      </ul>
      <div className="nav-wrap">
        <div className="container">
          <nav className="nav" role="navigation">
            <button className="burger" type="button" onClick={toggleMenu}>
              х
            </button>
            <div className="logo">
              <Logo />
            </div>
            <ul className={menuClassName}>
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/">
                  Default page
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/home">
                  Home page <DownArrow />
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/landing-1">Landing 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="/landing-2">Landing 2</NavLink>
                  </li>
                  <li>
                    <NavLink to="/landing-3">Landing 4</NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/landing-1">
                  Landing 1
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/landing-1">Landing 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="/landing-2">Landing 2</NavLink>
                  </li>
                  <li>
                    <NavLink to="/landing-3">Landing 4</NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/landing-2">
                  Landing 2
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/landing-1">Landing 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="/landing-2">Landing long text here</NavLink>
                  </li>
                  <li>
                    <NavLink to="/landing-3">Landing 4</NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/landing-4">
                  Landing 4
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/calculator">
                  Calculator
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/blog-category">
                  Blog category
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/article">
                  Article
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
