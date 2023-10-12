import React, { useState, useLayoutEffect, useRef } from "react"
import { NavLink } from "react-router-dom"

import Logo from "../assets/icons/icon-logo.svg"
import Icon from "./Icon"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const navInfo = useRef(null)
  const nav = useRef(null)

  useLayoutEffect(() => {
    const handleResize = () => {
      setHeight(navInfo.current.offsetHeight + nav.current.offsetHeight)
    }

    window.addEventListener("load", handleResize)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  document.body.style.setProperty("--navHeight", `${height}px`)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header>
      <ul ref={navInfo} className="nav-info">
        <li>
          <Icon id="phone" />
          <a className="link" href="tel:5037141111">
            503-714-1111
          </a>
          <span>OR</span>
        </li>
        <li>
          <Icon id="phone" />
          <a className="link" href="tel:3603453833">
            360-345-3833
          </a>
          <span>SW WA</span>
        </li>
        <li>
          <Icon id="calendar" />
          <a className="link" href="-">
            Set an Appointment
          </a>
        </li>
      </ul>
      <div className="nav-wrap">
        <div className="container">
          <nav
            ref={nav}
            className={isMenuOpen ? "nav show" : "nav"}
            role="navigation"
          >
            <button className="burger" type="button" onClick={toggleMenu}>
              <span />
              <span />
              <span />
            </button>
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <ul className="menu">
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/">
                  Default page
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink className="menu__item__link" to="/home">
                  Home page
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
