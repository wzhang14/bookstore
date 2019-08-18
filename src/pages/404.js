import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner info="Sorry. The page you are looking for can not be found.">
          <AniLink to="/" fade className="btn-white">
            Back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
