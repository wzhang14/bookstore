import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Books from "../components/Books/Books"

const books = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.books.childImageSharp.fluid}></StyledHero>
      <Books />
    </Layout>
  )
}

export default books

export const query = graphql`
  query {
    books: file(relativePath: { eq: "books.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
