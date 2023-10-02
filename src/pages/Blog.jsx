import { Outlet } from "react-router-dom"

function Blog() {
  return (
    <div>
      <h1>Blog page</h1>
      <Outlet />
    </div>
  )
}

export default Blog
