import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Moliendo</h1>
            <h4>Developer</h4>
            <Link to="/contacto" className="btn">
              Contactame
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image
          fluid={fluid}
          className="hero-img"
          style={{ "max-width": "500px" }}
        />
      </div>
    </header>
  )
}

export default Hero
