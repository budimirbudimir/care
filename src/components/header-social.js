import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import Flag from "react-world-flags"
import { useSiteMetadata } from "../hooks/use-site-metadata"

// import { useIntl, IntlProvider } from "../hooks/useIntl"
// import contentEN from "../../content/en/about-us.yaml"
// import contentDE from "../../content/de/about-us.yaml"
// import contentAL from "../../content/al/about-us.yaml"
// import getContent from "../hooks/getContent"

export default ({ lang, setLang }) => {
  // const content = getContent("header-social", lang)

  const { social } = useSiteMetadata()
  library.add(fab)

  return (
    <ul className="header-social">
      {social.map(mySocial => (
        <li>
          <a href={mySocial.url}>
            <FontAwesomeIcon icon={["fab", mySocial.fa]} />
          </a>
        </li>
      ))}

      <li onClick={() => setLang("setEN")}>
        <Flag code="GB" height={16} />
      </li>

      <li onClick={() => setLang("setDE")}>
        <Flag code="DE" height={16} />
      </li>

      <li onClick={() => setLang("setAL")}>
        <Flag code="AL" height={16} />
      </li>
    </ul>
  )
}
