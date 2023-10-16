function RenderButtons(props) {
  const { buttons } = props

  return (
    <ul className="button-group">
      {buttons.map((row, rowIndex) => {
        if (row.text) {
          return (
            <li key={rowIndex}>
              <a className={`button button-${row.style}`} href={row.url}>
                {row.text}
              </a>
            </li>
          )
        }
        return <li>{row}</li>
      })}
    </ul>
  )
}

export default RenderButtons
