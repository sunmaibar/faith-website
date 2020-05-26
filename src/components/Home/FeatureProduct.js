import React from "react"
import Img from "gatsby-image"
const FeatureProduct = ({ product }) => {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6 className="text-yellow">${product.price}</h6>
          <a
            href={product.description.description}
            target="_blank"
            rel="noreferrer"
          >
            立即前往
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeatureProduct
