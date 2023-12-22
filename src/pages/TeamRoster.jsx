import React from "react"
import Recent from "../components/Recent"
import PrimaryFormSection from "../components/PrimaryFormSection"
import PrimarySection from "../components/PrimarySection"
import Breadcrumbs from "../components/Breadcrumbs"

function TeamRoster() {
  return (
    <div className="wrapper">
      <main>
        {/* <PrimarySection {...data[0]} /> */}
        <Breadcrumbs page="Full Team Roster" />
        <PrimarySection
          image={{
            src: "/images/team-roster-1.png ",
          }}
        >
          <h2>Stephen FitzMaurice Team Roster</h2>
          <div className="primary-section__content__wrap">
            <p>
              All of the real estate agents listed below are with the Stephen
              FitzMaurice Team and with&nbsp;
              <a href="-">eXp Realty</a>, the 4th largest Realty company in the
              U.S. and the&nbsp;
              <strong>fastest growing in the world</strong>.
            </p>
            <p>
              If you are selling a home in&nbsp;
              <a href="-">Portland</a>
              &nbsp;or&nbsp;
              <a href="-">SW Washington</a>
              &nbsp;our max. commission rate is 4%. If you’re selling a home
              from&nbsp;
              <a href="-" target="_blank">
                Salem to Medford
              </a>
              , or in&nbsp;
              <a href="-" target="_blank">
                Central Oregon
              </a>
              , our max. commission is 4.5%. For all of our clients, we offer
              cancel anytime contracts for no charge and pay more to market our
              theirs homes so they sell faster and for more.
            </p>
            <p>
              Our specialized buyers’ agents throughout Oregon and Washington
              are dedicated to helping home buyers find a perfect match. All of
              our agents are experienced veterans in the real estate industry.
              If you’re unsure who to call, simply dial our main line at
              503-714-1111 and we will instantly connect you to the right agent.
            </p>
            <p>
              Our team is small, but mighty, with&nbsp;
              <strong>over 2,000</strong>&nbsp;local home sales.{" "}
            </p>
          </div>
        </PrimarySection>
        <section>
          <div className="container ">
            <div className="hero-section hero-section_center">
              <img
                src={`${process.env.PUBLIC_URL}/images/hero-section-home.png`}
                alt=""
              />
              <div className="hero-section__content">
                <h2>Top 1% Seller Agents</h2>
                <div>
                  <p>
                    <a href="-" target="_blank">
                      Explanation of seller’s services.
                    </a>
                    <strong>
                      <a href="tel:5037141111">503-714-1111</a>
                      Oregon
                      <a href="tel:3604707777">360-470-7777</a> Washington
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container ">
            <div className="hero-section hero-section_center">
              <img
                src={`${process.env.PUBLIC_URL}/images/hero-section-team-roster-1.png`}
                alt=""
              />
              <div className="hero-section__content">
                <h2>Top 1% Seller Agents</h2>
                <div>
                  <p>
                    <a href="-" target="_blank">
                      Explanation of seller’s services.
                    </a>
                    <strong>
                      <a href="tel:5037141111">503-714-1111</a>
                      Oregon
                      <a href="tel:3604707777">360-470-7777</a> Washington
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container ">
            <div className="hero-section hero-section_center">
              <img
                src={`${process.env.PUBLIC_URL}/images/hero-section-home-2.png`}
                alt=""
              />
              <div className="hero-section__content">
                <h2>Friendly Showing Agents</h2>
                <div>
                  <p>
                    See the home you want when you want! One of our showing
                    agents will be assigned as a personal concierge for your
                    home tour, with the entire team ready to back them up. The
                    Portland real estate market can move fast, so it helps to
                    have more than one agent’s schedule at your beck and call.
                    Often you need to see a home the day it hits the market. Our
                    experienced, knowledgeable showing agents can help you find
                    the home you want, while Kami Price, one of the most
                    experienced and educated buyer’s agents in town will
                    negotiate on your behalf from start to finish. It is a home
                    buyer’s power team that works in your best interest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container ">
            <div className="hero-section hero-section_center">
              <img
                src={`${process.env.PUBLIC_URL}/images/blog-category-1.png`}
                alt=""
              />
              <div className="hero-section__content">
                <h2>Salem to Medford and Central Oregon Team Members</h2>
                <div>
                  <p>
                    Each team member runs the same top rated listing and buying
                    programs in their respective locations and are experts in
                    their fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PrimaryFormSection
          title="Let`s Connect"
          type="primary"
          reverse="true"
        />
        <Recent title="Recent Articles" />
      </main>
    </div>
  )
}

export default TeamRoster
