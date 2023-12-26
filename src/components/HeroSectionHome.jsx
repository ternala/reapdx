import RenderContent from "./RenderContent"
import StatisticBlock from "./StatiscticBlock"

function HeroSectionHome({ image, title, subtitle, content = [] }) {
  return (
    <section>
      <div className="container container_sm">
        <div className="hero-section">
          <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
          <div className="hero-section__content">
            {title ? <h1>{title}</h1> : null}
            {subtitle ? <h2>{subtitle}</h2> : null}
            <RenderContent content={content} className="hero-section__content__wrap" />
          </div>
        </div>
        <StatisticBlock />
      </div>
    </section>
  )
}

export default HeroSectionHome
