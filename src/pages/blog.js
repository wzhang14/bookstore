import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blog.childImageSharp.fluid}></StyledHero>
    </Layout>
  )
}

export default blog

export const query = graphql`
  query {
    blog: file(relativePath: { eq: "blog.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
