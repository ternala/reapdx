function ListingsCard({ image }) {
  return (
    <div className="listings-section__card active">
      <div className="listings-section__card__image">
        <img src={process.env.PUBLIC_URL + image} alt="" />
      </div>
      <div className="listings-section__card__content">
        <h3>260 SW 131st Ave, Beaverton, OR</h3>
        <div className="listings-section__card__content__wrap">
          <ul className="listings-section__card__content__list">
            <li>
              {" "}
              <span>Price:</span>{" "}
              <strong>
                <span>$</span>469,900
              </strong>
            </li>
            <li>
              <span>Bedrooms:</span>
              <strong>1</strong>
            </li>
            <li>
              <span>Bathrooms:</span> <strong>1</strong>
            </li>
            <li>
              <span>Sq Ft:</span>
              <strong>1,132</strong>
            </li>
            <li>
              <span>MLS #:</span>
              <strong>23235954</strong>
            </li>
          </ul>
          <div className="listings-section__card__content__action">
            <h6>eXp Realty</h6>
            <a href="/" className="button button-primary" target="_blank">
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingsCard
