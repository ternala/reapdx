import Icon from "./Icon"

function Pagination() {
  return (
    <ul className="pagination">
      <li className="disabled">
        <Icon id="pagination-arrow" />
      </li>
      <li className="active">
        <a href="-">1</a>
      </li>
      <li>
        <a href="-">2</a>
      </li>
      <li>
        <a href="-">3</a>
      </li>
      <li>
        <span>...</span>
      </li>
      <li>
        <a href="-">32</a>
      </li>
      <li>
        <a href="-">
          <Icon id="pagination-arrow" />
        </a>
      </li>
    </ul>
  )
}

export default Pagination
