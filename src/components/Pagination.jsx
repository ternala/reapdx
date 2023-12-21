import Icon from "./Icon"

function Pagination() {
  return (
    <ul className="pagination">
      <a href="-">
        <Icon id="pagination-arrow" />
      </a>
      <a href="-">1</a>
      <span>2</span>
      <a href="-">3</a>
      <a href="-">4</a>
      <a href="-">5</a>
      <a href="-">
        <Icon id="pagination-arrow" />
      </a>
    </ul>
  )
}

export default Pagination
