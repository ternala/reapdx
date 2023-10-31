import data from "../data/Contact.json"
import Recent from "../components/Recent"
import PrimarySection from "../components/PrimarySection"
import Breadcrumbs from "../components/Breadcrumbs"
import PrimaryFormSection from "../components/PrimaryFormSection"

function Contact() {
  return (
    <div className="wrapper wrapper_contact">
      <main>
        <Breadcrumbs page="Contact" />
        <section>
          <div className="container">
            <div className="contact-iframe">
              <h1>Let`s get together.</h1>
              <h2>Expert Real Estate Advice</h2>
              <p>We look forward to connecting with you!</p>
              <iframe
                title="title"
                loading="lazy"
                width="100%"
                height="600px"
                frameBorder="0"
                src="https://stephenfitzmauriceteam.zohobookings.com/portal-embed#/customer/stephenfitzmauriceteam"
                allowFullScreen=""
                data-rocket-lazyload="fitvidscompatible"
                data-lazy-src="https://stephenfitzmauriceteam.zohobookings.com/portal-embed#/customer/stephenfitzmauriceteam"
                data-ll-status="loaded"
                className="entered lazyloaded"
              >
                {" "}
              </iframe>
            </div>
          </div>
        </section>
        <PrimaryFormSection
          title="Let’s Meet Up"
          type="secondary"
          reverse="true"
        />
        <section>
          <div className="container container_zero">
            <div className="contact-hero-section">
              <img
                src={`${process.env.PUBLIC_URL}/images/hero-section-contact.jpeg`}
                alt=""
              />
              <div className="contact-hero-section__content">
                <div className="contact-hero-section__content__links">
                  <h2>Call</h2>
                  <a href="/">503-714-1111</a>
                  <h2>Click to Email:</h2>
                  <a href="/">RealEstateAgentPDX@gmail.com</a>
                  <p>Looking for someone in particular?</p>
                  <p>
                    Go here to see the entire <a href="/">Team Roster</a>
                  </p>
                </div>
                <span>Team Leader:</span>
                <div className="contact-hero-section__content__wrap">
                  <ul>
                    <li>Stephen FitzMaurice</li>
                    <li>Principal Broker in Oregon</li>
                    <li>Managing Broker in Washington</li>
                  </ul>
                  <ul>
                    <li>Top 5% Agent in the United States</li>
                    <li>RealEstateAgentPDX@gmail.com</li>
                    <li>eXp Realty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PrimarySection {...data[0]} />
        <PrimarySection {...data[1]} />
        <section>
          <div className="container">
            <div className="primary-section primary-section_short">
              <div className="primary-section__content__wrap">
                <h2>Stephen FitzMaurice Team Reviews</h2>
                <img
                  src={`${process.env.PUBLIC_URL}/images/section-contact-arrivala.png`}
                  alt=""
                />
                <p>
                  Click the image to see all 600+ verified client reviews on
                  Arrivala.com.
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

export default Contact
