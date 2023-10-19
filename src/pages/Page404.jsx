import icon404 from "../assets/icons/icon-404.svg"

function Page404() {
  return (
    <div className="wrapper wrapper_404">
      <main>
        <section>
          <div className="container-fluid">
            <div className="page404">
              <img src={icon404} alt="" />
              <div className="page404__content">
                <span className="page404__title">404</span>
                <span className="page404__subtitle">oops! page not found</span>
                <div className="button-group">
                  <a href="-" className="button button-primary">
                    Sell a Home
                  </a>
                  <a href="-" className="button button-secondary">
                    Buy a Home
                  </a>
                </div>
                <a href="-" className="page404__link">
                  Return to Home Page
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page404
