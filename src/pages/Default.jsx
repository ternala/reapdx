import { ReactComponent as LinkArrow } from "../assets/icons/icon-link-arrow.svg"

function Default() {
  return (
    <div className="wrapper">
      <main>
        <section>
          <div className="container">
            <div className="default-container">
              <div className="default-block">
                <div className="default-title">Typography</div>
                <h1 className="title title-primary">Heading 1</h1>
                <h2 className="title title-secondary">Heading 2</h2>
                <h3 className="title title-tertiary">Heading 3</h3>
                <h4 className="title title-quaternary">Heading 4</h4>
                <h5 className="title title-fivefold">Heading 5</h5>
                <h6 className="title title-sixfold">Heading 6</h6>
              </div>
              <div className="default-block">
                <div className="default-title">Buttons</div>
                <button className="button button-primary" type="button">
                  Sell a House
                </button>
                <button className="button button-primary disable" type="button">
                  Sell a House
                </button>
                <button className="button button-secondary" type="button">
                  Sell a House
                </button>
                <button
                  className="button button-secondary disable"
                  type="button"
                >
                  Sell a House
                </button>
              </div>
              <div className="default-block">
                <div className="default-title">Links</div>
                <a href="-" className="link">
                  Home Sales
                </a>
                <a href="-" className="link link__arrow">
                  Home Sales
                  <LinkArrow />
                </a>
                <a href="-" className="link link__arrow disable">
                  Home Sales
                  <LinkArrow />
                </a>
              </div>
              <div className="default-block">
                <div className="default-title">Empty</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Default
