import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./styles/style.scss"
import Header from "./components/Header"
import Footer from "./components/Footer"

import {
  Default,
  Home,
  Landing1,
  Landing2,
  Landing4,
  Contact,
  Calculator,
  Listings,
  Blog,
  Post,
  Posts,
  BlogCategory,
  Article,
} from "./pages"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/home" element={<Home />} />
        <Route path="/landing-1" element={<Landing1 />} />
        <Route path="/landing-2" element={<Landing2 />} />
        <Route path="/landing-4" element={<Landing4 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/blog" element={<Blog />}>
          <Route path="" element={<Posts />} />
          <Route path=":postSlug" element={<Post />} />
        </Route>
        <Route path="/blog-category" element={<BlogCategory />} />
        <Route path="/article" element={<Article />} />
      </Routes>
      <Footer />
    </Router>
  )
}

const rootElement = document.getElementById("root")
if (rootElement.hasChildNodes()) {
  const root = ReactDOM.hydrateRoot(rootElement)
  root.render(<App />)
} else {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
