// Import Swiper React components
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react"

// import required modules
// eslint-disable-next-line import/no-unresolved
import { Pagination } from "swiper/modules"
import Form from "./Form"
// import radial from "../assets/icons/icon-radial.svg"

function PrimaryFormSection({ reverse = false }) {
  return (
    <section>
      <div className="container">
        <div
          className={reverse ? "primary-section reverse" : "primary-section"}
        >
          <div className="primary-section__image">
            <div className="primary-section__form">
              <h2>Let’s Meet Up</h2>
              <Form />
            </div>
          </div>
          <div className="primary-section__content">
            <Swiper pagination modules={[Pagination]} className="mySwiper">
              <SwiperSlide>
                <div className="quote">
                  <h4>What My Clients Are Saying</h4>
                  <blockquote className="">
                    <p>
                      I am so grateful for my choice in Stephen. Being able to
                      have total confidence in him made the experience of
                      selling my house stress free. He is friendly, focused,
                      professional, and to the point. Best Realtor I have ever
                      used, period.
                    </p>
                    <cite>Amy</cite>
                  </blockquote>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="quote">
                  <h4>What My Clients Are Saying</h4>
                  <blockquote className="">
                    <span>99</span>
                    <p>
                      I am so grateful for my choice in Stephen. Being able to
                      have total confidence in him made the experience of
                      selling my house stress free. He is friendly, focused,
                      professional, and to the point. Best Realtor I have ever
                      used, period.
                    </p>
                    <cite>Amy</cite>
                  </blockquote>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="quote">
                  <h4>What My Clients Are Saying</h4>
                  <blockquote className="">
                    <span>99</span>
                    <p>
                      I am so grateful for my choice in Stephen. Being able to
                      have total confidence in him made the experience of
                      selling my house stress free. He is friendly, focused,
                      professional, and to the point. Best Realtor I have ever
                      used, period.
                    </p>
                    <cite>Amy</cite>
                  </blockquote>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="primary-section__content__wrap">
              {/* <p>
                We’d love to sit down with you and discuss your real estate
                plans. If you’re selling, we can give a value estimate, tips to
                prepare the home, and share all the tools that help us sell our
                client’s homes for more. If you’re buying, we’d love to know
                what you’re looking for and share everything we do to help you
                find it.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrimaryFormSection
