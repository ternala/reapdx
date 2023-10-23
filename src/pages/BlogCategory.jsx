import Breadcrumbs from "../components/Breadcrumbs"
import HeroSection from "../components/HeroSection"
import Recent from "../components/Recent";
import PrimaryFormSection from "../components/PrimaryFormSection"
import BlogCategorySection from "../components/BlogCategorySection"
import hero from "../data/Hero.json"

function BlogCategory() {
  return (
    <div className="wrapper">
      <main>
        <Breadcrumbs />
        <HeroSection {...hero[6]} />
        <BlogCategorySection />
        <PrimaryFormSection
          title="Let`s Connect"
          type="primary"
          reverse="true"
        />
        <Recent />
      </main>
    </div>
  )
}

export default BlogCategory
