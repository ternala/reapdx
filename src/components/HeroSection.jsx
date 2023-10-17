import RenderContent from "./RenderContent"

function HeroSection({
  image = "",
  title = "",
  subtitle = "",
  content = [],
  children = "",
}) {
  return (
    <section>
      <div className="container container-sm">
        <div className="hero-section">
          <img src={image.src} alt={image.alt} />
          <div className="hero-section__content">
            {children || (
              <>
                {title ? <h1>{title}</h1> : null}
                {subtitle ? <h2>{subtitle}</h2> : null}
                <RenderContent content={content} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
