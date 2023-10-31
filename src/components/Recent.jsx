function Recent({ title }) {
  return (
    <section>
      <div className="container">
        <div className="recent">
          <h5>{title}</h5>
          <ul className="recent-list">
            <li>
              <a href="/">
                <div className="recent-list__image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/article-1.png`}
                    alt=""
                  />
                </div>
                <h2>
                  Gresham, Oregon Real Estate Market 2023 Report with Forecast
                </h2>
                <span>Fall 2023 Update.</span>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="recent-list__image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/article-2.png`}
                    alt=""
                  />
                </div>
                <h2>
                  Gresham, Oregon Real Estate Market 2023 Report with Forecast
                </h2>
                <span>Fall 2023 Update.</span>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="recent-list__image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/article-3.png`}
                    alt=""
                  />
                </div>
                <h2>
                  Gresham, Oregon Real Estate Market 2023 Report with Forecast
                </h2>
                <span>Fall 2023 Update.</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Recent
