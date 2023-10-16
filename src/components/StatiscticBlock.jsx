import Icon from "./Icon"

function StatisticBlock() {
  return (
    <div className="statistic-block">
      <ul className="statistic-block__list">
        <li className="statistic-block__list__item">
          <span>2,000+</span>
          <a href="-">
            Home Sales
            <Icon id="link-arrow" />
          </a>
        </li>
        <li className="statistic-block__list__item">
          <span>700+</span>
          <a href="-">
            Positive Client Reviews
            <Icon id="link-arrow" />
          </a>
        </li>
        <li className="statistic-block__list__item">
          <span>1 Billion </span>
          <a href="-">
            Total Team Sales Volume Since 2003
            <Icon id="link-arrow" />
          </a>
        </li>
        <li className="statistic-block__list__item">
          <div className="photo-block">
            <div className="photo-block__image">
              <img src="/images/photo-block-stephen.png" alt="" />
            </div>
            <div className="photo-block__content">
              <h6>Stephen FitzMaurice</h6>
              <ul>
                <li>Team Leader</li>
                <li>Principal Broker in Oregon</li>
                <li>Managing Broker in Washington</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default StatisticBlock
