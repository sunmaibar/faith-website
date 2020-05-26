import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="優質購物社團"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              ✔主賣德國原裝進口商品 絕無山寨仿冒品，只賣在台現貨
              提前售完才需預購。 <br /> 小本經營，如有喜歡的商品請聯絡管理員
            </p>
            <Link to="/about/">
              <button className="btn btn-yellow">關於賢妻良母</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
