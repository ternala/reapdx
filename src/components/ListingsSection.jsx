import Pagination from "./Pagination"
import ListingsCard from "./ListingsCard"

function ListingsSection() {
  return (
    <section>
      <div className="container">
        <div className="listings-section">
          <div className="listings-section__nav">
            <ul className="listings-section__nav__tabs">
              <li>
                <a href="/">Sold Listings</a>
              </li>
              <li>
                <a href="/" className="active">
                  Active
                </a>
              </li>
              <li>
                <a href="/">Pending</a>
              </li>
            </ul>
            <div className="listings-section__nav__filters">
            <a href="/" className="button button-secondary">
                100-500K
              </a>
              <a href="/" className="button button-secondary">
                100-500K
              </a>
              <a href="/" className="button button-secondary">
                100-500K
              </a>
              <a href="/" className="button button-secondary">
                100-500K
              </a>
              <a href="/" className="button button-secondary">
                100-500K
              </a>
              <a href="/" className="button button-secondary">
                100-500K
              </a>
              <a href="/" className="button button-secondary">
                100-500K
              </a>
              <a href="/" className="button button-secondary">
                500-900K
              </a>
              <a href="/" className="button button-secondary">
                900-1200K
              </a>
            </div>
          </div>
          <div className="listings-section__list">
            <ListingsCard image="/images/listings-card-1.png" />
            <ListingsCard image="/images/listings-card-2.png" />
            <ListingsCard image="/images/listings-card-3.png" />
            <ListingsCard image="/images/listings-card-4.png" />
            <ListingsCard image="/images/listings-card-5.png" />
            <ListingsCard image="/images/listings-card-6.png" />
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  )
}

export default ListingsSection
