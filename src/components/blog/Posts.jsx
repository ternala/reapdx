import { Link } from "react-router-dom"

function Posts() {
  return (
    <div>
      <div>
        <Link to="/blog/this-is-a-post-title">
          <div>
            <h1>This is a post title</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Posts
