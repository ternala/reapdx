function SubscribeSection() {
  return (
    <section>
      <div className="container container_zero">
        <div className="subscribe-section">
          <img
            src={`${process.env.PUBLIC_URL}/images/hero-section-landing-2.png`}
            alt=""
          />
          <div className="subscribe-section__content">
            <form action="#">
              <h3>Subscribe</h3>
              <p>2X a Month Email Blog Digest</p>
              <div className="button-group">
                <div className="input required " name="email">
                  <input id="1" type="text" placeholder="Email" />
                </div>
                <button className="button button-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection
