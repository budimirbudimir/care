import React from "react"

import Layout from "../components/layout"

import Hero from "../components/hero"
import AboutUs from "../components/about-us"
// import Features from "../components/features"
import Partners from "../components/partners"
import CalltoAction from "../components/call-to-action"
import CalltoAction2 from "../components/call-to-action-2"
import Contact from "../components/contact"
import Screenshots from "../components/screenshots"
import Testimonials from "../components/testimonials"
// import Subscribe from "../components/subscribe"

import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { sections } = useSiteMetadata()
  const availableSections = {
    hero: Hero,
    "about-us": AboutUs,
    // features: Features,
    "call-to-action": CalltoAction,
    partners: Partners,
    testimonials: Testimonials,
    "call-to-action-2": CalltoAction2,
    screenshots: Screenshots,
    // subscribe: Subscribe,
    contact: Contact,
  }

  return (
    <>
      <Layout>
        {sections.map(section => {
          let Tagname = availableSections[section]
          return <Tagname />
        })}
      </Layout>
    </>
  )
}
