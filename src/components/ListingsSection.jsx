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
                <a href="-">Sold Listings</a>
              </li>
              <li>
                <a href="-" className="active">
                  Active
                </a>
              </li>
              <li>
                <a href="-">Pending</a>
              </li>
            </ul>
            <div className="listings-section__nav__filters">
              <span>Filter Listing by</span>
              <select name="select">
                <option value="100-500" selected>
                  100-500K
                </option>
                <option value="500-900">500-900K</option>
                <option value="900-1200">900-1200K</option>
              </select>
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
