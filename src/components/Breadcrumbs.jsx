function Breadcrumbs({ page }) {
  return (
    <div className="container">
      <nav className="breadcrumbs">
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          <li>{page}</li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumbs
