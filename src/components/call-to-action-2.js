import React from "react"
// import content from "../../content/call-to-action-2.yaml"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faUpload } from "@fortawesome/free-solid-svg-icons"

// import { useIntl, IntlProvider } from "../hooks/useIntl"
// import contentEN from "../../content/en/call-to-action-2.yaml"
// import contentDE from "../../content/de/call-to-action-2.yaml"
// import contentAL from "../../content/al/call-to-action-2.yaml"
import getContent from "../hooks/getContent"

export default ({ lang }) => {
  const content = getContent("call-to-action-2", lang)

  return (
    <section id="call-to-action-2">
      <div className="row">
        {/* <div className="two columns header-col">
        <h1><FontAwesomeIcon icon={faUpload} /><span>Get Hosting.</span></h1>
      </div> */}
        <div className="seven columns">
          <h2>
            <a href={content.title.url}>{content.title.text}</a>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: content.body }} />
        </div>

        <div className="three columns action">
          <a href={content.button.url} className="button">
            {content.button.label}
          </a>
        </div>
      </div>
    </section>
  )
}
