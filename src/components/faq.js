import React from "react"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

import content from "../../content/faq.yaml"

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css"

export default function Example() {
  return (
    <section id="faq">
      <h2 style={{ textAlign: "center", margin: "25px auto" }}>
        Frequently Asked Questions (FAQ)
      </h2>
      <Accordion>
        {content.map((item, index) => (
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>{item.question}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>{item.answer}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
