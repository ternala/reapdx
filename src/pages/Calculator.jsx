/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react"

function Calculator() {
  const [homePrice, setHomePrice] = useState(0)
  const [commission, setCommission] = useState(0)

  const handleChangeHome = (event) => {
    setHomePrice(event.target.value >= 0 ? event.target.value : "")
  }
  const handleChangeCom = (event) => {
    setCommission(event.target.value >= 0 ? event.target.value : "")
  }

  const incrementHomePrice = () => {
    setHomePrice(homePrice >= 0 ? homePrice + 1 : 0)
  }

  const decrementHomePrice = () => {
    setHomePrice(homePrice > 0 ? homePrice - 1 : 0)
  }

  const incrementCommission = () => {
    setCommission(commission >= 0 ? commission + 1 : 0)
  }

  const decrementCommission = () => {
    setCommission(commission > 0 ? commission - 1 : 0)
  }

  return (
    <div className="wrapper">
      <main>
        <div className="container">
          <div className="primary-section primary-section_reverse">
            <div className="primary-section__media">
              <h2>Reasonable Real Estate Commission</h2>
              <form className="form">
                <div className="form__wrap">
                  <div className="calculator-block">
                    <div className="input input_number" name="name">
                      <label htmlFor="1">Home Sales Price</label>
                      <div className="input__wrap">
                        <input
                          id="1"
                          type="number"
                          value={homePrice >= 0 ? homePrice : 0}
                          onChange={handleChangeHome}
                        />
                        <div className="calculator-block__buttons">
                          <button type="button" onClick={incrementHomePrice} />
                          <button type="button" onClick={decrementHomePrice} />
                        </div>
                      </div>
                    </div>
                    <div className="input input_number" name="name">
                      <label htmlFor="2">Commission %</label>
                      <div className="input__wrap">
                        <input
                          id="2"
                          type="number"
                          value={commission >= 0 ? commission : ""}
                          onChange={handleChangeCom}
                        />
                        <div className="calculator-block__buttons">
                          <button type="button" onClick={incrementCommission} />
                          <button type="button" onClick={decrementCommission} />
                        </div>
                      </div>
                    </div>
                    <div className="calculator-block__result">
                      <div className="input">
                        <label>Commission</label>
                        <span>
                          {((homePrice * commission) / 100).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="input full-width" name="name">
                    <label htmlFor="3">Interested?</label>
                    <input
                      id="3"
                      type="text"
                      placeholder="Fill out the form below"
                    />
                  </div>
                  <div className="input" name="name">
                    <label htmlFor="3">Name</label>
                    <input id="3" type="text" placeholder="Name" />
                  </div>
                  <div className="input" name="phone">
                    <label htmlFor="4">Phone</label>
                    <input id="4" type="text" placeholder="Phone" />
                  </div>
                  <div className="input" name="text">
                    <label htmlFor="5">Email</label>
                    <input id="5" type="text" placeholder="Email" />
                  </div>
                  <div className="input" name="address">
                    <label htmlFor="6">Street Address</label>
                    <input id="6" type="text" placeholder="Text" />
                  </div>
                </div>
                <div className="button-group">
                  <button className="button button-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="primary-section__content">
              <h2>Reasonable Real Estate Commission</h2>
              <div className="primary-section__content__wrap">
                <p>Over 2,000 home sales.</p>
                <p>
                  I believe real estate agent commissions should be reasonable.
                  Though I have become increasingly successful over the years,
                  <a href="/"> reaching Top 5% in the country</a>, we have
                  maintained a reasonable commission rate.
                </p>
                <p>
                  In the <strong>Portland</strong> metro area and in{" "}
                  <strong>SW Washington</strong> we charge 4% max. We earn 1.75%
                  and give 2.25% to the buyer’s agent, one of the most commonly
                  offered rates.
                </p>
                <p>
                  In <strong>Salem</strong> and <strong>Bend</strong> metro
                  areas, we charge 4.5% max.
                </p>
                <p>
                  Click the top menu for our services areas throughout Oregon
                  and Washington. While we charge a real estate commission rate
                  that is less than the national average, we still pay more to
                  market our clients’ homes so they sell faster and for more,
                  and we always offer cancel anytime contracts for no charge.
                  See any service area page for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Calculator
