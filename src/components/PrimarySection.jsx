import RenderContent from "./RenderContent"
import RenderButtons from "./RenderButtons"

function PrimarySection({
  image,
  title,
  content = [],
  buttons = [],
  reverse = false,
  cover = false,
  extraClass,
  children,
}) {
  const primaryClassName = () => {
    let string = "primary-section"
    if (reverse) {
      string += " primary-section_reverse"
    }

    if (extraClass) {
      string += ` primary-section_${extraClass}`
    }
    return string
  }
  return (
    <section>
      <div className="container">
        <div className={primaryClassName()}>
          <div
            className={
              image.video
                ? "primary-section__media primary-section__media_video"
                : "primary-section__media"
            }
          >
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
