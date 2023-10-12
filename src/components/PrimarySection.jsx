function PrimarySection({ src, alt, title, reverse = false }) {
  return (
    <section>
      <div className="container">
        <div className={reverse ? "primary-section reverse" : "primary-section"}>
          <div className="primary-section__left">
            <img src={src} alt={alt} />
          </div>
          <div className="primary-section__right">{title}</div>
        </div>
      </div>
    </section>
  )
}

export default PrimarySection
