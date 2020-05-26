import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroumndSection from "../components/Globals/BackgroundSection"
import { FaStore } from "react-icons/fa"
import Info from "../components/Home/Info"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroumndSection
      img={data.img.childImageSharp.fluid}
      title="國際賢妻良母"
    />

    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "header_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
