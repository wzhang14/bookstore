import React from "react"
import Title from "../Title"
import sytles from "../../css/about.module.css"
import img from "../../images/bg02.jpg"

const About = () => {
  return (
    <section className={sytles.about}>
      <Title title="about" subTitle="us" />
      <div className={sytles.aboutCenter}>
        <article className={sytles.aboutImg}>
          <div className={sytles.imgContainer}>
            <img src={img} alt="about us" />
          </div>
        </article>
        <article className={sytles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            BookStore is an independent e-book store located on Guy Street two
            blocks east of Concordia University in the heart of downtown
            Montreal.{" "}
          </p>
          <p>
            We specialize in literature, philosophy and poetry. We also carry a
            unique assortment of books in such fields as drama, history,
            political science, theology, Eastern religion, and art.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
