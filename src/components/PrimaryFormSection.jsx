import Form from "./Form"

function PrimaryFormSection({ title, type, extraClass, reverse = false }) {
  const primaryClassName = () => {
    let string = "primary-section"
    if (reverse) {
      string += " primary-section_reverse"
    }

    if (extraClass) {
      string += ` primary-section_${extraClass}`
    }
    return string
  }
  return (
    <section>
      <div className="container">
        <div className={primaryClassName()}>
          <div className="primary-section__media">
            <div className="primary-section__form">
              <h3>{title}</h3>
              <Form type={type} />
            </div>
          </div>
          <div className="primary-section__content">
            {type === "primary" ? (
              <div className="quote">
                <h4>What My Clients Are Saying</h4>
                <blockquote>
                  <p>
                    I am so grateful for my choice in Stephen. Being able to
                    have total confidence in him made the experience of selling
                    my house stress free. He is friendly, focused, professional,
                    and to the point. Best Realtor I have ever used, period.
                  </p>
                  <cite>Amy</cite>
                </blockquote>
              </div>
            ) : (
              <div className="primary-section__content__wrap">
                <p>
                  We’d love to sit down with you and discuss your real estate
                  plans. If you’re selling, we can give a value estimate, tips
                  to prepare the home, and share all the tools that help us sell
                  our client’s homes for more. If you’re buying, we’d love to
                  know what you’re looking for and share everything we do to
                  help you find it.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrimaryFormSection
