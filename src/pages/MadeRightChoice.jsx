import PrimarySection from "../components/PrimarySection"
import Recent from "../components/Recent"
import SubscribeSection from "../components/SubscribeSection"

function MadeRightChoice() {
  return (
    <div className="wrapper">
      <main>
        <PrimarySection
          title="You made the right choice."
          image={{ src: "/images/section-mra.jpg", alt: "" }}
        >
          <div className="primary-section__content__wrap">
            <p>
              Response in <span>24 hrs</span>. or less.
            </p>
            <p>
              <strong>Please wait! It won`t take us long.</strong>
            </p>
            <p>
              I know there are thousands of real estate agents in our service
              area.
            </p>
          </div>
        </PrimarySection>
        <section>
          <div className="container">
            <div className="primary-section primary-section_short">
              <div className="primary-section__content__wrap">
                <div className="primary-section__content__block">
                  <h3>We are not all the same.</h3>
                  <ul>
                    <li>
                      Out of thousands of agents, only two others received the{" "}
                      <a href="-">Three Best Rated®</a> customer service award.
                    </li>
                    <li>
                      Only 5% received the latest{" "}
                      <a href="-">Fivestar Professional</a> customer service
                      award.
                    </li>
                    <li>
                      Only a small handful have over{" "}
                      <a href="-">500+ independently verified reviews</a>.
                    </li>
                  </ul>
                </div>
                <div className="primary-section__content__block">
                  <h3>Listing agents are not all the same.</h3>
                  <ul>
                    <li>
                      We consistently reach the{" "}
                      <a href="-">top charts in sales</a> each year for the
                      metro. Top ten, top five, even number one.
                    </li>
                    <li>
                      We are more successful in selling our client’s homes
                      because we are willing to{" "}
                      <a href="-">spend more to market them</a>.
                    </li>
                    <li>
                      We are also willing to charge a more reasonable commission
                      fee (<a href="-">4% or 4.5% max</a>. depending on the
                      area) while backing up our services with a{" "}
                      <a href="-">cancel anytime for no charge</a> policy.
                    </li>
                  </ul>
                </div>
                <div className="primary-section__content__block">
                  <h3>Buyers agents are not all the same.</h3>
                  <ul>
                    <li>
                      We can provide <a href="-">100% availability</a> in any
                      market conditions. This is because we are a small team and
                      not an individual agent that is limited by their own
                      personal capacity.
                    </li>
                    <li>
                      We have obtained some of the{" "}
                      <a href="-">highest levels of negotiation</a> training
                      available.
                    </li>
                    <li>
                      We have earned additional certificates to educate our
                      clients on <a href="-">any type of home purchase</a>: new
                      construction, green homes, short sales, foreclosures, and
                      more.
                    </li>
                  </ul>
                </div>
                <div className="primary-section__content__block">
                  <h3>We are not the same.</h3>
                  <blockquote>
                    <p>
                      We humbly request that you wait no more than 24 hours for
                      our response. Our current clients are our first priority
                      and our future clients are our next priority!{" "}
                    </p>
                    <cite>~ Stephen FitzMaurice</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SubscribeSection />
        <Recent title="Most Recent" />
        <Recent title="Recent Articles" />
      </main>
    </div>
  )
}

export default MadeRightChoice
