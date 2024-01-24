function TeamSection() {
  return (
    <section>
      <div className="container">
        <div className="team-section">
          <div className="team-section__item">
            <img src={`${process.env.PUBLIC_URL}/images/team-1.png`} alt="" />
            <div className="team-section__item__content">
              <span>Dory Stuart, Broker</span>
              <a href="-">Link</a>
              <a className="button button-icon" href="tel:3603453833">3603453833</a>
              <p>
                Dory is a 5th generation native Oregonian with a lot of strong
                local connections. Her previous occupation as an event
                coordinator for the City of Portland developed her strong
                organizational skills and gave her a deep knowledge of local
                neighborhoods. She has found real estate to be a perfect fit for
                her love of the city and its people.
              </p>
            </div>
          </div>
          <div className="team-section__item">
            <img src={`${process.env.PUBLIC_URL}/images/team-2.png`} alt="" />
            <div className="team-section__item__content">
              <span>Amanda Boden, Broker</span>
              <p>
                Amanda is a 4th generation native Oregonian with a strong local
                network. She has a love for local travel and exploration of all
                the PNW has to offer. She has a client-focused approach and
                loves to take the time to listen and understand their unique
                needs, preferences, and budget so she can best tailor her
                services to match their requirements.
              </p>
              <ul className="button-group">
                <li>
                  <a href="-" className="button button-primary">Learn more</a>
                </li>
                <li>
                  <a href="tel:" className="button button-icon">333-44-333</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="team-section__item">
            <img src={`${process.env.PUBLIC_URL}/images/team-3.png`} alt="" />
            <div className="team-section__item__content">
              <span>Max Breslau, Broker</span>
              <p>
                Max is a Portland, Oregon native who graduated from University
                of Oregon with a focus in Economics. He comes from a family of
                Realtors and came to our team with an extensive knowledge and
                personal experience. He loves the various outdoor activities the
                PNW offers, including golfing and visiting wineries. Max enjoys
                sharing his local knowledge with home buyers, helping them find
                their perfect real estate match.
              </p>
            </div>
          </div>
          <div className="team-section__item">
            <img src={`${process.env.PUBLIC_URL}/images/team-4.png`} alt="" />
            <div className="team-section__item__content">
              <span>Keenan Driscoll, Principal Broker</span>
              <p>
                Licensed since 2006, Keenan has lived and worked in Portland,
                Oregon since the 80’s. He has been involved in hundreds of local
                real estate transactions. He loves Portland’s unique
                neighborhoods and is an avid skier, paddleboarder, and
                overlander. He takes pride in offering honest real estate advice
                and market expertise. Most of all, he enjoys using his local
                knowledge to help buyers connect with their home of choice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
