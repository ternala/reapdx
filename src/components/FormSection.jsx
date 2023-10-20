function FormSection() {
  return (
    <section>
      <div className="container">
        <div className="form-section">
          <h3>Want a Professional’s Estimate?</h3>
          <p>Top 1% Seller’s Agent Response in less than 24 Hours.</p>
          <form className="form">
            <div className="form__wrap">
              <div className="input required" name="name">
                <label htmlFor="1">Name</label>
                <input id="1" type="text" placeholder="Name" />
              </div>

              <div className="input required" name="phone">
                <label htmlFor="2">Phone</label>
                <input id="2" type="text" placeholder="Phone" />
              </div>

              <div className="input required " name="email">
                <label htmlFor="3">Email address</label>
                <input id="3" type="text" placeholder="Email" />
              </div>

              <div className="input" name="">
                <label htmlFor="4">Street Address</label>
                <input id="4" type="text" placeholder="" />
              </div>

              <div className="input" name="">
                <label htmlFor="5">City</label>
                <input id="5" type="text" placeholder="" />
              </div>

              <div className="input" name="">
                <label htmlFor="6">Your estimate of value</label>
                <input id="6" type="text" placeholder="" />
              </div>

              <div className="input full-width" name="">
                <label htmlFor="7">List any modifications</label>
                <input id="7" type="text" placeholder="" />
              </div>
            </div>
            <div className="button-group">
              <button className="button button-primary" type="submit">
                Get a Professional Value
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default FormSection
