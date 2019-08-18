import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact/Contact"
import { graphql } from "gatsby"

const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.contact.childImageSharp.fluid}></StyledHero>
      <Contact />
    </Layout>
  )
}

export default contact

export const query = graphql`
  query {
    contact: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
