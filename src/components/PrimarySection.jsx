function RenderContent(props) {
  const { content } = props

  return (
    <div>
      {content.map((item, itemIndex) => {
        if (item.paragraph) {
          return (
            <p key={itemIndex}>
              {item.paragraph.map((row) => {
                if (row.link) {
                  return [row.text, <a href={row.link.url}>{row.link.text}</a>]
                }
                return row.text
              })}
            </p>
          )
        }
        return (
          <ul key={itemIndex}>
            {item.list.map((row) => {
              if (row.text) {
                return (
                  <li>
                    <a href={row.url}>{row.text}</a>
                  </li>
                )
              }
              return <li>{row}</li>
            })}
          </ul>
        )
      })}
    </div>
  )
}

function PrimarySection({ image, title, content = [], reverse = false }) {
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
            <RenderContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrimarySection
