// import React, { useState, useLayoutEffect, useRef } from "react"
// import { NavLink } from "react-router-dom"

import Logo from "../assets/icons/icon-logo.svg"
import Icon from "./Icon"

function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [height, setHeight] = useState(0)
  // const navInfo = useRef(null)
  // const nav = useRef(null)

  // useLayoutEffect(() => {
  //   const handleResize = () => {
  //     setHeight(navInfo.current.offsetHeight + nav.current.offsetHeight)
  //   }

  //   window.addEventListener("load", handleResize)
  //   window.addEventListener("resize", handleResize)

  //   return () => {
  //     window.removeEventListener("resize", handleResize)
  //   }
  // }, [])

  // document.documentElement.style.setProperty("--navHeight", `${height}px`)
  //
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen)
  // }

  return (
    <header>
      <ul className="nav-info">
        <li>
          <a className="link" href="tel:5037141111">
            {/* <Icon id="phone" /> */}
            503-714-1111
            <span> OR</span>
          </a>
        </li>
        <li>
          <a className="link" href="tel:3603453833">
            {/* <Icon id="phone" /> */}
            360-345-3833
            <span> SW WA</span>
          </a>
        </li>
        <li>
          <a className="link" href="/">
            {/* <Icon id="calendar" /> */}
            Set an Appointment
          </a>
        </li>
      </ul>
      <div className="nav-wrap">
        <div className="container">
          <nav className="nav" role="navigation">
            <button className="burger" type="button">
              <span />
              <span />
              <span />
            </button>
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <ul className="menu">
              <li className="menu__item">
                <a
                  className="menu__item__link"
                  href={`${process.env.PUBLIC_URL}/default.html`}
                >
                  Default page
                </a>
              </li>
              <li className="menu__item">
                <a
                  className="menu__item__link"
                  href={`${process.env.PUBLIC_URL}/home.html`}
                >
                  Home page
                </a>
              </li>
              <li className="menu__item">
                <a href="/" className="menu__item__link">
                  Landings
                  <Icon id="down-arrow" />
                </a>
                <ul>
                  <li>
                    <a href={`${process.env.PUBLIC_URL}/landing-1.html`}>
                      Landing 1
                    </a>
                  </li>
                  <li>
                    <a href={`${process.env.PUBLIC_URL}/landing-2.html`}>
                      Landing 2
                    </a>
                  </li>
                  <li>
                    <a href={`${process.env.PUBLIC_URL}/landing-3.html`}>
                      Landing 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item">
                <a
                  className="menu__item__link"
                  href={`${process.env.PUBLIC_URL}/listings.html`}
                >
                  Listings
                </a>
              </li>
              <li className="menu__item">
                <a
                  className="menu__item__link"
                  href={`${process.env.PUBLIC_URL}/article.html`}
                >
                  Article
                </a>
              </li>
              <li className="menu__item">
                <a
                  className="menu__item__link"
                  href={`${process.env.PUBLIC_URL}/calculator.html`}
                >
                  Calculator
                </a>
              </li>
              <li className="menu__item">
                <a
                  className="menu__item__link"
                  href={`${process.env.PUBLIC_URL}/contact.html`}
                >
                  Contact
                </a>
              </li>
              <li className="menu__item">
                <a
                  className="menu__item__link"
                  href={`${process.env.PUBLIC_URL}/blog.html`}
                >
                  Blog
                </a>
              </li>
              <li className="menu__item">
                <a
                  className="menu__item__link"
                  href={`${process.env.PUBLIC_URL}/blog-category.html`}
                >
                  Blog category
                </a>
              </li>
              <li className="menu__item">
                <a
                  className="menu__item__link"
                  href={`${process.env.PUBLIC_URL}/made-right-choice.html`}
                >
                  MRC
                </a>
              </li>
              <li className="menu__item">
                <a
                  className="menu__item__link"
                  href={`${process.env.PUBLIC_URL}/404.html`}
                >
                  404
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
