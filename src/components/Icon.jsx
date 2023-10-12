import Icons from "../assets/icons/sprite.svg"

function Icon({ id, className = "" }) {
  return (
    <svg className={className}>
      <use href={`${Icons}#icon-${id}`} />
    </svg>
  )
}
export default Icon
