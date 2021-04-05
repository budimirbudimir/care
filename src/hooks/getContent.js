import about_us_EN from "../../content/en/about-us.yaml"
import about_us_DE from "../../content/de/about-us.yaml"
import about_us_AL from "../../content/al/about-us.yaml"

import call_to_action_EN from "../../content/en/call-to-action.yaml"
import call_to_action_DE from "../../content/de/call-to-action.yaml"
import call_to_action_AL from "../../content/al/call-to-action.yaml"

import call_to_action_2_EN from "../../content/en/call-to-action-2.yaml"
import call_to_action_2_DE from "../../content/de/call-to-action-2.yaml"
import call_to_action_2_AL from "../../content/al/call-to-action-2.yaml"

import contact_EN from "../../content/en/contact.yaml"
import contact_DE from "../../content/de/contact.yaml"
import contact_AL from "../../content/al/contact.yaml"

import faq_EN from "../../content/en/faq.yaml"
import faq_DE from "../../content/de/faq.yaml"
import faq_AL from "../../content/al/faq.yaml"

import features_EN from "../../content/en/features.yaml"
import features_DE from "../../content/de/features.yaml"
import features_AL from "../../content/al/features.yaml"

// import footer_EN from "../../content/en/footer.yaml"
// import footer_DE from "../../content/de/footer.yaml"
// import footer_AL from "../../content/al/footer.yaml"

// import header_social_EN from "../../content/en/header-social.yaml"
// import header_social_DE from "../../content/de/header-social.yaml"
// import header_social_AL from "../../content/al/header-social.yaml"

// import header_EN from "../../content/en/header.yaml"
// import header_DE from "../../content/de/header.yaml"
// import header_AL from "../../content/al/header.yaml"

import hero_EN from "../../content/en/hero.yaml"
import hero_DE from "../../content/de/hero.yaml"
import hero_AL from "../../content/al/hero.yaml"

import partners_EN from "../../content/en/partners.yaml"
import partners_DE from "../../content/de/partners.yaml"
import partners_AL from "../../content/al/partners.yaml"

import pricing_EN from "../../content/en/pricing.yaml"
import pricing_DE from "../../content/de/pricing.yaml"
import pricing_AL from "../../content/al/pricing.yaml"

import subscribe_EN from "../../content/en/subscribe.yaml"
import subscribe_DE from "../../content/de/subscribe.yaml"
import subscribe_AL from "../../content/al/subscribe.yaml"

import testimonials_EN from "../../content/en/testimonials.yaml"
import testimonials_DE from "../../content/de/testimonials.yaml"
import testimonials_AL from "../../content/al/testimonials.yaml"

const intl_map = {
  al: {
    "about-us": about_us_AL,
    "call-to-action": call_to_action_AL,
    "call-to-action-2": call_to_action_2_AL,
    contact: contact_AL,
    faq: faq_AL,
    features: features_AL,
    // footer: footer_AL,
    // "header-social": header_social_AL,
    // header: header_AL,
    hero: hero_AL,
    partners: partners_AL,
    pricing: pricing_AL,
    subscribe: subscribe_AL,
    testimonials: testimonials_AL,
  },
  de: {
    "about-us": about_us_DE,
    "call-to-action": call_to_action_DE,
    "call-to-action-2": call_to_action_2_DE,
    contact: contact_DE,
    faq: faq_DE,
    features: features_DE,
    // footer: footer_DE,
    // "header-social": header_social_DE,
    // header: header_DE,
    hero: hero_DE,
    partners: partners_DE,
    pricing: pricing_DE,
    subscribe: subscribe_DE,
    testimonials: testimonials_DE,
  },
  en: {
    "about-us": about_us_EN,
    "call-to-action": call_to_action_EN,
    "call-to-action-2": call_to_action_2_EN,
    contact: contact_EN,
    faq: faq_EN,
    features: features_EN,
    // footer: footer_EN,
    // "header-social": header_social_EN,
    // header: header_EN,
    hero: hero_EN,
    partners: partners_EN,
    pricing: pricing_EN,
    subscribe: subscribe_EN,
    testimonials: testimonials_EN,
  },
}

const getContent = (section, lang) => {
  console.log({ map: intl_map[lang], lang, section })
  return intl_map[lang][section]
}

export default getContent
