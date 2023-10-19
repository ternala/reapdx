import RenderContent from "./RenderContent"
import RenderButtons from "./RenderButtons"

function PrimarySection({
  image,
  title,
  content = [],
  buttons = [],
  reverse = false,
  cover = false,
  children,
}) {
  return (
    <section>
      <div className="container">
        <div
          className={reverse ? "primary-section reverse" : "primary-section"}
        >
          <div className="primary-section__image">
            <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
          </div>
          <div className="primary-section__content">
            {title ? <h2>{title}</h2> : null}
            {children ||
              (cover ? (
                <div className="primary-section__content__cover">
                  <RenderContent
                    className="primary-section__content__wrap"
                    content={content}
                  />
                </div>
              ) : (
                <>
                  <RenderContent
                    className="primary-section__content__wrap"
                    content={content}
                  />
                  <RenderButtons buttons={buttons} />
                </>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrimarySection
