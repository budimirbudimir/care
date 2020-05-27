import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Scrollspy from "react-scrollspy"


export default function () {
  const [isVisible, setVisibility] = useState(false)

  const menuItems = [
    {path: 'features', label: 'Features'},
    {path: 'pricing', label: 'Pricing'},
    {path: 'screenshots', label: 'Screenshots'},
    {path: 'testimonials', label: 'Testimonials'},
    {path: 'subscribe', label: 'Subscribe'},
  ]

  let showStyle = null
  if (isVisible){
    showStyle = {transform: 'scaleY(1)'}
  }else{
    showStyle = null
  }

  return(
    <nav id="nav-wrap">
      <button id="toggle-btn" href="/#" title="Menu" onClick={() => setVisibility(!isVisible)}>Menu</button>

      <Scrollspy
        id="nav"
        className="nav mobile"
        style={showStyle}
        items={ menuItems.map(a => a.path) }
        currentClassName="current"
        offset={-100} >

        {menuItems.map((value, index) => {
          return (
            <li key={index}><button onClick={() =>
                {
                  scrollTo('#' + menuItems[index].path)
                  setVisibility(0)
                }
              }>
                {menuItems[index].label}
              </button></li>
          )
        })}

      </Scrollspy>
    </nav>
  )
}