import React, { useState, useLayoutEffect, useRef } from "react"
// import { a } from "react-router-dom"

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
                <a className="menu__item__link" href="/default.html">
                  Default page
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item__link" href="/">
                  Home page
                </a>
              </li>
              <li className="menu__item">
                <a href="-" className="menu__item__link">
                  Landings
                  <Icon id="down-arrow" />
                </a>
                <ul>
                  <li>
                    <a href="/landing-1.html">Landing 1</a>
                  </li>
                  <li>
                    <a href="/landing-2.html">Landing 2</a>
                  </li>
                  <li>
                    <a href="/landing-3.html">Landing 3</a>
                  </li>
                </ul>
              </li>
              <li className="menu__item">
                <a className="menu__item__link" href="/listings.html">
                  Listings
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item__link" href="/article.html">
                  Article
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item__link" href="/calculator.html">
                  Calculator
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item__link" href="/contact.html">
                  Contact
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item__link" href="/blog.html">
                  Blog
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item__link" href="/blog-category.html">
                  Blog category
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item__link" href="/made-right-choice.html">
                  MRC
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item__link" href="/404.html">
                  404
                </a>
              </li>
              {/* <li className="menu__item">
                <a className="menu__item__link" href="/contact.html">
                  Contact
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item__link" href="/calculator.html">
                  Calculator
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item__link" href="/blog-category.html">
                  Blog category
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__item__link" href="/article.html">
                  Article
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
