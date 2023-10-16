function RenderContent(props) {
  const { className, content } = props

  return (
    <div className={className}>
      {content.map((item, itemIndex) => {
        if (item.paragraph) {
          return (
            <p key={itemIndex}>
              {item.paragraph.map((row, rowIndex) => {
                if (row.link) {
                  return [
                    row.text,
                    <a key={rowIndex} href={row.link.url}>
                      {row.link.text}
                    </a>,
                  ]
                }
                if (row.strong) {
                  return [
                    row.text,
                    <strong key={rowIndex}>{row.strong}</strong>,
                  ]
                }
                return row.text
              })}
            </p>
          )
        }
        return (
          <ul key={itemIndex}>
            {item.list.map((row, rowIndex) => {
              if (row.text) {
                return (
                  <li key={rowIndex}>
                    <a href={row.url}>{row.text}</a>
                  </li>
                )
              }
              return <li key={rowIndex}>{row}</li>
            })}
          </ul>
        )
      })}
    </div>
  )
}

export default RenderContent
