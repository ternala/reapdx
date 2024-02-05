import React from "react"
import Recent from "../components/Recent"
import Breadcrumbs from "../components/Breadcrumbs"
import TeamSection from "../components/TeamSection"
import HeroSection from "../components/HeroSection"
import FormSection from "../components/FormSection"
import PrimarySection from "../components/PrimarySection"
import hero from "../data/Hero.json"

function Landing3() {
  return (
    <div className="wrapper">
      <main>
        <Breadcrumbs page="Landing-3" />
        <HeroSection {...hero[3]} />
        <PrimarySection
          extraClass="start"
          reverse="true"
          image={{ src: "/images/landing-3-section-1.png", alt: "" }}
        >
          <h2>Why use Kami Price?</h2>
          <div className="primary-section__content__wrap">
            <div className="photo-block">
              <div className="photo-block__image">
                <img
                  src={`${process.env.PUBLIC_URL}/images/photo-block-woman.png`}
                  alt=""
                />
              </div>
              <div className="photo-block__content">
                <span>Kami Price, Realtor</span>
              </div>
              <ul className="button-group">
                <li>
                  <p>Portland</p>
                  <a className="button button-icon" href="tel:5037141111">
                    503-714-1111
                  </a>
                </li>

                <li>
                  <p>SW WA</p>
                  <a className="button button-icon" href="tel:3603453833">
                    360-345-3833
                  </a>
                </li>
              </ul>
            </div>
            <p>
              <strong>Kami Price, Principal and Managing Broker</strong>
            </p>
            <p>Top 1% Buyers Agent in Portland and SW WA</p>
            <p>
              Kami Price, greater Portland buyers agent, is a 4th generation
              native Oregonian who brings extensive familiarity with the
              metropolitan area. She’s been licensed since 2004 and has worked
              with top-producing teams her entire career. She has been involved
              with hundreds of successful real estate transactions in and around
              the Portland metro. Kami holds a Bachelors’ degree in Human
              Development and a Masters’ in Management and Organizational
              Leadership. In addition to dedicating herself to real estate, she
              gives back by teaching business courses at Portland Community
              College and coached/mentored inner-city kids in sports activities
              for over 10 years.
            </p>
            <p>
              Kami’s primary goal in representing home buyers is to provide
              seamless and personalized service. The buyers’ goals are her
              goals. She is relentless in the pursuit of finding the perfect
              property and negotiating the best possible deal for her clients.
              By utilizing her extensive knowledge of the local real estate
              market and the latest technological advances available, she is
              able to react immediately to her client’s needs.
            </p>
            <p>
              Kami brings a level of professionalism to the buyer agent
              relationship that ensures peace-of mind. With her resourcefulness,
              high level of enthusiasm and passion for delivering top-notch
              service, she is committed to making sure that each and every one
              of her home buyers has a truly enjoyable and stress free
              experience in finding the home of their dreams.
            </p>
            <cite>
              ~ <strong>Kami Price</strong>, Buyers Agent, Team Leader
            </cite>
          </div>
        </PrimarySection>
        <section>
          <div className="container">
            <a
              className="video-block"
              href="https://www.youtube.com/watch?v=cZX40JQxtsU"
              data-fancybox="gallery"
              data-caption="Caption #1"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/video-section.png`}
                alt=""
              />
            </a>
          </div>
        </section>
        <FormSection />
        <PrimarySection
          reverse="true"
          image={{
            src: "/images/landing-3-section-2.png",
            alt: "",
          }}
        >
          <h2>Portland Metro Buyers Agent</h2>
          <div className="primary-section__content__items">
            <div className="primary-section__content__item">
              <span>25+</span>
              <p>Years of Combined Experience</p>
            </div>
            <div className="primary-section__content__item">
              <span>#1 </span>
              <p>Customer Service</p>
            </div>
          </div>
        </PrimarySection>
        <section>
          <div className="container">
            <div className="review-section">
              <h2>Excellent Buyers Agent Reviews</h2>
              <a href="/" className="review-section__image">
                <img
                  src={`${process.env.PUBLIC_URL}/images/review-section.png`}
                  alt=""
                />
              </a>
              <p>Click the image to see all of Kami’s reviews.</p>
            </div>
          </div>
        </section>
        <TeamSection />
        <Recent title="Recent Articles" />
      </main>
    </div>
  )
}

export default Landing3
