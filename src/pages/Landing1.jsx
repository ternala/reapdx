import React from "react"
import Recent from "../components/Recent"
import PrimarySection from "../components/PrimarySection"
import FormSection from "../components/FormSection"
import HeroSection from "../components/HeroSection"
import Breadcrumbs from "../components/Breadcrumbs"
// import data from "../data/Landing-1.json"
import hero from "../data/Hero.json"

function Landing1() {
  return (
    <div className="wrapper">
      <main>
        <Breadcrumbs />
        <HeroSection {...hero[1]} />
        <PrimarySection
          image={{ src: "/images/image-stephen-preview.jpg", alt: "", video: true }}
        >
          <h2>Want an Instant Computer Estimate?</h2>
          <div className="primary-section__content__wrap">
            <form action="#" className="form form_subscribe">
              <div className="form__wrap">
                <div className="input full-width" name="">
                  <label htmlFor="6">What`s your home worth?</label>
                  <input id="6" type="text" placeholder="" />
                </div>
                <div className="button-group">
                  <button className="button button-primary" type="submit">
                    Check
                  </button>
                </div>
              </div>
            </form>
            <p>
              If for any reason the above address box doesn’t work for your
              browser, please simply{" "}
              <a href="-">
                click this link to open the online home value estimator in a new
                window
              </a>
              .
            </p>
            <p>
              This is the best online home value estimator I’ve found. More than
              simply giving a one-time home value check, it can track your
              equity over time, rental value (including Airbnb), refi.
              estimates, calculate potential savings with increased mortgage
              payments, and will alert you to major market changes in your
              neighborhood. It is a fantastic home tool, worth signing up for
              (it’s free).
            </p>
            <p>
              If you are looking for your home’s market value because you’re
              considering selling in the next 12 months or less, contacting a
              professional, top agent, is the best way to go. Fill out the
              contact form below and we will get back to you right away. Our
              experienced team of local Realtors has completed over 2,000 home
              sales.
            </p>
          </div>
        </PrimarySection>
        <FormSection />
        <Recent />
      </main>
    </div>
  )
}

export default Landing1
