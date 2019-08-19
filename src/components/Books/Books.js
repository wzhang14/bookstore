import React from "react"
import BookList from "./BookList"
import { useStaticQuery, graphql } from "gatsby"

const getBooks = graphql`
  query {
    books: allContentfulBooks {
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

const Books = () => {
  const { books } = useStaticQuery(getBooks)

  return <BookList books={books} />
}

export default Books
