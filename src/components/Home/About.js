import React from "react"
import Title from "../Title"
import sytles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "bg02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={sytles.about}>
      <Title title="about" subTitle="us" />
      <div className={sytles.aboutCenter}>
        <article className={sytles.aboutImg}>
          <div className={sytles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="about us" />
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
