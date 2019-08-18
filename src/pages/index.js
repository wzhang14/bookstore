import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.bg01.childImageSharp.fluid}>
      <Banner
        title="Welcome to BookStore"
        info="Sign up to our monthly newsletter and get a sneak peek at our new arrivals, signed and hard-to-find books!"
      >
        <AniLink to="/books" fade className="btn-white">
          explore books
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
)

export const query = graphql`
  query {
    bg01: file(relativePath: { eq: "bg01.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
