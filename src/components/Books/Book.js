import React from "react"
import Image from "gatsby-image"
import styles from "../../css/book.module.css"
import AniLink from "gatsby-plugin-transition-link"

const Book = ({ book }) => {
  const { slug, images } = book
  let mainImage = images[0].fluid

  return (
    <article className={styles.book}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="book"></Image>
        <AniLink fade className={styles.link} to={`/books/${slug}`}>
          details
        </AniLink>
      </div>
    </article>
  )
}

export default Book
