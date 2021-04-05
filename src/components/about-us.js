import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

// import { useIntl, IntlProvider } from "../hooks/useIntl"
// import contentEN from "../../content/en/about-us.yaml"
// import contentDE from "../../content/de/about-us.yaml"
// import contentAL from "../../content/al/about-us.yaml"
import getContent from "../hooks/getContent"

export default ({ lang }) => {
  const content = getContent("about-us", lang)

  return (
    <section id="about-us">
      <h1 style={{ textAlign: "center" }}>Who we are</h1>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo.
      </p>

      <hr />

      {content.map((value, index) => {
        let pos, imagepos
        if (index % 2 === 0) {
          pos = "right"
          imagepos = "left"
        } else {
          pos = "left"
          imagepos = "right"
        }

        let media
        if (value.image) {
          media = <img src={value.image} alt="" style={{ maxWidth: "64px" }} />
        } else if (value.vimeo) {
          media = (
            <div className="fluid-video-wrapper">
              <iframe
                title="video"
                src={
                  "https://player.vimeo.com/video/" +
                  value.vimeo +
                  "?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39"
                }
                width="500"
                height="281"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              ></iframe>
            </div>
          )
        }

        return (
          <div className={"row feature " + value.name}>
            <ScrollAnimation
              animateIn="pulse"
              animateOnce={true}
              initiallyVisible={true}
              className={"six columns feature-media " + imagepos}
            >
              {media}
            </ScrollAnimation>

            <div className={"six columns " + pos}>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </div>
          </div>
        )
      })}

      {/* <div>
      <p style={{ textAlign: "center" }}>
        Instutute registration number: 1234567890 /// Insistute statute:{" "}
        <a href="#">Download here</a>
      </p>
    </div> */}
    </section>
  )
}
