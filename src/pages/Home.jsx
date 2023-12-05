import Recent from "../components/Recent"
import PrimarySection from "../components/PrimarySection"
import PrimaryFormSection from "../components/PrimaryFormSection"
import HeroSectionHome from "../components/HeroSectionHome"
import HeroSection from "../components/HeroSection"
import data from "../data/Home.json"
import hero from "../data/Hero.json"
import CategoriesSection from "../components/CategoriesSection"

function Home() {
  return (
    <div className="wrapper">
      <main>
        <HeroSectionHome {...hero[0]} />
        <PrimarySection {...data[0]} />
        <PrimarySection {...data[1]} />
        <PrimarySection {...data[2]} />
        <PrimarySection {...data[3]} />
        <PrimarySection {...data[4]} />
        <PrimarySection {...data[5]} />
        <PrimarySection {...data[6]} />
        <PrimaryFormSection title="Let’s Meet Up" type="secondary" />
        <HeroSection
          extraClass="center"
          image={{ src: "/images/hero-section-home-2.png", alt: "" }}
        >
          <h2>Greater Portland Real Estate Market Reports</h2>
          <div>
            <p>
              While our small team of expert agents are spread out past
              Portland, serving Vancouver, Salem, Bend, and beyond, our real
              estate news blog is focused on the greater Portland metro area. It
              is a top 100 real estate blog in the world with exclusive real
              estate reports you cannot find anywhere else . Here is a sample of
              some of our Portland real estate research reports written to help
              answer important questions
            </p>
          </div>
        </HeroSection>
        <CategoriesSection />
        {/* <PrimarySection {...data[7]} /> */}
        <section>
          <div className="container">
            <div className="primary-section">
              <div className="primary-section__media">
                <img
                  src={`${process.env.PUBLIC_URL}/images/section-stephen.png`}
                  alt=""
                />
              </div>
              <div className="primary-section__content">
                <h2>Top Real Estate Agents</h2>
                <div className="primary-section__content__wrap">
                  <p>
                    Don’t delay. Reach out to the Stephen FitzMaurice team
                    today. You’ll discover the power of his extensive marketing
                    system that allows him to sell his client’s homes faster and
                    for more. If you’re buying a home, you’ll discover a high
                    level of dedication and skill made possible by a team of
                    agents who have dedicated themselves professionally to
                    nothing more and nothing less than helping buyers find their
                    next home. Having been in the top 5% of real estate agents
                    in the U.S. since 2013 and licensed since 2003, Stephen
                    knows <strong>both</strong> how to sell homes in any market,{" "}
                    <strong>and</strong> how to provide excellent customer
                    service for each individual client along the way.
                  </p>
                  <p>
                    Call&nbsp;&nbsp;&nbsp;
                    <a className="link-phone" href="tel:5037141111">
                      503-714-1111
                    </a>
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

export default Home
