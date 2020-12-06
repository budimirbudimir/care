import React from "react"

import Layout from "../components/layout"

import Hero from "../components/hero"
import AboutUs from "../components/about-us"
// import Features from "../components/features"
// import Pricing from "../components/pricing"
import CalltoAction from "../components/call-to-action"
import Screenshots from "../components/screenshots"
import Testimonials from "../components/testimonials"
import Subscribe from "../components/subscribe"

import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { sections } = useSiteMetadata()
  const availableSections = {
    hero: Hero,
    "about-us": AboutUs,
    // features: Features,
    "call-to-action": CalltoAction,
    // pricing: Pricing,
    testimonials: Testimonials,
    screenshots: Screenshots,
    subscribe: Subscribe,
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
