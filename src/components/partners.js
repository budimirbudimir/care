import React from "react"
import { Link } from "gatsby"
// import content from "../../content/partners.yaml"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

// import { useIntl, IntlProvider } from "../hooks/useIntl"
// import contentEN from "../../content/en/partners.yaml"
// import contentDE from "../../content/de/partners.yaml"
// import contentAL from "../../content/al/partners.yaml"
import getContent from "../hooks/getContent"

export default ({ lang }) => {
  const content = getContent("partners", lang)

  library.add(fas)

  return (
    <section id="partners">
      <div className="row section-head">
        <h1>{content.title}</h1>
        <p>{content.body}</p>
      </div>

      <div className="row">
        <div className="pricing-tables bgrid-halves s-bgrid-halves">
          {content.plans.map((plan, index) => (
            <div className="column">
              <div className="price-block">
                <h3 className="plan-title">
                  {/* <i className="fa">
                    <FontAwesomeIcon icon={plan.fa} />
                  </i> */}

                  <img
                    src={plan.image}
                    alt="Logo goes here"
                    style={{ maxWidth: 200 }}
                  />
                  <br />
                  {plan.title}
                </h3>
                <p className="plan-price">
                  {plan.price}
                  <span>{plan.per}</span>
                </p>

                <ul className="features">
                  {plan.features.map((value, index) => (
                    <li>{value}</li>
                  ))}
                </ul>
                <footer className="plan-sign-up">
                  <Link className="button" to={plan.signup.to}>
                    {plan.signup.label}
                  </Link>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
