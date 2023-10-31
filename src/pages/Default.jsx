import Icon from "../components/Icon"

function Default() {
  return (
    <section>
      <div className="wrapper">
        <main>
          <section>
            <div className="container">
              <div className="default-container">
                <div className="default-block">
                  <div className="default-title">Typography</div>
                  <div className="default-block__wrap">
                    <ul className="default-list">
                      <span className="default-span">Play</span>
                      <li>
                        <h1 className="title title-primary">Heading 1</h1>
                      </li>
                      <li>
                        <h2 className="title title-secondary">Heading 2</h2>
                      </li>
                      <li>
                        <h3 className="title title-tertiary">Heading 3</h3>
                      </li>
                      <li>
                        <h4 className="title title-quaternary">Heading 4</h4>
                      </li>
                      <li>
                        <h5 className="title title-fivefold">Heading 5</h5>
                      </li>
                      <li>
                        <h6 className="title title-sixfold">Heading 6</h6>
                      </li>
                    </ul>
                    <ul className="default-list">
                      <span className="default-span">Inter</span>
                      <li>
                        <h1 className="title title-primary">Heading 1</h1>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="default-block">
                  <div className="default-title">Buttons</div>
                  <div className="default-block__wrap">
                    <ul className="default-list">
                      <span className="default-span">Active</span>
                      <li>
                        <button className="button button-primary" type="button">
                          Sell a House
                        </button>
                      </li>
                      <li>
                        <button
                          className="button button-secondary"
                          type="button"
                        >
                          Sell a House
                        </button>
                      </li>
                    </ul>
                    <ul className="default-list">
                      <span className="default-span">Disabled</span>
                      <li>
                        <button
                          className="button button-primary disabled"
                          type="button"
                        >
                          Sell a House
                        </button>
                      </li>
                      <li>
                        <button
                          className="button button-secondary disabled"
                          type="button"
                        >
                          Sell a House
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="default-block">
                  <div className="default-title">Links</div>
                  <div className="default-block__wrap">
                    <ul className="default-list">
                      <span className="default-span">Primary active</span>
                      <li>
                        <a href="/" className="link">
                          Home Sales
                        </a>
                      </li>
                    </ul>
                    <ul className="default-list">
                      <span className="default-span">
                        Primary active with icon
                      </span>
                      <li>
                        <a href="/" className="link link__arrow">
                          Home Sales
                          <Icon id="link-arrow" />
                        </a>
                      </li>
                    </ul>
                    <ul className="default-list">
                      <span className="default-span">Disabled</span>
                      <li>
                        <a href="/" className="link link__arrow disabled">
                          Home Sales
                          <Icon id="link-arrow" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="default-block">
                  <div className="default-title">Inputs</div>
                  <div className="default-block__wrap">
                    <ul className="default-list">
                      <span className="default-span">Default</span>
                      <li>
                        <div className="input required" name="name">
                          <label htmlFor="1">Name</label>
                          <input id="1" type="text" placeholder="Name" />
                        </div>
                      </li>
                    </ul>
                    <ul className="default-list">
                      <span className="default-span">Success</span>
                      <li>
                        <div className="input required success" name="email">
                          <label htmlFor="2">Email</label>
                          <input id="2" type="text" placeholder="Email" />
                        </div>
                      </li>
                    </ul>
                    <ul className="default-list">
                      <span className="default-span">Error</span>
                      <li>
                        <div className="input required error" name="phone">
                          <label htmlFor="3">Phone</label>
                          <input id="3" type="text" placeholder="Phone" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="default-block">
                  <div className="default-title">Radio buttons</div>
                  <div className="default-block__wrap">
                    <ul className="default-list">
                      <span className="default-span">Active</span>
                      <li>
                        <div className="radio">
                          <input id="radioFirst" type="radio" />
                          <label htmlFor="radioFirst">Label</label>
                        </div>
                      </li>
                    </ul>
                    <ul className="default-list">
                      <span className="default-span">Disabled</span>
                      <li>
                        <div className="radio disabled">
                          <input id="radioFirst" type="radio" />
                          <label htmlFor="radioFirst">Label</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="default-block">
                  <div className="default-title">Labels</div>
                  <div className="default-block__wrap">
                    <ul className="default-list">
                      <span className="default-span">Active Listings</span>
                      <li>
                        <span className="label active">Active</span>
                      </li>
                    </ul>
                    <ul className="default-list">
                      <span className="default-span">Sold Listings</span>
                      <li>
                        <span className="label sold">Sold listings</span>
                      </li>
                    </ul>
                    <ul className="default-list">
                      <span className="default-span">Pending Listings</span>
                      <li>
                        <span className="label pending">Pending</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="default-block">
                  <div className="default-title">Pagination</div>
                  <div className="default-block__wrap">
                    <ul className="default-list">
                      <li>
                        <ul className="pagination">
                          <li className="disabled">
                            <Icon id="pagination-arrow-left" />
                          </li>
                          <li className="active">
                            <a href="/">1</a>
                          </li>
                          <li>
                            <a href="/">2</a>
                          </li>
                          <li>
                            <a href="/">3</a>
                          </li>
                          <li>
                            <span>...</span>
                          </li>
                          <li>
                            <a href="/">32</a>
                          </li>
                          <li>
                            <a href="/">
                              <Icon id="pagination-arrow-right" />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="default-block">
                  <div className="default-title">Splinner</div>
                  <div className="default-block__wrap">
                    <ul className="default-list">
                      <li>
                        <span className="spinner" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  )
}

export default Default
/* <div className="default-block">
  <div className="default-title">Empty</div>
</div> */
