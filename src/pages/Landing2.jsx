import React from "react"
import Recent from "../components/Recent"
import HeroSection from "../components/HeroSection"
import Breadcrumbs from "../components/Breadcrumbs"
import PrimarySection from "../components/PrimarySection"
import hero from "../data/Hero.json"

function Landing2() {
  return (
    <div className="wrapper">
      <main>
        <Breadcrumbs page="Landing-2" />
        <HeroSection {...hero[2]} />
        <PrimarySection
          extraClass="start"
          image={{
            src: "/images/image-stephen-sell.png",
            alt: "",
            video: "https://www.youtube.com/watch?v=a1YjR3KnylI",
          }}
        >
          <h2>
            Portland Realtor Charges 4% Commission Max. to Sell a Home in the{" "}
            <a href="/">Portland Housing Market</a>
          </h2>
          <div className="primary-section__content__wrap">
            <p>
              In the greater Portland metro area, we charge a maximum of 4%
              commission for the selling process. We earn 1.75% for our services
              and give the buyer’s agent 2.25%, one of the most commonly offered
              rates. In the rare case that we represent both the buyer and
              seller with the seller’s permission, the total commission charge
              is 3%.
            </p>
            <div className="photo-block">
              <div className="photo-block__image">
                <img
                  src={`${process.env.PUBLIC_URL}/images/photo-block-stephen.png`}
                  alt=""
                />
              </div>
              <div className="photo-block__content">
                <span>Stephen FitzMaurice</span>
                <ul>
                  <li>
                    <a href="/">Top 5%</a> Agent in the U.S.
                  </li>
                  <li>Principal Broker in Oregon</li>
                </ul>
              </div>
              <ul className="button-group">
                <li>
                  <p>Portland</p>
                  <a className="button button-icon" href="tel:5037141111" >
                    503-714-1111
                  </a>
                </li>
                <li>
                  <p>SW WA </p>
                  <a className="button button-icon" href="tel:5037141111" >
                    503-714-1111
                  </a>
                </li>
              </ul>
            </div>
            <p>
              As the team leader and top 1% agent in the U.S., my primary
              concern is to obtain the highest possible price for our clients’
              homes while giving the best possible customer service.
            </p>
            <p>
              Many listing real estate agents do minimal work and spend minimal
              money to market your home and do almost nothing after your home is
              on the market. I think this is a travesty. We work hard to prepare
              your home for market with a strategic price evaluation, home
              preparation consultation, pre-marketing efforts, and we pay extra
              money to ensure your home receives thousands of additional online
              views so it sells faster and for more.
            </p>
            <p>
              After your home is on the market we have strong processes in place
              to obtain feedback, assess market activity, refresh the listing,
              hold effective open houses and more.
            </p>
          </div>
        </PrimarySection>
        <Recent title="Recent Articles" />
      </main>
    </div>
  )
}

export default Landing2
