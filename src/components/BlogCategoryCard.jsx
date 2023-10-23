import Icon from "./Icon"

function BlogCategoryCard({ image }) {
  return (
    <a href="-" className="blog-category-card">
      <div className="blog-category-card__image">
        <img src={process.env.PUBLIC_URL + image} alt="" />
      </div>
      <div className="blog-category-card__content">
        <h2>Best to Sell or Buy a home</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Morbi mattis augue proin
          egestas proin purus amet sit rhoncus.
        </p>
        <Icon id="arrow-right"/>
      </div>
    </a>
  )
}

export default BlogCategoryCard
