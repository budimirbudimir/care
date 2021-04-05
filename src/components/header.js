import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { useSiteMetadata } from "../hooks/use-site-metadata"

import NavMenu from "./navmenu"
import HeaderSocial from "./header-social"

// import { useIntl, IntlProvider } from "../hooks/useIntl"
// import contentEN from "../../content/en/call-to-action.yaml"
// import contentDE from "../../content/de/call-to-action.yaml"

export default () => {
  return (
    <header>
      <div className="logo">
        <AnchorLink to="/#top">
          {/* <img alt="" src={ useSiteMetadata().logo } /> */}
          Krafft Institut
        </AnchorLink>
      </div>

      <NavMenu />
      <HeaderSocial />
    </header>
  )
}
