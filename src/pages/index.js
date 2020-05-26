import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroumndSection from "../components/Globals/BackgroundSection"
// import { FaShoppingCart, FaStore } from "react-icons/fa"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import FeatureProducts from "../components/Home/FeatureProducts"
import Contact from "../components/Home/Contact"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroumndSection
      img={data.img.childImageSharp.fluid}
      title="國際閒妻良母"
    />

    <Info />
    <Menu items={data.menu} />
    <FeatureProducts />
    <Contact />
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
    menu: allContentfulProducts {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          date
          image {
            fixed(width: 220, height: 220) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
