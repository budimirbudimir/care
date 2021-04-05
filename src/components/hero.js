import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
// import content from "../../content/hero.yaml"

// import { IntlProvider, useIntl } from "../hooks/useIntl"
// import contentEN from "../../content/en/hero.yaml"
// import contentDE from "../../content/de/hero.yaml"
// import contentAL from "../../content/al/hero.yaml"
import getContent from "../hooks/getContent"

export default ({ lang }) => {
  const content = getContent("hero", lang)
  // const map = { en: contentEN, de: contentDE, al: contentAL }
  // const content = map[lang]

  return (
    <section id="hero" style={{ paddingTop: "27px" }}>
      {/* <div className="row"> */}
      <div>
        {/* <div className="twelve columns"> */}
        <div>
          <div className="hero-text">
            <h1 className="responsive-headline">{content.headline || ""}</h1>
            <p>{content.body || ""}</p>
          </div>

          <div className="hero-image">
            <img
              src={content.image || ""}
              alt=""
              className="animated fadeInUpBig"
            />
          </div>

          <div className="buttons" style={{ paddingTop: "40px" }}>
            <AnchorLink
              className="button trial animated shake"
              to={content.button1.to || ""}
            >
              {content.button1.label || ""}
            </AnchorLink>
            <AnchorLink className="button learn-more" to={content.button2.to}>
              {content.button2.label || ""}
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  )
}
