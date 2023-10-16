import RenderContent from "./RenderContent"
import RenderButtons from "./RenderButtons"

function PrimarySection({
  image,
  title,
  content = [],
  buttons = [],
  reverse = false,
}) {
  return (
    <section>
      <div className="container">
        <div
          className={reverse ? "primary-section reverse" : "primary-section"}
        >
          <div className="primary-section__image">
            <img src={image.src} alt={image.alt} />
          </div>
          <div className="primary-section__content">
            <h2>{title}</h2>
            <RenderContent
              className="primary-section__content__wrap"
              content={content}
            />
            <RenderButtons buttons={buttons} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrimarySection
