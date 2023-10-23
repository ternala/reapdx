import Pagination from "./Pagination"
import BlogCategoryCard from "./BlogCategoryCard"

function BlogCategorySection() {
  return (
    <section>
      <div className="container">
        <div className="listings-section">
          <div className="listings-section__list">
            <BlogCategoryCard image="/images/blog-category-1.png" />
            <BlogCategoryCard image="/images/blog-category-2.png" />
            <BlogCategoryCard image="/images/blog-category-3.png" />
            <BlogCategoryCard image="/images/blog-category-1.png" />
            <BlogCategoryCard image="/images/blog-category-2.png" />
            <BlogCategoryCard image="/images/blog-category-3.png" />
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  )
}

export default BlogCategorySection
