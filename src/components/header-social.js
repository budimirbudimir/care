import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { useSiteMetadata } from "../hooks/use-site-metadata"

// import { useIntl, IntlProvider } from "../hooks/useIntl"
import contentEN from "../../content/en/about-us.yaml"
import contentDE from "../../content/de/about-us.yaml"

export default ({ lang, setLang }) => {
  const content = lang === "de" ? contentDE : contentEN

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
      <li onClick={() => setLang(lang === "en" ? "setDE" : "setEN")}>{lang}</li>
    </ul>
  )
}
