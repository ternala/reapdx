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
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/default.html" element={<Default />} />
        <Route path="/" element={<Home />} />
        <Route path="/landing-1.html" element={<Landing1 />} />
        <Route path="/landing-2.html" element={<Landing2 />} />
        <Route path="/landing-4.html" element={<Landing4 />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="/calculator.html" element={<Calculator />} />
        <Route path="/listings.html" element={<Listings />} />
        <Route path="/blog.html" element={<Blog />}>
          <Route path="" element={<Posts />} />
          <Route path=":postSlug" element={<Post />} />
        </Route>
        <Route path="/blog-category.html" element={<BlogCategory />} />
        <Route path="/article.html" element={<Article />} />
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
