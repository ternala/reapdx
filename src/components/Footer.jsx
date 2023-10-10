import { ReactComponent as Mail } from "../assets/icons/icon-mail.svg"
import { ReactComponent as Phone } from "../assets/icons/icon-phone.svg"
import { ReactComponent as Facebook } from "../assets/icons/icon-facebook.svg"
import { ReactComponent as Twitter } from "../assets/icons/icon-twitter.svg"
import { ReactComponent as Instagram } from "../assets/icons/icon-instagram.svg"
import { ReactComponent as Linkedin } from "../assets/icons/icon-linkedin.svg"
import { ReactComponent as Youtube } from "../assets/icons/icon-youtube.svg"
import { ReactComponent as Pinterest } from "../assets/icons/icon-pinterest.svg"

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-left">
            <div className="footer-image">
              <img src="/images/image-stephen.jpg" alt="" />
            </div>
            <h6>Stephen FitzMaurice</h6>
            <ul>
              <li>
                <a href="-">Principal Broker in Oregon</a>
              </li>
              <li>
                <a href="-">Principal Broker in Oregon</a>
              </li>
              <li>
                <a href="-">Licensed since 2003</a>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <div className="footer-item">
              <h6>Menu</h6>
              <ul>
                <li>
                  <a href="-">Portland Realtors</a>
                </li>
                <li>
                  <a href="-">Vancouver Realtors</a>
                </li>
                <li>
                  <a href="-">Salem Realtors</a>
                </li>
                <li>
                  <a href="-">Bend Realtors</a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h6>About Us</h6>
              <ul>
                <li>
                  <a href="-">eXp Realty</a>
                </li>
                <li>
                  <a href="-">4th Largest Realty in the U.S</a>
                </li>
                <li>
                  <a href="-">Fastest Growing in the World</a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h6>Top Articles</h6>
              <ul>
                <li>
                  <a href="-">Top 5% Real Estate Agent in the U.S</a>
                </li>
                <li>
                  <a href="-">
                    Best Time to Sell or Buy a HomeEstate Agent in the U.S
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-item footer-item_contacts">
              <h6>Let`s Meet Up. Click to Contact Us.</h6>
              <ul>
                <li>
                  <Mail />
                  <a href="mailto:realestateagentpdx@gmail.com?subject=Stephen FitzMaurice Team">
                    RealEstateAgentPDX@gmail.com
                  </a>
                </li>
                <li>
                  <Phone />
                  <a href="tel:5037141111">503-714-1111</a>
                  <span>OR</span>
                </li>
                <li>
                  <Phone />
                  <a href="tel:3603453833">360-345-3833</a>
                  <span>SW WA</span>
                </li>
              </ul>
            </div>
            <div className="footer-item footer-item_social">
              <h6>Social Media</h6>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/portlandtopagent/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/PDXsRealEstate/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/stephen.fitzmaurice/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/portlandrealestateagent/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/user/portlandrealestate01/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Youtube />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.pinterest.com/PortlandAgent/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Pinterest />
                  </a>
                </li>

                <li>
                  <a to="mailto:re%61les%74a%74eag%65nt%70dx@gmai%6C.com">
                    <Mail />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li>
              <a href="-">Privacy Policy</a>
            </li>
            <li>
              <a href="-">Disclosures</a>
            </li>
            <li>
              <p>© 2023 Copyright Stephen FitzMaurice</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
