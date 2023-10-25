import Breadcrumbs from "../components/Breadcrumbs"
import PrimaryFormSection from "../components/PrimaryFormSection"
import Recent from "../components/Recent"

function Article() {
  return (
    <div className="wrapper">
      <main>
        <Breadcrumbs />
        <div className="container">
          <div className="article-wrap">
            <section>
              <article>
                <h1>
                  Columbia Riverfront Real Estate, Willamette Valley Guide
                </h1>
                <img
                  src={`${process.env.PUBLIC_URL}/images/article-page-1.png`}
                  alt=""
                />
                <h2>Columbia Riverfront Single-Family Homes</h2>
                <p>
                  hen you own a single-family home right on the water, it’s like
                  having your own personal oasis. The water’s calming effect –
                  along with the wildlife it attracts – means a peaceful, serene
                  quality of life and oftentimes, direct access to the water via
                  a <strong>private beach or boat ramp.</strong>
                </p>
                <button type="submit" className="button button-primary">
                  View All
                </button>
                <h2>Columbia Riverfront Condos</h2>
                <p>
                  If you don’t want the responsibility that comes from owning a
                  detached home, like landscaping and lawn work, or if you
                  desire a lower price range, a condo is a great way to go.
                  They’re ideal for first-time home buyers and downsizing
                  empty-nesters alike. The low impact on your wallet doesn’t
                  stop with the price, either. Condos are typically overseen by
                  an HOA, which is responsible for maintaining community rules
                  and regulations. Many offer extras like pools, rooftop
                  terraces, fitness centers, and even spas. HOA fees range
                  widely, so be sure you check those out before you get your
                  heart set on a property.
                </p>
                <button type="submit" className="button button-primary">
                  View All
                </button>
                <p>
                  Our first stop on the Columbia is on the far northeast border
                  of Portland along NE Marine Dr. just west of Chinook Landing
                  Marine Park. Here, you’ll find several groups of floating
                  homes in the <a href="-">Wilkes neighborhood</a>, home to
                  several marinas and moorages. This neighborhood has an Old
                  Portland vibe—quiet and not concerned with keeping up with
                  trends—which makes it ideal for those who want to enjoy the
                  serenity of the riverfront lifestyle yet be close enough to
                  the city when they want to partake.{" "}
                  <a href="-">See all Wilkes neighborhood homes for sale</a>.
                </p>
              </article>
            </section>
            <aside>
              <form className="form">
                <div className="form__wrap">
                  <h4>Let`s Meet Up</h4>
                  <div className="input full-width" name="text">
                    <label htmlFor="1">Selling, Buying or Both?</label>
                    <input id="1" type="text" placeholder="Text" />
                  </div>
                  <div className="input full-width" name="address">
                    <label htmlFor="2">Area or Address</label>
                    <input id="2" type="text" placeholder="Text" />
                  </div>
                  <div className="input required full-width" name="name">
                    <label htmlFor="3">Name</label>
                    <input id="3" type="text" placeholder="Name" />
                  </div>
                  <div className="input required full-width" name="phone">
                    <label htmlFor="4">Phone</label>
                    <input id="4" type="text" placeholder="Phone" />
                  </div>
                </div>
                <div className="button-group">
                  <button className="button button-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </aside>
          </div>
        </div>
        <section>
          <div className="container container_zero">
            <div className="photo-contact-section">
              <img
                src={`${process.env.PUBLIC_URL}/images/photo-section-stephen.png`}
                alt=""
              />
              <div className="photo-contact-section__content">
                <h5>Author</h5>
                <h2>Stephen FitzMaurice</h2>
                <p>
                  Stephen FitzMaurice, Realtor is a{" "}
                  <a href="-">top 5% real estate agent in the U.S.</a> A
                  Principal Broker in Oregon, Managing Broker in Washington, he
                  has been licensed since 2003 for residential real estate
                  sales. Call his team in Oregon at <a href="-">503-714-1111</a>{" "}
                  or in Washington at <a href="-">360-345-3833</a>.
                </p>
                <div className="button-group">
                  <a href="-" className="button button-primary">
                    Call Us
                  </a>
                  <a href="-" className="button button-secondary">
                    Send Mail
                  </a>
                </div>
                <p>
                  4% max to sell a home in <a href="-t">Portland</a>&nbsp;and{" "}
                  <a href="-">SW Washington</a>.
                </p>
                <p>
                  4.5% max to sell a home in <a href="-">Salem</a> and{" "}
                  <a href="-">Bend</a>.
                </p>
                <p>
                  <em>Over 2,000 homes sold.</em>
                </p>
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

export default Article
