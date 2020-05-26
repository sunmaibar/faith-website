import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="與我聯繫" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/xrgypbby" method="POST">
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">姓名</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="怎麼稱呼你"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">電子信箱</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@email.com"
              />
            </div>
            {/* 描述 */}
            <div className="form-group">
              <label htmlFor="description">描述一下</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="寫些東西吧"
              />
            </div>
            {/* 提交鈕  */}
            <button type="submit" className="btn btn-yellow btn-block mt-5">
              送出
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
