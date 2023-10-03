import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/style.scss"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {
  Navigation,
  Footer,
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
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
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
