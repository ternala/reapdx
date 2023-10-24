import { useState, useEffect } from "react"
import Icon from "./Icon"

const list = [
  "Best Time to Sell or Buy a Home",
  "Buy a Home in Portland",
  "Construction Rates, ADUS, and Zoning",
  "Portland Home Hazards",
  "Portland Landlord Information",
  "Portland Neighborhood Reports",
  "Portland Real Estate",
  "Portland Real Estate Agents",
  "Portland Real Estate Market",
  "Portland Real Estate Suburb Reports",
  "Real Estate Commission Rates",
  "Real Estate Technology",
  "Sell a Home in the Portland, Oregon Metro",
  "What Causes a Home to Sell for More",
]

function CategoriesSection() {
  const [activeBlock, setActiveBlock] = useState(0)

  const toggleMenuBlock = (index) => {
    setActiveBlock(index)
  }

  useEffect(() => {
    // Use query selectors to add event listeners to list items
    const listItems = document.querySelectorAll(
      ".categories-section__list__item",
    )

    listItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        toggleMenuBlock(index)
      })
    })

    // Clean up event listeners when the component unmounts
    return () => {
      listItems.forEach((item, index) => {
        item.removeEventListener("click", () => {
          toggleMenuBlock(index)
        })
      })
    }
  }, [])

  return (
    <section>
      <div className="container container_zero">
        <div className="categories-section">
          <ul className="categories-section__list">
            {list.map((span, index) => (
              <li
                key={index}
                className={
                  index === activeBlock
                    ? "categories-section__list__item active"
                    : "categories-section__list__item"
                }
              >
                <span className="categories-section__list__item__span">
                  {span}
                </span>
                <div className="categories-section__list__item__content">
                  <span className="categories-section__list__item__content__label">
                    Category
                  </span>
                  <a
                    href="-"
                    className="categories-section__list__item__content__main-link"
                  >
                    {span} <Icon id="link-arrow" />
                  </a>
                  <p>
                    Kami Price, Principal Broker is our lead buyer’s agent and a
                    top 1% buyer’s agent in the Portland metro area.{" "}
                    <a href="-">Read More</a>
                  </p>
                  <span className="categories-section__list__item__content__label">
                    Subcategories
                  </span>
                  <ul className="categories-section__list__item__content__subcategories">
                    <li>
                      <a href="-">
                        Buyer Closing Costs
                        <Icon id="link-arrow" />
                      </a>
                    </li>
                    <li>
                      <a href="-">
                        Coming Soon ans Pocket Listings
                        <Icon id="link-arrow" />
                      </a>
                    </li>
                    <li>
                      <a href="-">
                        Downpayment Grants for Home Buyers
                        <Icon id="link-arrow" />
                      </a>
                    </li>
                    <li>
                      <a href="-">
                        Portland School Ratings
                        <Icon id="link-arrow" />
                      </a>
                    </li>
                    <li>
                      <a href="-">
                        Buying a Condo in Portland
                        <Icon id="link-arrow" />
                      </a>
                    </li>
                    <li>
                      <a href="-">
                        Deeds, Title, and Escrow
                        <Icon id="link-arrow" />
                      </a>
                    </li>
                    <li>
                      <a href="-">
                        Portland Housing Affordability
                        <Icon id="link-arrow" />
                      </a>
                    </li>
                    <li>
                      <a href="-">
                        Rent vs Buy Reports
                        <Icon id="link-arrow" />
                      </a>
                    </li>
                  </ul>
                  <div className="categories-section__list__item__form">
                    <form action="#">
                      <div className="input " name="email">
                        <label htmlFor="1">
                          Subscribe to our 2x month email digest.
                        </label>
                        <input id="1" type="text" placeholder="Email" />
                      </div>
                      <button className="button button-primary" type="submit">
                        Submit
                      </button>
                      <p>Or follow by RSS link :</p>
                      <a href="-">Subscribe by RSS</a>
                    </form>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
