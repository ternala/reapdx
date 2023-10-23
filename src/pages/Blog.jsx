import Breadcrumbs from "../components/Breadcrumbs"
import HeroSection from "../components/HeroSection"
import Recent from "../components/Recent"
import PrimaryFormSection from "../components/PrimaryFormSection"
import PrimarySection from "../components/PrimarySection"
import BlankSection from "../components/BlankSection"
import Icon from "../components/Icon"
import hero from "../data/Hero.json"

function Blog() {
  return (
    <div className="wrapper">
      <main>
        <Breadcrumbs />
        <HeroSection {...hero[5]} />
        <Recent title="Most Recent" />
        <BlankSection text="Categories section" />
        <PrimarySection
          extraClass="start"
          title="Title"
          image={{ src: "/images/section-blog-1.png", alt: "" }}
        >
          <a href="-" className="blog-category-card">
            <div className="blog-category-card__content">
              <h2>Best to Sell or Buy a home</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi mattis augue proin
                egestas proin purus amet sit rhoncus.
              </p>
              <Icon id="arrow-right" />
            </div>
          </a>
          <a href="-" className="blog-category-card">
            <div className="blog-category-card__content">
              <h2>Best to Sell or Buy a home</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi mattis augue proin
                egestas proin purus amet sit rhoncus.
              </p>
              <Icon id="arrow-right" />
            </div>
          </a>
          <a href="-" className="blog-category-card">
            <div className="blog-category-card__content">
              <h2>Best to Sell or Buy a home</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi mattis augue proin
                egestas proin purus amet sit rhoncus.
              </p>
              <Icon id="arrow-right" />
            </div>
          </a>
        </PrimarySection>
        <PrimarySection
          extraClass="start"
          title="Title"
          reverse="true"
          image={{ src: "/images/section-blog-2.png", alt: "" }}
        >
          <a href="-" className="blog-category-card">
            <div className="blog-category-card__content">
              <h2>Best to Sell or Buy a home</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi mattis augue proin
                egestas proin purus amet sit rhoncus.
              </p>
              <Icon id="arrow-right" />
            </div>
          </a>
          <a href="-" className="blog-category-card">
            <div className="blog-category-card__content">
              <h2>Best to Sell or Buy a home</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi mattis augue proin
                egestas proin purus amet sit rhoncus.
              </p>
              <Icon id="arrow-right" />
            </div>
          </a>
          <a href="-" className="blog-category-card">
            <div className="blog-category-card__content">
              <h2>Best to Sell or Buy a home</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi mattis augue proin
                egestas proin purus amet sit rhoncus.
              </p>
              <Icon id="arrow-right" />
            </div>
          </a>
        </PrimarySection>
        <PrimarySection
          extraClass="start"
          title="Title"
          image={{ src: "/images/section-blog-3.png", alt: "" }}
        >
          <a href="-" className="blog-category-card">
            <div className="blog-category-card__content">
              <h2>Best to Sell or Buy a home</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi mattis augue proin
                egestas proin purus amet sit rhoncus.
              </p>
              <Icon id="arrow-right" />
            </div>
          </a>
          <a href="-" className="blog-category-card">
            <div className="blog-category-card__content">
              <h2>Best to Sell or Buy a home</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi mattis augue proin
                egestas proin purus amet sit rhoncus.
              </p>
              <Icon id="arrow-right" />
            </div>
          </a>
          <a href="-" className="blog-category-card">
            <div className="blog-category-card__content">
              <h2>Best to Sell or Buy a home</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Morbi mattis augue proin
                egestas proin purus amet sit rhoncus.
              </p>
              <Icon id="arrow-right" />
            </div>
          </a>
        </PrimarySection>

        <BlankSection text="Dark form section" />
        <PrimaryFormSection
          title="Let`s Connect"
          type="primary"
          reverse="true"
        />
        <Recent title="Recent Articles" />
      </main>
    </div>
  )
}

export default Blog
