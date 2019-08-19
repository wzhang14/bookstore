import React from "react"
import Book from "../Books/Book"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link"

const getBooks = graphql`
  query {
    featuredBooks: allContentfulBooks(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          author
          slug
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedBooks = () => {
  const response = useStaticQuery(getBooks)
  const books = response.featuredBooks.edges

  return (
    <section className={styles.books}>
      <Title title="featured" subTitle="books"></Title>
      <div className={styles.center}>
        {books.map(({ node }) => {
          return <Book key={node.contentful_id} book={node}></Book>
        })}
      </div>
      <AniLink fade to="/books" className="btn-primary">
        all books
      </AniLink>
    </section>
  )
}

export default FeaturedBooks
