import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import scrollTo from "gatsby-plugin-smoothscroll"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronUp,
  faMapMarkerAlt,
  faUsers,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

// import { useIntl, IntlProvider } from "../hooks/useIntl"
// import contentEN from "../../content/en/about-us.yaml"
// import contentDE from "../../content/de/about-us.yaml"
// import getContent from "../hooks/getContent"

export default () => {
  // const content = getContent("footer", lang)
  const { social, footer, address, contacts } = useSiteMetadata()

  return (
    <footer>
      <div className="row">
        <div className="six columns info">
          <div className="footer-logo">
            <AnchorLink to="/">
              {/* <img src={ footer.logo } alt="" /> */}
              <span style={{ fontWeight: 700, fontSize: 32 }}>
                Krafft Institut
              </span>
            </AnchorLink>
          </div>

          <p>{footer.text}</p>
        </div>

        <div className="six columns right-cols">
          <div className="row">
            <div className="columns">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <h3 className="address">Come Visit</h3>
              <p>
                {address.line1}
                <br />
                {address.line2}
                <br />
                {address.line3}
              </p>
            </div>

            <div className="columns">
              <FontAwesomeIcon icon={faUsers} />
              <h3 className="social">socialize</h3>
              <ul>
                {social.map(mySocial => (
                  <li>
                    <a href={mySocial.url}>{mySocial.service}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="columns last">
              <FontAwesomeIcon icon={faEnvelope} />
              <h3 className="contact">Contact Us</h3>
              <ul>
                {contacts.map((contact, index) => (
                  <li>
                    <a href={contact.url}>{contact.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="copyright">
          &copy; 2020 Krafft Institut. All rights reserved.
        </p>

        <div id="go-top">
          <button title="Back to Top" onClick={() => scrollTo("#top")}>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
      </div>
    </footer>
  )
}
