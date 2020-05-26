import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroumndSection from "../components/Globals/BackgroundSection"
import { FaShoppingCart, FaStore } from "react-icons/fa"
import Info from "../components/Home/Info"
const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroumndSection
      img={data.img.childImageSharp.fluid}
      title="小本經營薄利多銷"
      styleClass="about-background"
    />

    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-fashion_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
